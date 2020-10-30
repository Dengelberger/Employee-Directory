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


handleClick = () => {
  this.setState({ employee: this.state.employee.sort()})

  if(sortOrder === "ASC") {
    sortOrder = false;
  } else {
    sortOrder = true;
    employee.reverse();
  }
}

handleInputChange = event => {
  event.preventDefault();

  const { value, name } = event.target

  const filteredEmployees = this.state.employee.filter(employee => employee.includes(this.state.search))

  this.setState (
    { [name]: value }
  );
};

render () {
  return (
    <>
    <SearchBar name="search" onChange={this.handleInputChange} value={this.state.search} />
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Icon</th>
          <th scope="col">Name</th>
          <th scope="col">Rank</th>
          <th scope="col">Phone Number</th>
          <th scope="col">e-mail Address</th>
          <th scope="col">Date of Birth</th>
        </tr>
      </thead>
      <tbody>
        {this.state.employee.map(employee => <EmployeeCard key={employee.id} id={employee.id} name={employee.name} rank={employee.rank} phone={employee.phone} email={employee.email} dob={employee.dob}/>)}
      </tbody>
    </table>
    </>
  );
  };
};
export default Main;
