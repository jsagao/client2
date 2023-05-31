import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Contactus = () => {
  const form = useRef();

  const notify = () => {
    toast("Message Sent! We will get back to you soon.");
    if (form.current) {
      form.current.setAttribute("disabled", "disabled");
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7pdha3j",
        "template_cgjl0h8",
        form.current,
        "Na9blyqiWkahYuVn8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="section-contact">
        <div id="formContainer">
          <form id="formC" ref={form} onSubmit={sendEmail} className="form">
            <div className="rows">
              <span className="title1">Contact Us</span>
              <div className="column">
                <label className="theLabels">Name</label>
                <input className="theInputs" type="text" name="from_name" />
              </div>
              <div className="column">
                <label className="theLabels">Email</label>
                <input className="theInputs" type="email" name="to_name" />
              </div>
              <div className="column">
                <label className="theLabels">Message</label>
                <textarea className="textarea" name="message" />
                <button
                  ref={form}
                  className="btn-contact"
                  type="submit"
                  value="Send"
                  onClick={notify}
                >
                  {" "}
                  Click here to submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Contactus;
