const Sort = ({
  selectedSort,
  setSelectedSort,
  sort,
  setsort,
  order,
  setorder,
}) => {
  return (
    <div>
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text font-semibold">🔄 Sort By</span>
        </label>
        <select
          className="select select-bordered"
          // value={selectedSort}
          value={sort}
          onChange={(e) => {
            // setSelectedSort(e.target.value);
            setsort(e.target.value);

            const sortText = e.target.value;
            setsort(sortText.split("-")[0]);

            setorder(sortText.split("-")[1]);

            console.log(e.target.value);
          }}
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="az">Name (A-Z)</option>
          <option value="za">Name (Z-A)</option>
          <option value="feelow">Lowest Fee First</option>
          <option value="feehigh">Highest Fee First</option>
        </select>
      </div>
    </div>
    // <div className="form-control w-full max-w-xs">
    //   <label className="label">
    //     <span className="label-text font-semibold">🔄 Sort By</span>
    //   </label>
    //   <select
    //     className="select select-bordered"
    //     // value={selectedSort}
    //     value={short}
    //     onChange={(e) => {
    //       // setSelectedSort(e.target.value);
    //       setshort(e.target.value);
    //       const sortText = e.target.value;
    //       setshort(sortText.split("-")[0]);
    //       setorder(sortText.split("-")[1]);

    //       console.log(e.target.value);
    //     }}
    //   >
    //     <option value="newest-asc">Newest First</option>
    //     <option value="newest-desc">Oldest First</option>
    //     <option value="name-asc">Name (A-Z)</option>
    //     <option value="name-desc">Name (Z-A)</option>
    //     <option value="fee-low">Lowest Fee First</option>
    //     <option value="fee-high">Highest Fee First</option>
    //   </select>
    // </div>
  );
};

export default Sort;
