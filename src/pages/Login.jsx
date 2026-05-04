import { useState } from "react";
import { signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    setError("");
    setMessage("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      setError("Invalid email or password");
    }
  };

  // 🔥 FORGOT PASSWORD FUNCTION
  const handleResetPassword = async () => {
    setError("");
    setMessage("");

    if (!email) {
      setError("Enter your email first");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("Password reset link sent to your email");
    } catch (err) {
      console.log(err);
      setError("Failed to send reset email");
    }
  };

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">

      {/* 🔥 GLOW */}
      <div className="absolute left-[-200px] top-[30%] w-[500px] h-[500px] bg-[#00E24B]/20 blur-[200px]" />

      <div className="relative z-10 w-full max-w-md p-10 rounded-2xl 
      bg-gradient-to-br from-[#02150c] via-[#052016] to-[#03110a]
      border border-[#2f5d45]/30">

        <h2 className="text-3xl font-bold mb-2 text-primary">
          Welcome Back
        </h2>

        <p className="text-gray-400 mb-6 text-sm">
          Login to continue your trading journey
        </p>

        {/* ERROR */}
        {error && (
          <p className="text-red-400 text-sm mb-4">{error}</p>
        )}

        {/* SUCCESS */}
        {message && (
          <p className="text-green-400 text-sm mb-4">{message}</p>
        )}

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full mb-4 p-3 rounded-lg bg-black/50 border border-white/10 
          focus:outline-none focus:border-primary"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full mb-2 p-3 rounded-lg bg-black/50 border border-white/10 
          focus:outline-none focus:border-primary"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* 🔥 FORGOT PASSWORD */}
        <div className="flex justify-end mb-6">
          <button
            onClick={handleResetPassword}
            className="text-sm text-primary hover:underline"
          >
            Forgot Password?
          </button>
        </div>

        {/* LOGIN BUTTON */}
        <button
          onClick={handleLogin}
          className="
          w-full py-3 rounded-lg font-semibold text-white
          bg-gradient-to-r from-[#003f25] via-[#005c36] to-[#003f25]
          shadow-[0_0_25px_rgba(0,255,150,0.25)]
          hover:shadow-[0_0_35px_rgba(0,255,150,0.45)]
          transition
          "
        >
          Login
        </button>

        {/* LINK */}
        <p className="text-gray-400 text-sm mt-6 text-center">
          Don’t have an account?{" "}
          <Link to="/register" className="text-primary hover:underline">
            Register
          </Link>
        </p>

      </div>
    </section>
  );
}

export default Login;