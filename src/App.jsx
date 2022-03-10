import React from "react";
import Install from "./components/wallet/Install";
import Home from "./components/wallet/Home";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import ProfilePage from "./components/ProfilePage/ProfilePage";
import HomePage from "./components/HomePage/HomePage";
import AllPostsPage from "./components/AllPostsPage/AllPostsPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navigation />
                <HomePage />
              </>
            }
          />
          <Route
            path="/allArticles"
            element={
              <>
                <Navigation />
                <AllPostsPage />
              </>
            }
          />
          <Route
            path="/userProfile"
            element={
              <>
                <Navigation />
                <ProfilePage />
              </>
            }
          />
          <Route
            path="/wallet"
            element={
              <>
                <Navigation />
                {window.ethereum ? <Home /> : <Install />}
              </>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
