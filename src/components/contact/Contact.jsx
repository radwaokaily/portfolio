import React from "react";
import Lottie from "lottie-react";
import doneAnimation from "../../../public/assets/animation/done-animation.json";
import emailAnimation from "../../../public/assets/animation/email-animation.json";
import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("xyzzozor");

  return (
    <section className="contact-us d-flex" id="contact">
      <h3 className="d-flex">
        <span className="icon-mail"></span>
        Contact me
      </h3>
      <p>Contact me for more information</p>
      <div className="contact-us-form d-flex">
        <div className="form">
          <form
            method="POST"
            action="https://formspree.io/f/xyzzozor"
            onSubmit={handleSubmit}
            className=""
          >
            <div className="email d-flex">
              <label htmlFor="email">Email Address</label>
              <input
                required
                autoComplete="off"
                type="email"
                name="email"
                id="email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="textarea d-flex">
              <label htmlFor="message">Your Message</label>
              <textarea required name="message" id="message"></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button type="submit" disabled={state.submitting}>
              Submit
            </button>
          </form>
          <div className="succeeded-message">
            {state.succeeded && (
              <h2 style={{ display: "flex", alignItems: "center" }}>
                <Lottie
                  animationData={doneAnimation}
                  loop={false}
                  style={{ width: "5rem", height: "5rem" }}
                />
                Your Message has been submitted
              </h2>
            )}
          </div>
        </div>
        <div className="animation-form">
        <Lottie 
                  animationData={emailAnimation}
                  loop={true}
                  style={{height:"20%"}}
                />
        </div>
      </div>
    </section>
  );
};

export default Contact;
