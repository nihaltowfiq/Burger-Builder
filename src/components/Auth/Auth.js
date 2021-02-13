import React from "react";
import { Formik } from "formik";

const Auth = () => {
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ values, handleChange, handleSubmit }) => (
          <div>
            <form onSubmit={handleSubmit}>
              <input
                name="email"
                placeholder="Enter Your Email"
                className="form-control"
                type="email"
                value={values.email}
                onChange={handleChange}
              />
              <br />
              <input
                name="password"
                placeholder="Password"
                className="form-control"
                type="password"
                value={values.password}
                onChange={handleChange}
              />
              <br />
              <input
                name="confirmPassword"
                placeholder="Confirm Password"
                className="form-control"
                type="password"
                value={values.confirmPassword}
                onChange={handleChange}
              />
              <br />
              <button type="submit" className="btn btn-success">
                Sign Up
              </button>
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Auth;
