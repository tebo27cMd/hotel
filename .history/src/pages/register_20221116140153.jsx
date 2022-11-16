import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import "../App.css"

const Signup = () => {
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  const { registerUser } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;
    if (email && password && name) registerUser(email, password, name);
  };

  return (
    <div className="form">
      <h2>Register</h2>
      <form onSubmit={onSubmit}>
        <input placeholder="Email" type="email" ref={emailRef} required />
        <input placeholder="Name" type="name" ref={nameRef} required/>
        <input placeholder="Surname" type="text" ref={psdRef} required />
        <input placeholder="Phone" type="text" ref={psdRef} required/>
        <input placeholder="Country" type="text" ref={psdRef} required />
        <input placeholder="Password" type="password" ref={psdRef} required />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Signup;