import "./index.css";
import React, { useState, useEffect, Component } from "react";
import Form from "./components/Form";
import View from "./components/View";
import Popup from "./components/Popup";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NoteList from "./components/NoteList";
import EditForm from "./components/EditForm";
const axios = require("axios").default;

class App extends Component {
  state = {
    firstname: " ",
    lastname: " ",
    phonenumber: " ",
    message: " ",
    role: " ",
    data: [],
    note: [],
    showPopup: false,
    editMode: false,
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ showPopup: true });
  };

  handleRefresh = () => {
    window.location.reload();
  };

  cancelPost = () => {
    this.setState({ showPopup: false });
  };

  componentDidMount() {
    // const ax = axios.create({
    //   baseURL: "http://localhost:3010/",
    // });
    axios
      .get("http://localhost:3010/notes")
      .then((response) => response.data)
      .then((res) => this.setState({ data: res }));
  }

  postData = () => {
    axios
      .post("http://localhost:3010/notes", {
        id: "",
        firstname: `${this.state.firstname}`,
        lastname: `${this.state.lastname}`,
        phone: `${this.state.phonenumber}`,
        role: `${this.state.role}`,
        message: `${this.state.message}`,
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
    this.handleRefresh();
  };

  deleteItem = (id) => {
    axios.delete(`http://localhost:3010/notes/${id}`).then((res) => {
      const notes = this.state.data.filter((item) => item.id !== id);
      this.setState({ data: notes });
    });
  };

  editItem = (item) => {
    // axios
    //   .get(`http://localhost:3010/notes/${item.id}`)
    //   .then((res) => this.setState({ editMode: true, note: res.data }));
    this.setState({ editMode: true, note: item });
  };

  handleEditChange = (e) => {
    this.setState({
      note: { ...this.state.note, [e.target.name]: e.target.value },
    });
  };

  handleEdit = (id) => {
    axios
      .put(`http://localhost:3010/notes/${id}`, this.state.note)
      .then((res) => res.data);
  };

  closeEdit = () => {
    this.setState({ editMode: false });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className="formView">
          <Form changes={this.handleChange} submit={this.handleSubmit} />
          <View {...this.state} />
        </div>
        <div>
          {this.state.editMode ? (
            <EditForm
              {...this.state.note}
              changes={(e) => this.handleEditChange(e, "item")}
              submit={() => this.handleEdit(this.state.note.id)}
              closeEdit={this.closeEdit}
            />
          ) : (
            ""
          )}
        </div>
        <div>
          {this.state.showPopup ? (
            <Popup
              firstname={this.state.firstname}
              lastname={this.state.lastname}
              phonenumber={this.state.phonenumber}
              message={this.state.message}
              role={this.state.role}
              closePopup={this.handleRefresh}
              cancelPost={this.cancelPost}
              postData={this.postData}
            />
          ) : (
            ""
          )}
        </div>
        <NoteList
          data={this.state.data}
          deleteNote={(e) => this.deleteItem(e, "id")}
          editNote={(e) => this.editItem(e, "item")}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
