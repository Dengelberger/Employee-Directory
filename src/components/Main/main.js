import React, { Component } from "react";
import SearchBar from "../SearchBar/searchbar.js";
import employee from "../../employees.json";
import EmployeeCard from "../EmployeeCard/employee.js";
import "./main.css";

class Main extends Component {
  state = {
    employee: employee,
    sortOrder: "ASC",
    search: ""
  }

// SORT FUNCTION - NOT REALLY SURE HOW TO FIX THIS TO MAKE IT WORK.
// handleClick = () => {
//   this.setState({ employee: this.state.employee.name.sort()})

//   if(sortOrder === "ASC") {
//     sortOrder = false;
//   } else {
//     sortOrder = true;
//     employee.reverse();
//   }
// }

//EMPLOYEE SEARCH BY EMPLOYEE NAME.
handleInputChange = event => {
  event.preventDefault();
  const { value, name } = event.target
//IF THE SEARCHED FOR NAME HAS AN INDEX OF SOMETHING GREATER THAN -1, THEN THAT NAME IS IN THE DIRECTORY.
  const filteredEmployees = employee.filter(employee => employee.name.indexOf(value) > -1)
// SHOW ONLY EMPLOYEES THAT PASS THE ABOVE FILTER.  IF THERE ARE EMPLOYEES THAT DO NOT FIT THE SEARCH THEY SHOULD DROP OUT AND NOT APPEAR.  
  this.setState (
  { [name]: value,
  employee: filteredEmployees }
  );
  }; 

//RENDER THE SEARCH BAR AND TABLE TO APP.JS WHERE THE WHOLE THING GETS ASSEMBLED.  THE SEARCH BAR PORTION OF THIS CAME FROM THE SEARCHBAR.JS, THE EMPLOYEE CARD CAME FROM THE EMPLOYEE.JS. 
render () {
  return (
    <>
    <SearchBar name="search" onChange={this.handleInputChange} value={this.state.search} />
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Photo</th>
          <th scope="col">Name</th>
          <th scope="col">Rank</th>
          <th scope="col">Phone Number</th>
          <th scope="col">e-mail Address</th>
          <th scope="col">Date of Birth</th>
        </tr>
      </thead>
      <tbody>
        {this.state.employee.map(employee => <EmployeeCard key={employee.id} id={employee.id} image={employee.image} name={employee.name} rank={employee.rank} phone={employee.phone} email={employee.email} dob={employee.dob}/>)}
      </tbody>
    </table>
    </>
  );
  };
};
export default Main;
