import { useState } from "react";
import { useAuth } from "../hooks/use-auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [workerCD, setWorkerCD] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { login } = useAuth();
  const [authUser, setAuthUser] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();


    try {
    const input = { Worker_CD: workerCD,Worker_Pass: password }; // สร้าง input object
    const res = await login(input); // รอผลจากฟังก์ชัน login
        setAuthUser(res);
        setError("login success"); // เคลียร์ข้อผิดพลาด
 
      // Navigate to dashboard on successful login
      navigate("/dashboard"); 
    } catch (err) {
      setError("Invalid username or password"); // หากมีข้อผิดพลาดอื่นๆ
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-green-900 to-green-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-80"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            User ID:
          </label>
          <input
            type="text"
            value={workerCD}
            onChange={(e) => setWorkerCD(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Password:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-900 text-white py-2 rounded-md font-semibold hover:bg-green-700 transition-colors"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;