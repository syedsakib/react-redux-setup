import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  social: {
    facebook: "",
    twitter: "",
  },
  phoneNumbers: ["", ""],
};

const savedValues = {
  name: "sakib",
  email: "example@gmail.com",
  channel: "channel",
  social: {
    facebook: "facebok.com",
    twitter: "facebok.com",
  },
  phoneNumbers: ["016", "015"],
};

const onSubmit = (values) => {
  console.log("Form Data:", values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("Required Field"),
  email: Yup.string().email("Invalid Format").required("Required Field"),
  channel: Yup.string().required("Required Field"),
});

const Form3 = () => {
  //console.log("Form Values:", formik.values);
  const [formValues, setFormvalues] = useState(null);

  useEffect(() => {
    setFormvalues(savedValues);
  }, []);

  return (
    <Formik
      initialValues={formValues || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      errors
      enableReinitialize
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          //handleChange,
          // handleBlur,
          // handleSubmit,
        } = props;
        return (
          <Form>
            <div className="form-control">
              <label htmlFor="name">Name</label>
              <Field
                type="text"
                id="name"
                name="name"
                // onBlur={handleBlur}
                // onChange={handleChange}
                value={values.name}
                className={errors.name && touched.name && "error"}
              />
              {touched.name && errors.name ? (
                <div className="error">{errors.name}</div>
              ) : null}
            </div>
            <div className="form-control">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                // onBlur={handleBlur}
                // onChange={handleChange}
                value={values.email}
                className={errors.email && touched.email && "error"}
              />
              {touched.email && errors.email ? (
                <div className="error">{errors.email}</div>
              ) : null}
            </div>
            <div className="form-control">
              <label htmlFor="channel">Channel</label>
              <Field
                type="text"
                id="channel"
                name="channel"
                // onBlur={handleBlur}
                // onChange={handleChange}
                value={values.channel}
                className={errors.channel && touched.channel && "error"}
              />
              {touched.channel && errors.channel ? (
                <div className="error">{errors.channel}</div>
              ) : null}
            </div>

            <div className="form-control">
              <label htmlFor="facebook">Facebook Profile</label>
              <Field type="text" id="facebook" name="social.facebook" />
            </div>
            <div className="form-control">
              <label htmlFor="twitter">Twitter Profile</label>
              <Field type="text" id="twitter" name="social.twitter" />
            </div>

            <div className="form-control">
              <label htmlFor="primaryPh">Primary phone number</label>
              <Field type="text" id="primaryPh" name="phoneNumbers[0]" />
            </div>
            <div className="form-control">
              <label htmlFor="secondaryPh">Secondary phone number</label>
              <Field type="text" id="secondaryPh" name="phoneNumbers[1]" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default Form3;
