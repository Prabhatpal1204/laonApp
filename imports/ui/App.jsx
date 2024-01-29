import React from "react";
import Navbar from "./Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import MyWallet from "./MyWallet.jsx";
import Activity from "./Activity.jsx";
import Account from "./Account.jsx";
import Setting from "./Setting.jsx";
import Login from "./Login.jsx";
import Signup from "./Signup.jsx";
import Footer from "./Footer.jsx";
export const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/mywallet" exact element={<MyWallet />} />
      <Route path="/activity" exact element={<Activity />} />
      <Route path="/account" exact element={<Account />} />
      <Route path="/setting" exact element={<Setting />} />

      <Route path="/login" exact element={<Login />} />

      <Route path="/" exact element={<Home />} />

      <Route path="/signup" exact element={<Signup />} />
    </Routes>
    <Footer />
  </Router>
);
