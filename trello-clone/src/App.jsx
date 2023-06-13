import SideNav from "./components/SideNav";
import Home from "./pages/Home";
import LoginPage from "./pages/LogIn";

import "./styles/App.scss";

import { Routes, Route } from "react-router-dom";
// import Login from "./pages/LogIn";
function App() {
  return (
    <div className="App">
      <div className="wrap">
        <SideNav />

        <div style={{ width: "100%" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
