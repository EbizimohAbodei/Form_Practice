import "./index.css";
import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import View from "./components/View";
import Popup from "./components/Popup";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NoteList from "./components/NoteList";
import EditForm from "./components/EditForm";
const axios = require("axios").default;

const App = () => {
  const [inputData, setInputData] = useState({
    firstname: " ",
    lastname: " ",
    phonenumber: " ",
    message: " ",
    role: " ",
  });

  const [data, setData] = useState([]);
  const [note, setNote] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup({ showPopup: true });
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  const cancelPosting = () => {
    setShowPopup(!showPopup);
  };

  useEffect(() => {
    // const ax = axios.create({
    //   baseURL: "http://localhost:3010/",
    // });
    axios
      .get("http://localhost:3010/notes")
      .then((response) => response.data)
      .then((res) => setData({ data: res }));
  }, []);

  const postInputData = () => {
    axios
      .post("http://localhost:3010/notes", {
        ...inputData,
      })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
    handleRefresh();
  };

  const deleteItem = (id) => {
    axios.delete(`http://localhost:3010/notes/${id}`).then((res) => {
      const notes = data.data.filter((item) => item.id !== id);
      setData({ data: notes });
    });
  };

  const editItem = (item) => {
    // axios
    //   .get(`http://localhost:3010/notes/${item.id}`)
    //   .then((res) => this.setState({ editMode: true, note: res.data }));
    setEditMode({ editMode: true });
    setNote({ note: item });
  };

  const handleEditChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleUpdate = (id) => {
    axios
      .put(`http://localhost:3010/notes/${id}`, note)
      .then((res) => res.data)
      .catch((e) => {
        console.log(e);
      });
  };

  const closeEditHandler = () => {
    setEditMode(!editMode);
  };

  return (
    <div className="App">
      <Header />
      <div className="formView">
        <Form changes={handleChange} submit={handleSubmit} />
        <View {...inputData} />
      </div>
      <div>
        {console.log(note?.note?.id)}
        {editMode ? (
          <EditForm
            {...note}
            changes={(e) => handleEditChange(e, "item")}
            submit={() => handleUpdate(note.id)}
            closeEdit={closeEditHandler}
          />
        ) : (
          ""
        )}
      </div>
      <div>
        {showPopup && (
          <Popup
            {...inputData}
            postData={postInputData}
            cancelPost={cancelPosting}
          />
        )}
      </div>
      <NoteList
        data={data.data}
        deleteNote={(e) => deleteItem(e, "id")}
        editNote={(e) => editItem(e, "item")}
      />
      <Footer />
    </div>
  );
};

export default App;
