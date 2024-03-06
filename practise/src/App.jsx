import { Suspense, lazy } from "react";
const Landing = lazy(() => import("./components/Landing"));
const Dashboard = lazy(() => import("./components/Dashboard"));
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={"loading..."}>
                <Landing />
              </Suspense>
            }
          />
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={"loading..."}>
                <Dashboard />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Appbar() {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate("/")}>Landing page!</button>
      <button onClick={() => navigate("/dashboard")}>Dashboard page!</button>
    </div>
  );
}

export default App;
