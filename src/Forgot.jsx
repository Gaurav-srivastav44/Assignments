import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaEnvelope } from "react-icons/fa";
import bg from "./bg.jpg";

function Forgot({ goBack, setAlert }) {
  const forgotSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
  });

  const handleForgot = (values, setSubmitting) => {
    console.log("Password reset request:", values.email);
    setAlert({ type: "success", message: "Password reset link sent!" });
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
        <h2 className="text-white text-2xl mb-6">Forgot Password</h2>

        <Formik
          initialValues={{ email: "" }}
          validationSchema={forgotSchema}
          onSubmit={(values, { setSubmitting }) =>
            handleForgot(values, setSubmitting)
          }
        >
          {({ isSubmitting }) => (
            <Form>
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

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-white text-blue-700 font-bold py-2 px-4 w-full rounded-md hover:bg-gray-200 transition"
              >
                Request Password Reset
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

export default Forgot;
