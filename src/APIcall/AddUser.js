import { useState } from "react";
import React from "react";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [nationality, setNationality] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  return (
    <div>
      <h2>Register User</h2>
      <form onSubmit={{ handleSubmit }}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};
