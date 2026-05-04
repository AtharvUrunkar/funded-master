import { useState } from "react";
import { 
  createUserWithEmailAndPassword, 
  updateProfile, 
  signOut 
} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState(""); // ✅ NEW
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

const handleRegister = async () => {
  setError("");

  if (!name || !email || !password) {
    setError("Please fill all fields");
    return;
  }

  if (password.length < 6) {
    setError("Password must be at least 6 characters");
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await updateProfile(userCredential.user, {
      displayName: name,
    });

    // 🔥 FORCE LOGOUT
    await signOut(auth);

    // 🔥 IMPORTANT DELAY
    setTimeout(() => {
      navigate("/login");
    }, 500);

  } catch (err) {
    console.log(err);

    if (err.code === "auth/email-already-in-use") {
      setError("Account already exists. Please login.");
    } else if (err.code === "auth/invalid-email") {
      setError("Invalid email");
    } else if (err.code === "auth/weak-password") {
      setError("Password must be at least 6 characters");
    } else {
      setError("Something went wrong");
    }
  }
};

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center relative overflow-hidden">

      {/* Glow */}
      <div className="absolute left-[-200px] top-[30%] w-[500px] h-[500px] bg-[#00E24B]/20 blur-[200px]" />

      <div className="relative z-10 w-full max-w-md p-10 rounded-2xl 
      bg-gradient-to-br from-[#02150c] via-[#052016] to-[#03110a]
      border border-[#2f5d45]/30">

        <h2 className="text-3xl font-bold mb-2 text-primary">
          Create Account
        </h2>

        {error && (
          <p className="text-red-400 text-sm mb-4">{error}</p>
        )}

        {/* ✅ NAME INPUT */}
        <input
          type="text"
          placeholder="Full Name"
          className="w-full mb-4 p-3 rounded-lg bg-black/50 border border-white/10 
          focus:outline-none focus:border-primary"
          onChange={(e) => setName(e.target.value)}
        />

        {/* EMAIL */}
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-3 rounded-lg bg-black/50 border border-white/10"
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* PASSWORD */}
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 p-3 rounded-lg bg-black/50 border border-white/10"
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* BUTTON */}
        <button
          onClick={handleRegister}
          className="w-full py-3 rounded-lg font-semibold text-white
          bg-gradient-to-r from-[#003f25] via-[#005c36] to-[#003f25]
          shadow-[0_0_25px_rgba(0,255,150,0.25)]
          hover:shadow-[0_0_35px_rgba(0,255,150,0.45)]
          transition"
        >
          Register
        </button>

        {/* LINK */}
        <p className="text-gray-400 text-sm mt-6 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-primary hover:underline">
            Login
          </Link>
        </p>

      </div>
    </section>
  );
}

export default Register;