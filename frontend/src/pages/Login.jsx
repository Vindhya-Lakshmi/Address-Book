import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock } from "lucide-react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    navigate("/contacts"); // Redirect after login
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-300 via-pink-200 to-indigo-100 flex items-center">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-20 -top-20 w-72 h-72 bg-gradient-to-tr from-pink-400 via-purple-500 to-indigo-500 rounded-full opacity-30 blur-3xl transform rotate-12"></div>
      <div className="pointer-events-none absolute -right-20 -bottom-20 w-96 h-96 bg-gradient-to-tr from-yellow-300 via-pink-300 to-purple-400 rounded-full opacity-25 blur-3xl"></div>

      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Left Section */}
          <div className="hidden md:flex flex-col gap-6 p-10 rounded-2xl justify-center" aria-hidden="true">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-neu">
              <h2 className="text-4xl font-extrabold text-purple-700 mb-4">Welcome Back</h2>
              <p className="text-gray-700 opacity-90">Login to manage your contacts anytime.</p>
            </div>

            <div className="mt-6 p-6 rounded-2xl bg-white/60 backdrop-blur-sm shadow-neu flex items-center gap-4">
              <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-500 to-pink-400 flex items-center justify-center text-white text-xl font-bold shadow-md">
                📘
              </div>
              <div>
                <p className="font-semibold text-gray-800">Secure & synced</p>
                <p className="text-sm text-gray-600">Your contacts stay safe.</p>
              </div>
            </div>
          </div>

          {/* Right - Login Form */}
          <div className="flex justify-center">
            <div className="w-full max-w-md p-8 bg-white/60 backdrop-blur-sm rounded-2xl shadow-neu">
              <h3 className="text-2xl font-bold text-gray-800 text-center mb-4">Sign In</h3>

              <form onSubmit={handleLogin} className="space-y-4">
                
                {/* Email */}
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-11 w-full p-3 rounded-xl border border-transparent focus:border-pink-300 shadow-input"
                  />
                </div>

                {/* Password */}
                <div className="relative">
                  <Lock className="absolute left-3 top-3 text-gray-400" size={18} />
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-11 w-full p-3 rounded-xl border border-transparent focus:border-indigo-300 shadow-input"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 shadow-md hover:-translate-y-0.5 transition"
                >
                  Login
                </button>
              </form>

              <p className="mt-4 text-center text-sm text-gray-700">
                Don't have an account?{" "}
                <Link to="/signup" className="text-purple-700 font-medium hover:underline">
                  Create Account
                </Link>
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Floating decoration */}
      <div className="pointer-events-none absolute right-10 top-28 w-28 h-28 bg-gradient-to-tr from-pink-300 to-purple-300 rounded-full opacity-30 blur-xl"></div>
    </div>
  );
}

export default Login;
