import React from "react";

const NodeList = (props) => {
  return (
    <div className="noteList">
      <p className="title">Data from local server</p>
      <table>
        <tr class="tableHead">
          <th>ID</th>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Phone</th>
          <th>Role</th>
          <th>Message</th>
        </tr>
        {props.data.map((listItem) => (
          <tr key={listItem.id}>
            <td>{listItem.id}</td>
            <td>{listItem.firstname}</td>
            <td>{listItem.lastname}</td>
            <td>{listItem.phone}</td>
            <td>{listItem.role}</td>
            <td>{listItem.message}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default NodeList;
