import React from 'react'

const CompleteTask = ({ onAddclick }) => {
  return (
    <div className="w-full flex items-center justify-center py-12">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-md p-6 text-center">
        <div className="mx-auto w-20 h-20 flex items-center justify-center rounded-full bg-linear-to-tr from-indigo-100 to-emerald-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6M9 16h6M9 8h6M7 20h10a2 2 0 002-2V7a2 2 0 00-2-2h-3.5a1.5 1.5 0 01-3 0H7a2 2 0 00-2 2v11a2 2 0 002 2z" />
          </svg>
        </div>

        <h3 className="mt-4 text-xl font-semibold text-slate-800">No Products listed yet</h3>

        <p className="mt-2 text-sm text-slate-500">No Products listed now — please add one to see it here.</p>

        <div className="mt-5">
          <button
            onClick={onAddclick}
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white font-medium rounded-lg shadow-sm hover:bg-emerald-600 transition"
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  )
}

export default CompleteTask
