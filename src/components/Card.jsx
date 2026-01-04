import React from "react";

const Card = (props) => {
  return (
    <article className="w-full bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-200 p-4">
      <header className="flex items-start justify-between">
        <h3 className="text-lg font-semibold text-slate-800">{props.name}</h3>
      </header>

      <div className="mt-3 space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-slate-700">Price:</span>
          <span className="text-sm text-slate-600">{parseFloat(props.price).toFixed(2)}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-slate-700">Category:</span>
          <span className="text-sm text-slate-600">{props.category}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-slate-700">Stock:</span>
          <span className="text-sm text-slate-600">{props.stock || 0}</span>
        </div>
      </div>

      <div className="mt-4 flex justify-end gap-3">
        <button
          onClick={props.onEdit}
          className="px-3 py-1 bg-emerald-500 text-white text-sm font-medium rounded-lg shadow-sm hover:bg-emerald-600 transition"
        >
          Edit
        </button>

        <button
          onClick={props.onDelete}
          className="px-3 py-1 bg-red-500 text-white text-sm font-medium rounded-lg shadow-sm hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </article>
  );
};

export default Card;
