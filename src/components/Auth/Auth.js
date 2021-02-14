import React, { useState } from "react";
import { Formik } from "formik";

const formStyle = {
  border: "1px solid gray",
  padding: "20px",
  borderRadius: "8px",
};

const Auth = () => {
  const [mode, setMode] = useState("Sign Up");

  const switchModeHandler = () => {
    setMode(mode === "Sign Up" ? "Login" : "Sign Up");
  };
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        onSubmit={(values) => console.log("VALUES:", values)}
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
    </div>
  );
};

export default Auth;
