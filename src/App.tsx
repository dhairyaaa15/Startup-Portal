import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Funding from "./pages/Funding";
import PatentApplication from "./pages/PatentApplication";
import Schemes from "./pages/Schemes";
import Meetups from "./pages/Meetups";
import MainContent from "./components/MainContent";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <NavBar />
      <Container component="main" style={{ paddingTop: '20px' }}>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/funding" element={<Funding />} />
          <Route path="/patent-application" element={<PatentApplication />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/meetups" element={<Meetups />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
