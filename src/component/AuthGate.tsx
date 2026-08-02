import { useState } from "react";
import type { ReactNode } from "react";
import { useAuth } from "../context/AuthContext";
import Login from "./Login";
import Signup from "./Signup";

function AuthGate({ children }: { children: ReactNode }) {
  const { user, loading, signOut } = useAuth();
  const [mode, setMode] = useState<"login" | "signup">("login");

  if (loading) {
    return (
      <div className="text-center text-[#FBF3E7] font-serif text-xl">
        Loading...
      </div>
    );
  }

  if (!user) {
    return mode === "login" ? (
      <Login onSwitchToSignup={() => setMode("signup")} />
    ) : (
      <Signup onSwitchToLogin={() => setMode("login")} />
    );
  }

  return (
    <div>
      <div className="max-w-3xl mx-auto mb-4 flex justify-end">
        <button
          onClick={signOut}
          className="rounded-lg border border-[#B8556F]/40 bg-[#F6E2E4] px-4 py-2 text-xs font-light uppercase tracking-wider text-[#8A3F49] transition hover:bg-[#EFC9CD]"
        >
          Sign Out
        </button>
      </div>
      {children}
    </div>
  );
}

export default AuthGate;