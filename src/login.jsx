import React, { useState } from "react";
import bg from "./bg.jpg";
import { LiaCartArrowDownSolid } from "react-icons/lia";
import { FaUser, FaLock } from "react-icons/fa";
import Alert from "./alert";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Signup from "./Signup";
import Forgot from "./Forgot";

function Login() {
  const [page, setPage] = useState("login");
  const [alert, setAlert] = useState(null);

  const goBack = () => setPage("login");

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(3, "Too short").required("Required"),
  });

  const handleLogin = (values, setSubmitting) => {
    const { email, password } = values;

    if (email === "admin@example.com" && password === "admin123") {
      setPage("admin");
    } else if (email === "user@example.com" && password === "user123") {
      setPage("user");
    } else {
      setAlert({ type: "error", message: "Invalid credentials!" });
      setTimeout(() => setAlert(null), 5000);
    }
    setSubmitting(false);
  };

  if (page === "admin") return <Dashboard title="Admin Dashboard" goBack={goBack} />;
  if (page === "user") return <Dashboard title="User Dashboard" goBack={goBack} />;
  if (page === "signup") return <Signup goBack={goBack} setAlert={setAlert} />;
  if (page === "forgot") return <Forgot goBack={goBack} setAlert={setAlert} />;

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
        {alert && <Alert type={alert.type} message={alert.message} onClose={() => setAlert(null)} />}
        <div className="flex justify-center mb-8">
          <LiaCartArrowDownSolid className="text-white text-7xl" />
        </div>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => handleLogin(values, setSubmitting)}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="relative mb-4">
                <FaUser className="absolute left-3 top-3 text-white" />
                <Field
                  name="email"
                  type="text"
                  placeholder="USERNAME"
                  className="border w-full pl-10 pr-3 py-2 rounded-md border-white bg-transparent text-white placeholder:text-white focus:outline-none"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="relative mb-6">
                <FaLock className="absolute left-3 top-3 text-white" />
                <Field
                  name="password"
                  type="password"
                  placeholder="PASSWORD"
                  className="border w-full pl-10 pr-3 py-2 rounded-md border-white bg-transparent text-white placeholder:text-white focus:outline-none"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-white text-blue-700 font-bold py-2 px-4 w-full rounded-md hover:bg-gray-200 transition"
              >
                LOGIN
              </button>
            </Form>
          )}
        </Formik>

        <p className="mt-3 text-sm text-white cursor-pointer hover:underline" onClick={() => setPage("forgot")}>
          Forgot password?
        </p>
        <p className="mt-3 text-sm text-white">
          Don’t have an account?{" "}
          <span className="cursor-pointer hover:underline" onClick={() => setPage("signup")}>
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}

function Dashboard({ title, goBack }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
      <h1 className="text-3xl mb-6">{title}</h1>
      <button
        onClick={goBack}
        className="bg-white text-blue-700 font-bold py-2 px-4 rounded-md hover:bg-gray-200 transition"
      >
        Back to Login
      </button>
    </div>
  );
}

export default Login;
