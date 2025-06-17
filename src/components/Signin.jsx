import { useState } from "react";
import { useNavigate } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Design from "./Design";
import Logo from "./Logo";

function Signin({ onSignIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      if (onSignIn) navigate("/"); // Navigate to home if onSignIn is provided
      else {
        // Simulate a sign-in process
        console.log("Signing in with:", { email, password });
        alert("Signed in successfully!");
        navigate("/"); // Redirect to home after sign-in
      }
    } else {
      alert("Please enter email and password.");
    }
  };

  return (
   <div className = "bg-gradient-to-r from-fuchsia-600 to-blue-500 min-h-screen">
      <div className="absolute inset-0 z-0">
          <Design />
        </div>
     <div className="pt-12"> <Logo /></div>
      <div className="flex flex-col items-center justify-center mt-30 ">
        <div className="rounded-lg shadow-lg p-4  lg:p-8 lg:w-full max-w-sm z-1">
          <h2 className="text-2xl font-bold mb-6 text-center text-purple-700">Sign In</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              className="p-2 border rounded cursor-text"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="p-2 border rounded w-full pr-10 cursor-text"
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
              className="bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition cursor-pointer"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
   </div>
  );
}

export default Signin;