import Intern from "./component/Intern";
import { AuthProvider } from "./context/AuthContext";
import AuthGate from "./component/AuthGate";

function App() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#2E1A2E] via-[#4A2545] to-[#5C2A4D] p-6 flex items-center justify-center">
      <AuthProvider>
        <AuthGate>
          <Intern />
        </AuthGate>
      </AuthProvider>
    </div>
  );
}

export default App;