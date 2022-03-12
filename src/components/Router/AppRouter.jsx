import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import HomePage from "../HomePage/HomePage";
import AllPostsPage from "../AllPostsPage/AllPostsPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import Home from "../Wallet/Home";
import Install from "../Wallet/Install";
import PreviewPage from "../PreviewPage/PreviewPage";
import {
  ALL_POSTS_PAGE,
  HOME_PAGE,
  PAGE_NOT_FOUND,
  POST_PREVIEW_PAGE,
  USER_PROFILE_PAGE,
  WALLET_PAGE,
} from "./Routes";
import PageNotFound from "../PageNotFound";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path={PAGE_NOT_FOUND}
          element={
            <>
              <Navigation />
              <PageNotFound />
            </>
          }
        />
        <Route
          path={HOME_PAGE}
          element={
            <>
              <Navigation />
              <HomePage />
            </>
          }
        />
        <Route
          path={ALL_POSTS_PAGE}
          element={
            <>
              <Navigation />
              <AllPostsPage />
            </>
          }
        />
        <Route
          path={USER_PROFILE_PAGE}
          element={
            <>
              <Navigation />
              <ProfilePage />
            </>
          }
        />
        <Route
          path={WALLET_PAGE}
          element={
            <>
              <Navigation />
              {window.ethereum ? <Home /> : <Install />}
            </>
          }
        />
        <Route
          path={POST_PREVIEW_PAGE}
          element={
            <>
              <Navigation />
              <PreviewPage />
            </>
          }
        />
      </Routes>
    </Router>
  );
};
