import { useState } from "react";
import axios from "axios";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", form);
      alert("Registration successful! Please log in.");
    } catch (error) {
      alert(error.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Register</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
        <input
          name="name"
          placeholder="Name"
          className="p-2 border"
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          type="email"
          className="p-2 border"
          onChange={handleChange}
        />
        <input
          name="password"
          placeholder="Password"
          type="password"
          className="p-2 border"
          onChange={handleChange}
        />
        <button className="bg-blue-500 text-white p-2 rounded">Register</button>
      </form>
    </div>
  );
};

export default Register;
