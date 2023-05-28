import Nav from "../components/Nav";
import { Routes, Route, useLocation } from "react-router-dom";
import Popular from "../pages/Popular";
import Upcoming from "../pages/Upcoming";
import Details from "../pages/Details";
import Searched from "../pages/Searched";
import TopRated from "../pages/TopRated";
import LoginPage from "../components/LoginPage";
import RegisterPage from "../components/RegisterPage";
import Profile from "../pages/Profile";
import Protected from "../components/Protected";

function Main() {
  const location = useLocation();
  const isHidden =
    location.pathname === "/login" || location.pathname === "/register";
  return (
    <>
      {isHidden ? (
        (location.pathname === "/login" && <LoginPage />) ||
        (location.pathname === "/register" && <RegisterPage />)
      ) : (
        <div>
          <Nav />
          <Routes>
            <Route index element={<Popular />} />
            <Route element={<Upcoming />} path="/upcoming" />
            <Route element={<TopRated />} path="/toprated" />
            <Route element={<Details />} path="/details/:id" />
            <Route element={<Searched />} path="/search/:title" />
            <Route element={<LoginPage />} path="/login" />
            <Route element={<RegisterPage />} path="/register" />
            <Route
              element={
                <Protected>
                  <Profile />
                </Protected>
              }
              path="/profile"
            />
          </Routes>
          )
        </div>
      )}
    </>
  );
}

export default Main;
