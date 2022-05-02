import React, { Component } from "react";
const axios = require("axios").default;

class NodeList extends Component {
  state = {
    data: [],
  };

  render() {
    const ax = axios.create({
      baseURL: "http://localhost:3010/",
    });
    ax.get("notes")
      .then((response) => response.data)
      .then((res) => this.setState({ data: res }));

    //   .then((res) => console.log(res[3].firstname));

    return (
      <div className="noteList">
        <p className="title">Data from local server</p>
        <ol className="listItem">
          {this.state.data.map((listItem) => (
            <li key={listItem.id}>
              {listItem.firstname} {listItem.lastname} | {listItem.phone} |{" "}
              {listItem.role} | {listItem.message}
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default NodeList;
