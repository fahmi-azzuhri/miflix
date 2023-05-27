import Nav from "../components/Nav";
import { Routes, Route } from "react-router-dom";
import Popular from "../pages/Popular";
import Upcoming from "../pages/Upcoming";
import Details from "../pages/Details";
import Searched from "../pages/Searched";
import TopRated from "../pages/TopRated";
import LoginPage from "../components/LoginPage";
import Dashboard from "../pages/Dashboard";
import { Register } from "../pages/Register";

// import { AuthContextProvider } from "../context/AuthContext";

function Main() {
  return (
    <>
      <Nav />
      <Routes>
        <Route index element={<Popular />} />
        <Route element={<Upcoming />} path="/upcoming" />
        <Route element={<TopRated />} path="/toprated" />
        <Route element={<Details />} path="/details/:id" />
        <Route element={<Searched />} path="/search/:title" />
        <Route element={<LoginPage />} path="/login" />
        <Route element={<Register />} path="/register" />
        <Route element={<Dashboard />} path="/dashboard" />
      </Routes>
    </>
  );
}

export default Main;
