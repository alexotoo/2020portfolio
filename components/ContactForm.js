import React, { useState } from "react";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    const contactMessage = { name, email, message };

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "ContactForm",
        ...contactMessage,
      }),
    })
      .then(() => alert("message sent"))
      .catch((error) => alert(error));

    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      name="ContactForm"
      onSubmit={handleSubmit}
      className="form"
    >
      <input type="hidden" name="form-name" value="ContactForm" />
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

      <input className="submit" type="submit" name="submit" />
    </form>
  );
}
