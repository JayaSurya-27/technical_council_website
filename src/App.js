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
<<<<<<< HEAD
          <Card/>
          {/* <Routes>
=======
          <Routes>
>>>>>>> 8bd59ce22b357f26f2258bc980af646fbb4d38c0
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/Members" element={<Members />} />
            </Routes>
            <Footer />
        </ApiState>
      </Router>
    </>
  );
};

export default App;
