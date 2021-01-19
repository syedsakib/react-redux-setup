import React from "react";
import { Formik } from "formik";
//import * as EmailValidator from 'email-validator';
import * as Yup from "yup";

const Form2 = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
        email: "",
        password: "",
        confirmPassword: "",
        topic: "react",
        check: true,
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
      }}
      //********Handling validation messages yourself*******/
      // validate={values => {
      //   let errors = {};
      //   if (!values.email) {
      //     errors.email = "Required";
      //   } else if (!EmailValidator.validate(values.email)) {
      //     errors.email = "Invalid email address";
      //   }

      //   const passwordRegex = /(?=.*[0-9])/;
      //   if (!values.password) {
      //     errors.password = "Required";
      //   } else if (values.password.length < 8) {
      //     errors.password = "Password must be 8 characters long.";
      //   } else if (!passwordRegex.test(values.password)) {
      //     errors.password = "Invalida password. Must contain one number";
      //   }

      //   return errors;
      // }}

      //********Using Yum for validation********/
      validationSchema={Yup.object().shape({
        name: Yup.string()
          .min(5, "Name is too short - should be 5 chars minimum.")
          .max(20, "Name is too long - should be 20 chars maximum.")
          .required("Required"),
        email: Yup.string().email().required("Required"),
        password: Yup.string()
          .required("No password provided.")
          .min(5, "Password is too short - should be 5 chars minimum.")
          .matches(/(?=.*[0-9])/, "Password must contain a number."),
        confirmPassword: Yup.string().oneOf(
          [Yup.ref("password")],
          "Passwords do not match"
        ),
        number: Yup.string()
          .required("No number provided.")
          .matches(
            /^(?:\+88|88)?(01[3-9]\d{8})$/,
            "NUmber must be a valid Bangladeshi number."
          ),
      })}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <h1>Validated Login Form</h1>
            <label htmlFor="name">Name</label>
            <input
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.name && touched.name && "error"}
            />
            {errors.name && touched.name && (
              <div className="input-feedback">{errors.name}</div>
            )}
            <label htmlFor="name">Mobile Number</label>
            <input
              name="number"
              type="text"
              placeholder="Enter your mobile number"
              value={values.number}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.number && touched.number && "error"}
            />
            {errors.number && touched.number && (
              <div className="input-feedback">{errors.number}</div>
            )}
            <label htmlFor="email">Email</label>
            <input
              name="email"
              type="text"
              placeholder="Enter your email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email && touched.email && "error"}
            />
            {errors.email && touched.email && (
              <div className="input-feedback">{errors.email}</div>
            )}
            <label htmlFor="email">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.password && touched.password && "error"}
            />
            {errors.password && touched.password && (
              <div className="input-feedback">{errors.password}</div>
            )}
            <label htmlFor="email">Confirm password</label>
            <input
              name="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.confirmPassword && touched.confirmPassword && "error"
              }
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <div className="input-feedback">{errors.confirmPassword}</div>
            )}
            <label>Topic</label>
            <select name="topic" value={values.topic} onChange={handleChange}>
              <option value="react">React</option>
              <option value="angular">Angular</option>
              <option value="vue">Vue</option>
            </select>
            <br />
            <br />
            <label>Check</label>
            <input
              type="checkbox"
              name="check"
              onChange={handleChange}
              checked={values.check}
            />
            <button type="submit" disabled={isSubmitting}>
              Login
            </button>
          </form>
        );
      }}
    </Formik>
  );
};

export default Form2;
