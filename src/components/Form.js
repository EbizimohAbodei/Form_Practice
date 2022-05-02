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
        <div>
          <label htmlFor="firstname"></label>
          First Name:
          <input
            type="text"
            name="firstname"
            id="firstname"
            className={classes.inputFirstname}
            required
          />
        </div>

        <div>
          <label htmlFor="lastname"></label>
          Last Name:
          <input
            type="text"
            id="lastname"
            name="lastname"
            className={classes.inputLastname}
            required
          />
        </div>

        <div>
          <label htmlFor="phoneNumber"></label>
          Phone Number:
          <input type="text" id="phoneNumber" name="phonenumber" required />
        </div>

        <div>
          <label htmlFor="role" className={classes.role}></label>
          Role:
          <select default="Default" name="role" id="role" required>
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

        <div>
          <label htmlFor="message"> </label>
          Message:
          <textarea name="message" id="message" rows={5} required></textarea>
        </div>

        <input className={classes.submit} type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Form;
