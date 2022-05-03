import React from "react";
import classes from "./Form.module.css";

const Form = (props) => {
  return (
    <div className={classes.formCont}>
      <form
        onSubmit={props.submit}
        onChange={props.changes}
        className={classes.form}
      >
        <div className={classes.subContainer}>
          <label htmlFor="firstname"></label>
          First Name:
          <input
            type="text"
            name="firstname"
            id="firstname"
            className={classes.inputFirstname}
            required
            defaultValue={props.firstname}
          />
        </div>

        <div className={classes.subContainer}>
          <label htmlFor="lastname"></label>
          Last Name:
          <input
            type="text"
            id="lastname"
            name="lastname"
            className={classes.inputLastname}
            required
            defaultValue={props.lastname}
          />
        </div>

        <div className={classes.subContainer}>
          <label htmlFor="phoneNumber"></label>
          Phone Number:
          <input
            type="number"
            id="phonenumber"
            name="phonenumber"
            required
            defaultValue={props.phonenumber}
          />
        </div>

        <div className={classes.subContainer}>
          <label htmlFor="role" className={classes.role}></label>
          Role:
          <select
            default="Default"
            name="role"
            id="role"
            required
            defaultValue={props.role}
          >
            <option value="" invalid="true" hidden>
              Choose an option
            </option>
            <option value="Teacher">Teacher</option>
            <option value="Principal" name="principal">
              Principal
            </option>
            <option value="Student">Student</option>
            <option value="Visitor">Visitor</option>
          </select>
        </div>

        <div className={classes.subContainer}>
          <label htmlFor="message"> </label>
          Message:
          <textarea
            name="message"
            id="message"
            rows={5}
            required
            defaultValue={props.message}
          ></textarea>
        </div>

        <input className={classes.submit} type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
