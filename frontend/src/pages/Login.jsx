import { useState } from "react";
import useAuthStore from "../store/authStore";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(form.email, form.password);
    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-6">
        <h2 className="text-2xl font-bold">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="p-2 border"
            onChange={handleChange}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="p-2 border"
            onChange={handleChange}
          />
          <button className="bg-blue-500 text-white p-2 rounded">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
