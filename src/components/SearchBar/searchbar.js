import React from "react";
import "./searchbar.css";

function SearchBar(props) {
  return (
    <form id="searchbox">
    <div class="form-row">
      <div class="col">
        <input type="search"
        onChange={props.handleInputchange}
        value={props.search} 
        class="form-control" 
        name="search"
        id="searchFilter"
        placeholder="Search Employee"/>
      </div>
    </div>
    </form>
  );
};

export default SearchBar;
