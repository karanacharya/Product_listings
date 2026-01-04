import React from "react";

const Header = ({onAddclick, viewMode, onViewModeChange}) => {
  return (
    <header className="bg-linear-to-r from-indigo-600 via-cyan-500 to-emerald-400 text-white rounded-xl p-4 shadow-md">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold">Product Listings</h1>

        <div className="flex items-center gap-4">
          {/* View Toggle Switch */}
          <div className="flex items-center gap-2 bg-white/20 rounded-lg p-1">
            <button
              onClick={() => onViewModeChange('card')}
              className={`px-3 py-1.5 rounded-md text-sm font-semibold transition ${
                viewMode === 'card'
                  ? 'bg-white text-indigo-600 shadow-sm'
                  : 'text-white/80 hover:text-white'
              }`}
              aria-label="Card view"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button
              onClick={() => onViewModeChange('list')}
              className={`px-3 py-1.5 rounded-md text-sm font-semibold transition ${
                viewMode === 'list'
                  ? 'bg-white text-indigo-600 shadow-sm'
                  : 'text-white/80 hover:text-white'
              }`}
              aria-label="List view"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

          <button
            onClick={onAddclick}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-semibold transition"
          >
            Add Product
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
