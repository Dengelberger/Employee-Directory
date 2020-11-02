import React, { Component } from "react";
import SearchBar from "../SearchBar/searchbar.js";
import employee from "../../employees.json";
import EmployeeCard from "../EmployeeCard/employee.js";
// import SearchResults from "../SearchResults/searchresults.js";
import "./main.css";

class Main extends Component {
  state = {
    employeeList: employee,
    filteredList: employee,
    search: "", 
    sortDirection: "ASC"
  };


  // SORT LIST BY EMPLOYEE NAME

  // const sortDirection = (sortAsc) => {
  //   const sortedList = employeeInfo.filderedList.sort
  //     ((a, b) => {
  //       var empA = a.name.toLowerCase();
  //       var empB = b.name.toLowerCase();

  //       if (empA < empB) {
  //         return (sortAsc) ? -1 : 1;
  //       }
  //       if (empA > empB) {
  //         return (sortAsc) ? 1 : -1;
  //       }
  //       return 0;

  //     });
  //   updateEmployeeInfo({
  //     ...employeeInfo,
  //     filteredList: sortedList
  //   });
  // };
  // //EMPLOYEE SEARCH BY EMPLOYEE NAME.
  handleInputChange = event => {
    event.preventDefault();

    const { value, name } = event.target
    const filteredList = employee.filter(emp => emp.name.indexOf(value) > -1)

    this.setState(
      {
        [name]: value,
        employee: filteredList
      }
    );
  };
  //RENDER THE SEARCH BAR AND TABLE TO APP.JS WHERE THE WHOLE THING GETS ASSEMBLED.  THE SEARCH BAR PORTION OF THIS CAME FROM THE SEARCHBAR.JS, THE EMPLOYEE CARD CAME FROM THE EMPLOYEE.JS. 
  render() {
    return (
      <>
        <SearchBar name="search" handleInputChange={this.handleInputChange} value={this.state.search} />
       
        <table className="table">
          <thead className="theader">
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
            {this.state.employeeList.map(employee => <EmployeeCard
              key={employee.id}
              id={employee.id}
              image={employee.image}
              name={employee.name}
              rank={employee.rank}
              phone={employee.phone}
              email={employee.email}
              dob={employee.dob} />)}
          </tbody>
        </table>
      </>
    );
  };
};
export default Main;

