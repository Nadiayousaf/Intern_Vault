import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function Login({ onSwitchToSignup }: { onSwitchToSignup: () => void }) {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (email.trim() === "" || password.trim() === "") {
      setError("Please fill all fields.");
      return;
    }
    setLoading(true);
    setError("");
    const { error } = await signIn(email, password);
    setLoading(false);
    if (error) setError(error);
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="rounded-[28px] p-[1.5px] bg-gradient-to-br from-[#D4AF6A] via-[#8A5A6E] to-[#4A2545] shadow-2xl">
        <div className="rounded-[27px] bg-gradient-to-b from-[#FBF3E7] to-[#F3E2E9] px-8 py-10">
          <div className="text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#E8C87A] to-[#B4872F] shadow-lg ring-1 ring-[#8A6A1C]/40">
              <span className="text-2xl">🔑</span>
            </div>
            <h1 className="font-serif text-4xl text-black  font-light tracking-wide text-[#3B1C32]">
              Welcome Back
            </h1>
            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-[#8A5A6E]">
              Sign in to your vault
            </p>
          </div>

          <div className="my-8 h-px bg-gradient-to-r from-transparent via-[#D4AF6A]/50 to-transparent" />

          <form className="space-y-4">
            <input
              type="email"
              placeholder="Enter email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-[#E3D5C4] bg-white px-4 py-2.5 text-[#3B1C32] placeholder:text-[#B3A08F] outline-none transition focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/30"
            />
            <input
              type="password"
              placeholder="Enter password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-lg border border-[#E3D5C4] bg-white px-4 py-2.5 text-[#3B1C32] placeholder:text-[#B3A08F] outline-none transition focus:border-[#C9A227] focus:ring-2 focus:ring-[#C9A227]/30"
            />

            {error && (
              <p className="text-sm text-[#8A3F49] bg-[#F6E2E4] rounded-lg px-3 py-2">
                {error}
              </p>
            )}

            <button
              type="button"
              onClick={handleLogin}
              disabled={loading}
              className="w-full rounded-lg bg-gradient-to-r from-[#C9A227] to-[#B8556F] px-5 py-3 text-sm font-light uppercase tracking-wider text-[#FBF3E7] shadow-md transition hover:brightness-105 active:scale-[0.99] disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-[#7A5A66]">
            Don't have an account?{" "}
            <button
              onClick={onSwitchToSignup}
              className="text-[#B8556F] underline decoration-[#B8556F]/40 underline-offset-4 hover:text-[#8A3F49]"
            >
              Create one
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;