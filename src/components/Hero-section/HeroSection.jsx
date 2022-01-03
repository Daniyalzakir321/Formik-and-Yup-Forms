import React from "react";
import "./HeroSection.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

function HeroSection() {
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    date: Yup.string().required("Required"),
    dropdown: Yup.string().required("Required"),
  });

  return (
    <section>
      <div>
        <div className="aa">
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              date: "",
              dropdown: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              // same shape as initial values
              // Logic goes here
              console.log("vvvv", values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <label>First Name:</label>
                <Field name="firstName" placeholder="Enter Your Name" />
                {errors.firstName && touched.firstName ? (
                  <div>{errors.firstName}</div>
                ) : null}

                <label>Last Name:</label>
                <Field name="lastName" />
                {errors.lastName && touched.lastName ? (
                  <div>{errors.lastName}</div>
                ) : null}

                <label>Email</label>
                <Field name="email" type="email" />
                {errors.email && touched.email ? (
                  <div>{errors.email}</div>
                ) : null}

                <label>Date Time</label>
                <Field name="date" type="date" />
                {errors.date && touched.date ? <div>{errors.date}</div> : null}

                <label>Choose a car:</label>
                <Field as="select" name="dropdown">
                  <option value="">Select</option>
                  <option value="red">Red</option>
                  <option value="green">Green</option>
                  <option value="blue">Blue</option>
                </Field>
                {errors.dropdown && touched.dropdown ? (
                  <div>{errors.dropdown}</div>
                ) : null}

                <button type="submit">Submit</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
