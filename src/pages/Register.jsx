import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate(); // Hook untuk navigasi

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!name) {
      setMessage("Nama harus diisi");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:3500/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      });

      const data = await response.json();
      if (response.ok) {
        setRole(data.role);
        setMessage("Registrasi berhasil!");
        // Arahkan ke halaman login setelah registrasi berhasil
        setTimeout(() => {
          navigate("/Nama");
        }, 2000); // Delay 2 detik sebelum pindah
      } else {
        setMessage(data.msg || "Terjadi kesalahan saat registrasi");
      }
    } catch (error) {
      console.error(error);
      setMessage("Terjadi kesalahan saat registrasi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-4">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full mt-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <button type="submit" className={`w-full py-2 mt-4 text-black font-semibold rounded-md focus:outline-none ${loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"}`} disabled={loading}>
            {loading ? "Loading..." : "OK"}
          </button>
        </form>

        {message && (
          <div className={`mt-4 text-center ${role ? "text-green-500" : "text-red-500"}`}>
            <p>{message}</p>
            {role && <p>Your role: {role}</p>}
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
