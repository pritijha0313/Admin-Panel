import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../Components/Common/InputField";
import Password from "../../Components/Common/Password";
import Button from "../../Components/Common/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};

    if (!email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.email = "Enter a valid email";

    if (!password) newErrors.password = "Password is required";
    else if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = () => {
    if (!validate()) return;

    const users = JSON.parse(localStorage.getItem("user")) || [];

    const found = users.find(
      (u) => u.email === email && u.password === password
    );

    if (!found) {
      setErrors({ general: "Invalid email or password" });
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white w-[450px] p-8 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-center mb-2 text-[#202224]">
          Login
        </h2>
        <p className="text-center text-[#4D4E50] mb-10">Pleasewasedrftgh</p>

        {errors.general && (
          <p className="text-red-500 text-center mb-3">{errors.general}</p>
        )}

        <InputField
          label="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrors({ ...errors, email: "" });
          }}
          placeholder="Enter email"
          error={errors.email}
        />

        <Password
          label="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setErrors({ ...errors, password: "" });
          }}
          placeholder="Enter password"
          error={errors.password}
        />

        <Button
          label="Sign In"
          onClick={handleLogin}
          className="w-full bg-[#4880FF] text-white py-2 rounded-md text-lg hover:bg-[#487CFF]"
        />

        <p  className="text-center mt-4 text-sm text-[#77787A]">
          Don't have an account?{" "}
          <span
            className="text-[#5A8CFF] cursor-pointer underline font-bold"
            onClick={() => navigate("/register")}
          >
            Create Account
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
