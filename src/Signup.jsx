import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import bg from "./bg.jpg";

function Signup({ goBack, setAlert }) {
  const signupSchema = Yup.object().shape({
    fullname: Yup.string().required("Full name is required"),
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(6, "Min 6 chars").required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm your password"),
  });

  const handleSignup = (values, setSubmitting) => {
    console.log("Signup values:", values);
    setAlert({ type: "success", message: "Account created successfully!" });
    setTimeout(() => setAlert(null), 5000);
    goBack();
    setSubmitting(false);
  };

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full max-w-sm text-center">
        <h2 className="text-white text-2xl mb-6">Sign Up</h2>

        <Formik
          initialValues={{
            fullname: "",
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validationSchema={signupSchema}
          onSubmit={(values, { setSubmitting }) =>
            handleSignup(values, setSubmitting)
          }
        >
          {({ isSubmitting }) => (
            <Form>
              {/* Full Name */}
              <div className="relative mb-4">
                <FaUser className="absolute left-3 top-3 text-white" />
                <Field
                  name="fullname"
                  type="text"
                  placeholder="Full Name"
                  className="border w-full pl-10 pr-3 py-2 rounded-md border-white bg-transparent text-white placeholder:text-white focus:outline-none"
                />
                <ErrorMessage
                  name="fullname"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Username */}
              <div className="relative mb-4">
                <FaUser className="absolute left-3 top-3 text-white" />
                <Field
                  name="username"
                  type="text"
                  placeholder="Username"
                  className="border w-full pl-10 pr-3 py-2 rounded-md border-white bg-transparent text-white placeholder:text-white focus:outline-none"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Email */}
              <div className="relative mb-4">
                <FaEnvelope className="absolute left-3 top-3 text-white" />
                <Field
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="border w-full pl-10 pr-3 py-2 rounded-md border-white bg-transparent text-white placeholder:text-white focus:outline-none"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Password */}
              <div className="relative mb-4">
                <FaLock className="absolute left-3 top-3 text-white" />
                <Field
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="border w-full pl-10 pr-3 py-2 rounded-md border-white bg-transparent text-white placeholder:text-white focus:outline-none"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              {/* Confirm Password */}
              <div className="relative mb-4">
                <FaLock className="absolute left-3 top-3 text-white" />
                <Field
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  className="border w-full pl-10 pr-3 py-2 rounded-md border-white bg-transparent text-white placeholder:text-white focus:outline-none"
                />
                <ErrorMessage
                  name="confirmPassword"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-white text-blue-700 font-bold py-2 px-4 w-full rounded-md hover:bg-gray-200 transition"
              >
                SIGN UP
              </button>
            </Form>
          )}
        </Formik>

        <p
          className="mt-3 text-sm text-white cursor-pointer hover:underline"
          onClick={goBack}
        >
          Back to Login
        </p>
      </div>
    </div>
  );
}

export default Signup;
