import React from "react";

const Filter = () => {
  return (
    <div>
      <div className="flex flex-row-reverse gap-10">
        <label className="block text-sm font-semibold mb-2">
          <select
            className="select select-bordered w-full"
            // value={selectedCategory}
            // onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="photography">Photography</option>
            <option value="sports">Sports</option>
            <option value="tech">Tech</option>
            <option value="art">Art</option>
            <option value="music">Music</option>
            <option value="cultural">Cultural</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default Filter;
