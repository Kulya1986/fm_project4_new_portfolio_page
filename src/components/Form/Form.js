import { useEffect, useState } from "react";
import "./Form.scss";
import { useForm } from "react-hook-form";

export default function Form() {
  const { register, handleSubmit, reset, formState } = useForm({
    defaultValues: {},
  });

  const { errors } = formState;
  const { isDirty } = formState;
  const [popupClass, setPopupClass] = useState("msg-sent");

  useEffect(
    function () {
      if (isDirty && popupClass === "msg-sent show") setPopupClass("msg-sent");
    },
    [isDirty, popupClass]
  );

  function onSubmit(data) {
    //   fetch("https://portfolio-page-server.onrender.com/send-msg"
    fetch("http://localhost:3000/send-msg", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.status)
      .then((st) => {
        if (st === 200) {
          setPopupClass("msg-sent show");
          reset();
        }
      })
      .catch((err) => {
        // setPopupClass("msg-sent show not");
        console.log("could not send your message");
        throw new Error("Could not send message");
      });
  }

  function onError(errors) {
    console.log(errors);
  }

  return (
    <section id="contact-form">
      <div id="contact-form_copy">
        <h2>Contact</h2>
        <p>
          In case I have enough skills for your project and you would love to
          see me as a member of your team, please fill in the form to get in
          touch with me, and I’ll get back to you as soon as possible. Or email
          me directly to{" "}
          <a href="mailto: kulychka@gmail.com">kulychka@gmail.com</a>.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <div>
          <div className="input-area">
            <input
              type="text"
              placeholder="NAME"
              aria-label="name"
              name="senderName"
              id="senderName"
              {...register("senderName", {
                required: "This field is required",
                validate: (value) => {
                  return (
                    value
                      .toString()
                      .match(/^[A-Za-zА-ЩЬЮЯҐЄІЇа-щьюяґєії.'`'\s]+$/) !==
                      null ||
                    "Name can include upper/lowercase letters,single qoute sign, '.' or space."
                  );
                },
              })}
            ></input>
            {errors?.senderName && <div className="error-icon">!</div>}
          </div>
          <p className="error-msg">{errors?.senderName?.message}</p>
        </div>
        <div>
          <div className="input-area">
            <input
              type="email"
              placeholder="EMAIL"
              aria-label="email"
              name="senderEmail"
              id="senderEmail"
              {...register("senderEmail", {
                required: "This field is required",
                validate: (value) => {
                  return (
                    value
                      .toString()
                      .match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) !== null ||
                    "Invalid email format"
                  );
                },
              })}
            ></input>
            {errors?.senderEmail && <div className="error-icon">!</div>}
          </div>
          <p className="error-msg">{errors?.senderEmail?.message}</p>
        </div>
        <div>
          <div className="input-area">
            <textarea
              name="message"
              placeholder="MESSAGE"
              aria-label="message"
              rows="4"
              {...register("senderMsg", {
                required: "This field is required",
              })}
            />
            {errors?.senderMsg && <div className="error-icon">!</div>}
          </div>
          <p className="error-msg">{errors?.senderMsg?.message}</p>
        </div>
        <button type="submit">Send message</button>
        <span className={popupClass} id="msgSent">
          {popupClass.includes("not")
            ? "Your message wasn't sent!"
            : "Your message was sent!"}
        </span>
      </form>
    </section>
  );
}
