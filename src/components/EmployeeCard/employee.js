import React from "react";
import "./employee.css";

function EmployeeCard(props) {
  return (
    <>
    <tr>
        <td>
        <img
          alt={props.name}
          src={props.image}>
          </img></td>
      <td>{props.name}</td>
      <td>{props.rank}</td>
      <td>{props.phone}</td>
      <td>{props.email}</td>
      <td>{props.dob}</td>
          </tr>
    </>
  );
}

export default EmployeeCard;
