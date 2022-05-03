import React from "react";

const NodeList = (props) => {
  let count = 1;
  return (
    <div className="noteList">
      <p className="title">Data from local server</p>
      <table>
        <thead>
          <tr className="tableHead">
            <th>ID</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((listItem) => (
            <tr key={listItem.id} id={listItem.id}>
              <td>{count++}</td>
              <td>{listItem.firstname}</td>
              <td>{listItem.lastname}</td>
              <td>{listItem.phone}</td>
              <td>{listItem.role}</td>
              <td>{listItem.message}</td>
              <td>
                <i
                  className="material-icons"
                  onClick={() => props.deleteNote(listItem.id)}
                >
                  delete_forever
                </i>
                <i
                  className="material-icons"
                  onClick={() => props.editNote(listItem)}
                >
                  edit
                </i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default NodeList;
