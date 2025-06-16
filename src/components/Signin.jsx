import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Signin({ onSignIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      if (onSignIn) onSignIn();
    } else {
      alert("Please enter email and password.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center md:min-h-screen min-h-[80vh]">
      <div className="rounded-lg shadow-lg p-8 sm:w-full  w-[80%] max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-purple-700">Sign In</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="p-2 border rounded"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="p-2 border rounded w-full pr-10"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
            />
            <span
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-black"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <button
            type="submit"
            className="bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signin;