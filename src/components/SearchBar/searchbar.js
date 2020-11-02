import React from "react";
import "./searchbar.css";

function SearchBar(props) {
  return (
    <form id="searchbox">
    <div className="form-row">
      <div className="col sm-9">
        <input type="search"
        onChange={props.handleInputchange}
        value={props.search} 
        className="form-control" 
        name="search"
        id="searchFilter"
        placeholder="Search Employee"/>
      </div>
      <div className="col sm-3">
        <button type="button"
        onClick={props.sortDirection}
          value={props.sortASC}
          name="sort">
          Sort</button>
      </div>
    </div>
    </form>
  );
};

export default SearchBar;
