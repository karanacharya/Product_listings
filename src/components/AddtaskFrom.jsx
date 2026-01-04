import React, { useState } from "react";

const AddtaskFrom = ({
  setTasks,
  setShowForm,
  editingtask,
  setEditingtask,
}) => {
  const [name, setName] = useState(editingtask ? editingtask.name : "");
  const [price, setPrice] = useState(editingtask ? editingtask.price : "");
  const [category, setCategory] = useState(editingtask ? editingtask.category : "");
  const [stock, setStock] = useState(editingtask ? editingtask.stock : "");
  
  // Validation errors state
  const [errors, setErrors] = useState({});

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    // Name validation (required)
    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    // Price validation (required, must be a number, must be positive)
    if (!price) {
      newErrors.price = "Price is required";
    } else if (isNaN(price) || parseFloat(price) <= 0) {
      newErrors.price = "Price must be a positive number";
    }

    // Category validation (required)
    if (!category.trim()) {
      newErrors.category = "Category is required";
    }

    // Stock validation (optional, but if provided must be a number and non-negative)
    if (stock && (isNaN(stock) || parseFloat(stock) < 0)) {
      newErrors.stock = "Stock must be a non-negative number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  function handleSubmit(e) {
    e.preventDefault();

    // Validate form before submitting
    if (!validateForm()) {
      return;
    }

    if (editingtask) {
      // editing product functionality
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === editingtask.id
            ? {
                ...task,
                name: name.trim(),
                price: parseFloat(price),
                category: category.trim(),
                stock: stock ? parseFloat(stock) : 0,
              }
            : task
        )
      );
      setEditingtask(null);
    } else {
      //adding product functionality
      setTasks((prev) => [
        ...prev,
        {
          id: Date.now(),
          name: name.trim(),
          price: parseFloat(price),
          category: category.trim(),
          stock: stock ? parseFloat(stock) : 0,
        },
      ]);
    }
    setShowForm(false);
    setErrors({});
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
      <div className="bg-white/90 backdrop-blur-md w-full max-w-xl rounded-3xl p-6 md:p-8 shadow-2xl ring-1 ring-slate-200">
        <div className="flex items-start justify-between mb-4">
          <h2 className="text-2xl font-semibold text-slate-800">{editingtask ? 'Edit Product' : 'Add New Product'}</h2>
          <button
            onClick={() => {
              setShowForm(false);
              setErrors({});
            }}
            aria-label="Close"
            className="text-slate-500 hover:text-slate-700 p-2 rounded-md transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 011.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Product Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                if (errors.name) {
                  setErrors({ ...errors, name: "" });
                }
              }}
              className={`block w-full bg-white border rounded-xl px-4 py-2 text-slate-800 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 transition ${
                errors.name
                  ? "border-red-300 focus:ring-red-300"
                  : "border-slate-200 focus:ring-emerald-300"
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Price <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              step="0.01"
              min="0"
              placeholder="0.00"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
                if (errors.price) {
                  setErrors({ ...errors, price: "" });
                }
              }}
              className={`block w-full bg-white border rounded-xl px-4 py-2 text-slate-800 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 transition ${
                errors.price
                  ? "border-red-300 focus:ring-red-300"
                  : "border-slate-200 focus:ring-emerald-300"
              }`}
            />
            {errors.price && (
              <p className="mt-1 text-sm text-red-600">{errors.price}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Category <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Product Category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
                if (errors.category) {
                  setErrors({ ...errors, category: "" });
                }
              }}
              className={`block w-full bg-white border rounded-xl px-4 py-2 text-slate-800 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 transition ${
                errors.category
                  ? "border-red-300 focus:ring-red-300"
                  : "border-slate-200 focus:ring-emerald-300"
              }`}
            />
            {errors.category && (
              <p className="mt-1 text-sm text-red-600">{errors.category}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Stock
            </label>
            <input
              type="number"
              step="1"
              min="0"
              placeholder="0"
              value={stock}
              onChange={(e) => {
                setStock(e.target.value);
                if (errors.stock) {
                  setErrors({ ...errors, stock: "" });
                }
              }}
              className={`block w-full bg-white border rounded-xl px-4 py-2 text-slate-800 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 transition ${
                errors.stock
                  ? "border-red-300 focus:ring-red-300"
                  : "border-slate-200 focus:ring-emerald-300"
              }`}
            />
            {errors.stock && (
              <p className="mt-1 text-sm text-red-600">{errors.stock}</p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row justify-end gap-3 mt-2">
            <button
              type="button"
              onClick={() => {
                setShowForm(false);
                setErrors({});
              }}
              className="px-4 py-2 border border-slate-200 text-slate-700 bg-white rounded-xl hover:bg-slate-50 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-2 bg-linear-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-xl hover:from-emerald-600 hover:to-emerald-700 shadow-md transition"
            >
              {editingtask ? "Update Product" : "Add Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddtaskFrom;
