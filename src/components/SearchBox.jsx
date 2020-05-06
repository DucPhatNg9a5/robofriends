import React from "react";

const SearchBox = ({searchChange}) => {
  return (
    <div>
      <input
        className="bg-lightest-blue pa3 mb3 ba b--green"
        type="search"
        placeholder="Search Robot"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
