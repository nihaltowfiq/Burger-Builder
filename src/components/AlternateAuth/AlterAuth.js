import React, { useState } from "react";
import { Formik } from "formik";
import { alterAuthAction } from "../../redux/alterAuthActions";
import { connect } from "react-redux";
import Spinner from "../Spinner/Spinner";
import { Alert } from "reactstrap";

const formStyle = {
  border: "1px solid gray",
  padding: "20px",
  borderRadius: "8px",
};

const Auth = (props) => {
  const [mode, setMode] = useState("Sign Up");

  const switchModeHandler = () => {
    setMode(mode === "Sign Up" ? "Login" : "Sign Up");
  };

  let form = null;
  if (props.authLoading) {
    form = <Spinner />;
  } else {
    form = (
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values) => {
          props.alterAuthAction(values.email, values.password, mode);
        }}
        validate={(values) => {
          const errors = {};

          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid Email Address";
          }

          if (!values.password) {
            errors.password = "Required";
          } else if (values.password.length < 4) {
            errors.password = "Must be atleast 4 characters";
          }

          if (mode === "Sign Up") {
            if (!values.name) {
              errors.name = "Required";
            } else if (/[^a-zA-Z]/i.test(values.name)) {
              errors.name = "Only use Alphabet!";
            }

            if (!values.confirmPassword) {
              errors.confirmPassword = "Required";
            } else if (values.password !== values.confirmPassword) {
              errors.confirmPassword = "Password field doesn't match!";
            }
          }
          //   console.log("ERRORS:", errors);
          return errors;
        }}
      >
        {({ values, handleChange, handleSubmit, errors }) => (
          <div style={formStyle}>
            <button
              className="btn btn-lg btn-pink btn-block mb-3"
              onClick={switchModeHandler}
            >
              Switch to {mode === "Sign Up" ? "Login" : "Sign Up"}
            </button>
            <form onSubmit={handleSubmit}>
              {mode === "Sign Up" && (
                <>
                  <input
                    name="name"
                    placeholder="Enter Your Name"
                    className="form-control"
                    type="text"
                    value={values.name}
                    onChange={handleChange}
                  />
                  <span className="text-danger">{errors.name}</span>
                  <br />
                </>
              )}

              <input
                name="email"
                placeholder="Enter Your Email"
                className="form-control"
                type="email"
                value={values.email}
                onChange={handleChange}
              />
              <span className="text-danger">{errors.email}</span>
              <br />
              <input
                name="password"
                placeholder="Password"
                className="form-control"
                type="password"
                value={values.password}
                onChange={handleChange}
              />
              <span className="text-danger">{errors.password}</span>
              <br />
              {mode === "Sign Up" && (
                <>
                  <input
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="form-control"
                    type="password"
                    value={values.confirmPassword}
                    onChange={handleChange}
                  />
                  <span className="text-danger">{errors.confirmPassword}</span>
                  <br />
                </>
              )}
              <button type="submit" className="btn btn-success">
                {mode === "Sign Up" ? "Sign Up" : "Login"}
              </button>
            </form>
          </div>
        )}
      </Formik>
    );
  }
  return (
    <div>
      {props.authFailedMsg && (
        <Alert color="danger">{props.authFailedMsg}</Alert>
      )}
      {form}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { authLoading: state.authLoading, authFailedMsg: state.authFailedMsg };
};

const mapDispatchToProps = { alterAuthAction };

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
