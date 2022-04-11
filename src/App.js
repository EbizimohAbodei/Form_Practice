import "./index.css";
import React, { Component } from "react";
import Form from "./components/Form";
import View from "./components/View";
import Popup from "./components/Popup";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    firstname: " ",
    lastname: " ",
    phonenumber: " ",
    message: " ",
    role: " ",
    showPopup: false,
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

  postData = () => {};
  render() {
    return (
      <div className="App">
        <Header />
        <Form changes={this.handleChange} submit={this.handleSubmit} />
        <h3 className="seperator_Text">Check your input</h3>
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
        <View {...this.state} />
        <Footer />
      </div>
    );
  }
}

export default App;
