import React from "react";
import "./searchbar.css";

function SearchBar(props) {
  return (
    <div id="searchbox">
    <div className="form-row">
      <div className="col sm-9">
        <input type="search"
        onChange={props.handleInputChange}
        value={props.search} 
        className="form-control" 
        name="search"
        id="searchFilter"
        placeholder="Search Employee"/>
      </div>
      <div className="col sm-3">
        <button type="button"
        onClick={props.sortDirection}
          name="sort">
          Sort</button>
      </div>
    </div>
    </div>
  );
};

export default SearchBar;
