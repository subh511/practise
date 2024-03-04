import {BrowserRouter,Routes,Route, useNavigate} from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Landing from "./components/Landing"
import { Suspense } from "react";
function App() {

  return (
    <div>
    <BrowserRouter>
    <Appbar/>
    <Routes>
    <Route path="/" element={<Suspense fallback="Loading..."><Landing/></Suspense>}/>
    <Route path="/dashboard" element={<Suspense fallback="Loading..."><Dashboard/></Suspense>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

function Appbar(){
  const navigate = useNavigate();
  return(
    <div>
    <button onClick={() => navigate("/")}>Landing Page</button>
    <button onClick={() => navigate("/dashboard")}>Dashboard page</button>
    </div>
  )
}

export default App
