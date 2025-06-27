"use client";
import { useRegister } from "@/lib/api/useMutation";
import React from "react";

function Register() {
  const { mutate: Register } = useRegister();
  const handelSubmit = (event) => {
    event.preventDefault();
    const { name, email, password } = event.target.elements;
    Register({
      name: name.value.trim(),
      email: email.value.trim(),
      password: password.value.trim(),
    });
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input type="text" id="name" name="name" placeholder="name" required />
        <input
          type="text"
          id="email"
          name="email"
          placeholder="email"
          required
        />
        <input
          type="text"
          id="password"
          name="password"
          placeholder="password"
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
