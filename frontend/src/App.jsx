import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [status, setStatus] = useState("checking...");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/health")
      .then((res) => setStatus(res.data.status))
      .catch(() => setStatus("backend not reachable"));
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-cyan-400">SentinelX</h1>
        <p className="mt-2 text-slate-300">Backend status: {status}</p>
      </div>
    </div>
  );
}

export default App;