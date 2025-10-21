import React from "react";

const FilterBar = ({ district, setDistrict, stream, setStream, handleSearch }) => {
  const onKeyDown = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="bg-white p-4 rounded-2xl shadow-md flex flex-col md:flex-row gap-4 justify-between items-center mt-6">
      <div className="flex-1 flex gap-3 w-full max-w-3xl items-center">
        <input
          aria-label="district"
          type="text"
          placeholder="Enter district (e.g. Ajmer)"
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          onKeyDown={onKeyDown}
          className="border px-4 py-2 rounded-xl w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-sky-300"
        />

        <select
          value={stream}
          onChange={(e) => setStream(e.target.value)}
          onKeyDown={onKeyDown}
          className="border px-4 py-2 rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-sky-300"
        >
          <option value="">Select Stream</option>
          <option value="tenth">10th</option>
          <option value="science">Science</option>
          <option value="commerce">Commerce</option>
          <option value="arts">Arts</option>
        </select>
      </div>

      <div className="flex gap-3 mt-3 md:mt-0">
        <button
          onClick={() => { setDistrict(""); setStream(""); }}
          className="border px-4 py-2 rounded-xl hover:bg-gray-50"
          title="Clear filters"
        >
          Clear
        </button>

        <button
          onClick={handleSearch}
          className="bg-sky-600 text-white px-5 py-2 rounded-xl hover:bg-sky-700 transition-all"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
