import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Appbar() {
  return (
    <div>
      <button onClick={() => window.location.href = "/"}>
        Landing page!
      </button>
      <button onClick={() => window.location.href = "/dashboard"}>
        Dashboard page!
      </button>
    </div>
  );
}

export default App;
