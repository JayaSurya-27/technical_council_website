import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Events from "./pages/events";
import Members from "./pages/members";
import ApiState from "./context/apiState";

const App = () => {
  return (
    <>
      <Router>
        <ApiState>
          {/* <Navbar /> */}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/Members" element={<Members />} />
          </Routes>
        </ApiState>
      </Router>
    </>
  );
};

export default App;
