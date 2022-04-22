import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import HomePage from "../HomePage/HomePage";
import AllPostsPage from "../AllPostsPage/AllPostsPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import Home from "../Wallet/Home";
import Install from "../Wallet/Install";
import PreviewPage from "../PreviewPage/PreviewPage";
import AdminPage from "../AdminPage/AdminPage";
import AuthenticateForm from "../Authenticate/AuthenticateForm";
import {
  ALL_POSTS_PAGE,
  HOME_PAGE,
  NEW_POST_PAGE,
  PAGE_NOT_FOUND,
  POST_PREVIEW_PAGE,
  USER_PROFILE_PAGE,
  WALLET_PAGE,
  ADMIN_PAGE,
  AUTHENTICATE,
} from "./Routes";
import PageNotFound from "../PageNotFound";
import NewPostForm from "../NewPostForm/NewPostForm";

export const AppRouter = ({ role = "guest" }) => {
  return (
    <Router>
      <Routes>
        <Route
          path={PAGE_NOT_FOUND}
          element={
            <>
              <Navigation role={role} />
              <PageNotFound />
            </>
          }
        />
        <Route
          path={HOME_PAGE}
          element={
            <>
              <Navigation role={role} />
              <HomePage />
            </>
          }
        />
        <Route
          path={ALL_POSTS_PAGE}
          element={
            <>
              <Navigation role={role} />
              <AllPostsPage />
            </>
          }
        />
        <Route
          path={USER_PROFILE_PAGE}
          element={
            <>
              <Navigation role={role} />
              <ProfilePage />
            </>
          }
        />
        <Route
          path={WALLET_PAGE}
          element={
            <>
              <Navigation role={role} />
              {window.ethereum ? <Home /> : <Install />}
            </>
          }
        />
        <Route
          path={POST_PREVIEW_PAGE}
          element={
            <>
              <Navigation role={role} />
              <PreviewPage />
            </>
          }
        />
        <Route
          path={NEW_POST_PAGE}
          element={
            <>
              <Navigation role={role} />
              <NewPostForm />
            </>
          }
        />
        <Route
          path={AUTHENTICATE}
          element={
            <>
              <Navigation role={role} />
              <AuthenticateForm />
            </>
          }
        />
        <Route
          path={ADMIN_PAGE}
          element={
            <>
              <Navigation role={role} />
              <AdminPage />
            </>
          }
        />
      </Routes>
    </Router>
  );
};
