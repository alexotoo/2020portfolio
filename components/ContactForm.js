import React, { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (e) => {
    const contactMessage = { name, email, message };
    console.log(contactMessage);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "ContactForm", ...contactMessage }),
    })
      .then(() => alert("message sent"))
      .catch((error) => alert(error));

    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form name="ContactForm" onSubmit={handleSubmit} className="form">
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="your name"
        onChange={(e) => setName(e.target.value)}
      />
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={email}
        placeholder="example@mail.com"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Message</label>
      <textarea
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <input className="submit" type="submit" />
      {/* <label>
        Your Name:{" "}
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>

      <label>
        Your Email:{" "}
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>

      <label>
        Message:{" "}
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>

      <button type="submit">Send</button> */}
    </form>
  );
}
