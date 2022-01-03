import React, { useState } from "react";
import "./HeroSection.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Modal, Button } from "react-bootstrap";

function HeroSection() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState("");

  const handleClose = () => {
    setShow(false);
    setData("");
  };
  // const handleShow = () => {
  //   setShow(true)
  // }
  const dataShowPopup = (props) => {
    setShow(true);
  };

  const SignupSchema = Yup.object().shape({
    // firstName: Yup.string()
    //   .min(2, "Too Short!")
    //   .max(50, "Too Long!")
    //   .required("Required"),
    // lastName: Yup.string()
    //   .min(2, "Too Short!")
    //   .max(50, "Too Long!")
    //   .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    // date: Yup.string().required("Required"),
    // dropdown: Yup.string().required("Required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password is too short - should be 8 characters minimum.")
      .max(14, "Password is too long - should be 14 characters maximum.")
      // .matches(/^[a-zA-Z]*$/, "Password can only contains - letters, numbers and one special character.")
      // .matches(/^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/, "Need - atleast one special character")
    ,passwordConfirmation: Yup.string()
      .oneOf([Yup.ref("password"), null], " Confirm Password must match")
      .required("Confirm password is required"),
  });

  return (
    <section>
      <div>
        {/* <button variant="primary" onClick={handleShow}>
            MODEL
          </button> */}

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update: {data.email}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="aa">
              <Formik
                initialValues={{
                  firstName: data.firstName,
                  lastName: data.email,
                  email: "",
                  date: data.date,
                  dropdown: data.dropdown,
                }}
                validationSchema={SignupSchema}
                onSubmit={(values, actions) => {
                  // same shape as initial values
                  // Logic goes here
                  console.log("UPDATESSSSS", values);
                  handleClose();
                  actions.resetForm(); // Reset Form
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
                    {errors.date && touched.date ? (
                      <div>{errors.date}</div>
                    ) : null}

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

                    <Button type="submit">Update</Button>
                  </Form>
                )}
              </Formik>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="outline-secondary"
              className="pt-20"
              onClick={handleClose}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* ============================================= */}

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
            onSubmit={(values, actions) => {
              // same shape as initial values // Logic goes here
              console.log("vvvv", values);
              console.log("action", actions);
              setData(values);
              dataShowPopup(values); //Open Popup
              actions.resetForm(); // Reset Form
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

                <label>Password</label>
                <Field name="password" type="text" />
                {errors.password && touched.password ? (
                  <div>{errors.password}</div>
                ) : null}

                <label>Confirm Password</label>
                <Field name="passwordConfirmation" type="text" />
                {errors.passwordConfirmation && touched.passwordConfirmation ? (
                  <div>{errors.passwordConfirmation}</div>
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
