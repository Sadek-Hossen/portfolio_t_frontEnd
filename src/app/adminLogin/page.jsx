'use client';
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";


function AdminLoginPage() {
  const DB_URL = process.env.NEXT_PUBLIC_DB_URL;
  const router = useRouter()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${DB_URL}/user/adminLogin`, {
        email,
        password,
      }, { withCredentials: true }); // cookie handle করার জন্য

      setMessage(res.data.message);
      console.log("Login success, token:", res.data.token);
      router.push("/")
    } catch (err) {
      console.error(err);
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-80"
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-3 border rounded"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
        {message && <p className="mt-3 text-center text-red-500">{message}</p>}
      </form>
    </div>
  );
}

export default AdminLoginPage;
