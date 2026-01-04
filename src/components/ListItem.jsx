import React from "react";

const ListItem = (props) => {
  return (
    <article className="w-full bg-white rounded-xl shadow-md hover:shadow-lg transition duration-200 p-4 border border-slate-100">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-4 gap-4 items-center">
          <div className="min-w-0">
            <h3 className="text-lg font-semibold text-slate-800 truncate">{props.name}</h3>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-600">Price:</span>
            <span className="text-sm text-slate-800 font-semibold">${parseFloat(props.price).toFixed(2)}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-600">Category:</span>
            <span className="text-sm text-slate-800">{props.category}</span>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-slate-600">Stock:</span>
            <span className="text-sm text-slate-800 font-medium">{props.stock || 0}</span>
          </div>
        </div>

        <div className="flex gap-2 shrink-0">
          <button
            onClick={props.onEdit}
            className="px-3 py-1.5 bg-emerald-500 text-white text-sm font-medium rounded-lg shadow-sm hover:bg-emerald-600 transition whitespace-nowrap"
          >
            Edit
          </button>

          <button
            onClick={props.onDelete}
            className="px-3 py-1.5 bg-red-500 text-white text-sm font-medium rounded-lg shadow-sm hover:bg-red-600 transition whitespace-nowrap"
          >
            Delete
          </button>
        </div>
      </div>
    </article>
  );
};

export default ListItem;

