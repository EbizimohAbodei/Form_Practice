import React from "react";
import Form from "./Form";
import classes from "./EditForm.module.css";

const EditForm = (props) => {
  return (
    <div className={classes.PopupContainer}>
      <div className={classes.popup}>
        <Form {...props} />
        <input
          className={classes.closeButton}
          type="submit"
          value="Close"
          onClick={props.closeEdit}
        />
      </div>
    </div>
  );
};

export default EditForm;
