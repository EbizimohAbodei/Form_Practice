import React, { Component } from "react";
const axios = require("axios").default;

const NodeList = (props) => {
  return (
    <div className="noteList">
      <p className="title">Data from local server</p>
      <ol className="listItem">
        {props.data.map((listItem) => (
          <li key={listItem.id}>
            {listItem.firstname} {listItem.lastname} | {listItem.phone} |{" "}
            {listItem.role} | {listItem.message}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default NodeList;
