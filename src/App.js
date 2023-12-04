import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Card from "./components/card";
import NavBar from "./components/navBar";
import Home from "./pages/home";
import Events from "./pages/events";
import Members from "./pages/members";
import ApiState from "./context/apiState";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Router>
        <ApiState>
          <NavBar/>
          <Card/>
          {/* <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/Members" element={<Members />} />
            </Routes>*/}
            <Footer />
        </ApiState>
      </Router>
    </>
  );
};

export default App;
