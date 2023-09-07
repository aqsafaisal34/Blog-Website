import React, { useState } from "react";
import styles from "@/styles/Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name, email, phoneNumber, message);
    const data = { name, email, phoneNumber, message };
    fetch("http://localhost:3000/api/postcontact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log("Success:", data);
        alert("Thank you for contacting us");
        setName("");
        setEmail("");
        setPhoneNumber("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className={styles.container}>
      
      <form className={styles.form} onSubmit={submitHandler}>
      <h1>Contact Us</h1>
        <div className={styles.formElement}>
          <label htmlFor="name" className={styles.label}>
            Enter your name
          </label>
          <br />
          <input
            className={styles.inputbox}
            type="text"
            id="name"
            name="name"
            placeholder="abcxyz"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className={styles.formElement}>
          <label htmlFor="email" className={styles.label}>
            Enter your email
          </label>
          <br />
          <input
            className={styles.inputbox}
            type="email"
            id="email"
            name="email"
            placeholder="abc@gmail.com"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />{" "}
        </div>
        <div className={styles.formElement}>
          <label htmlFor="phoneNumber" className={styles.label}>
            {" "}
            Enter your Phone Number
          </label>
          <br />
          <input
            className={styles.inputbox}
            type="number"
            id="phoneNumber"
            name="phoneNumber"
            placeholder="1234567890"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />{" "}
        </div>
        <div className={styles.formElement}>
          <label htmlFor="message" className={styles.label}>
            Write your message here
          </label>
          <br />
          <textarea
            className={styles.message}
            id="message"
            name="message"
            placeholder="Enter your message here"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />{" "}
        </div>
        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
