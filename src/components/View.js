import React from "react";
import classes from "./View.module.css";

const View = (props) => {
  return (
    <div className={classes.View}>
      <p className={classes.dotted_border}>
        <span className={classes.sideBorder}></span>First Name{" "}
        <span className={classes.text}>{props.firstname}</span>
      </p>
      <p className={classes.dotted_border}>
        <span className={classes.sideBorder}></span>
        Last Name <span className={classes.text}>{props.lastname}</span>
      </p>
      <p className={classes.dotted_border}>
        <span className={classes.sideBorder}></span>phonenumber{" "}
        <span className={classes.text}>{props.phonenumber}</span>
      </p>
      <p className={classes.dotted_border}>
        <span className={classes.sideBorder}></span>Message{" "}
        <span className={classes.text}>{props.message}</span>
      </p>
      <p>
        <span className={classes.sideBorder}></span>Role{" "}
        <span className={classes.text}>{props.role}</span>
      </p>
    </div>
  );
};

export default View;
