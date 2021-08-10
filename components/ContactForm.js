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
    e.preventDefault();
    const contactMessage = { name, email, message };
    if (contactMessage.name === "") {
      alert("please enter name");

      return;
    } else if (contactMessage.email === "") {
      alert("please enter email");
      return;
    } else if (contactMessage.message === "") {
      alert("please enter message");
      return;
    }

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
      {/* {isAlart && <Alart msg="please enter name" />} */}
      <textarea
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />

      <input className="submit" type="submit" name="submit" />
    </form>
  );
}
