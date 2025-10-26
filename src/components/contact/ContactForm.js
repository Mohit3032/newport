import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const ContactForm = () => {
  const [status, setStatus] = useState(null); // null / "success" / "error"

  // Validation schema
  const ContactSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await axios.post("https://portback-kohl.vercel.app/contact-port", values);
      if (response.status === 200) {
        setStatus("success");
        resetForm();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }

    // Clear status after 3 seconds
    setTimeout(() => setStatus(null), 3000);
  };

  return (
    <div className="fields w-full float-left clear-both h-auto">
      <Formik
        initialValues={{ name: "", email: "", message: "" }}
        validationSchema={ContactSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form className="contact_form">
            {/* Status message */}
            <div
              className={status === "error" ? "empty_notice" : "returnmessage"}
              style={{ display: status === null ? "none" : "block" }}
            >
              <span>
                {status === "error"
                  ? "Please fill required fields or something went wrong"
                  : "Your message has been received, We will contact you soon."}
              </span>
            </div>

            <div className="first w-full float-left">
              <ul className="list-none">
                <li className="w-full mb-[30px] float-left">
                  <Field
                    name="name"
                    type="text"
                    placeholder="Name"
                    className="input_field"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="error_text text-red-500 text-sm mt-1"
                  />
                </li>
                <li className="w-full mb-[30px] float-left">
                  <Field
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="input_field"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error_text text-red-500 text-sm mt-1"
                  />
                </li>
              </ul>
            </div>

            <div className="last">
              <Field
                as="textarea"
                name="message"
                placeholder="Message"
                className="textarea_field"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="error_text text-red-500 text-sm mt-1"
              />
            </div>

            <div className="tokyo_tm_button" data-position="left">
              <button type="submit">Send Message</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
