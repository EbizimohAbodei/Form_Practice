import React from "react";
import classes from "./Popup.module.css";
import { RiCloseLine } from "react-icons/ri";

const Popup = (props) => {
  return (
    <div className={classes.PopupContainer}>
      <div className={classes.popup}>
        <h3>Your Information</h3>
        <button className={classes.remove} onClick={props.closePopup}>
          <RiCloseLine />
        </button>
        <p className={classes.paragraph}>
          Firstname:<span className={classes.popupText}>{props.firstname}</span>
        </p>
        <p className={classes.paragraph}>
          Lastname: <span className={classes.popupText}>{props.lastname}</span>
        </p>
        <p className={classes.paragraph}>
          Phonenumber:
          <span className={classes.popupText}>{props.phonenumber}</span>
        </p>
        <p className={classes.paragraph}>
          Message:<span className={classes.popupText}>{props.message}</span>
        </p>
        <p className={classes.paragraph}>
          Role: <span className={classes.popupText}>{props.role}</span>
        </p>
        <div className={classes.buttonsContainer}>
          <button className={classes.postBtn} onClick={props.postData}>
            Post Data?
          </button>
          <button className={classes.cancelPostBtn} onClick={props.cancelPost}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
