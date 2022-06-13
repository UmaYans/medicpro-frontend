import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";

import ClinicPage from "./pages/ClinicPage/ClinicPage";
import DocPage from "./pages/DocPage/DocPage";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./pages/Layout/Layout";
import ProfilPage from "./pages/ProfilPage/PersonalPage";
import ServicePage from "./pages/ServicePage/ServicePage";
import SigninPage from "./pages/SigninPage/SigninPage";
import SignupPage from "./pages/SignupPage/SignupPage";

function App() {
  
    const token = useSelector((state) => state.token)

  return (
    <>
      <Routes>
        <Route path="/sign-up" element={<SignupPage />} />
        <Route
          path="/sign-in"
          // element={<SigninPage />}
          element={token ? <Navigate to="/" /> : <SigninPage />}
        />
        <Route
          path="/"
          // element={<Layout />}
          element={!token ? <Navigate to="/sign-in" /> : <Layout />}
        >
          <Route index element={<HomePage />} />
          <Route path="docs" element={<DocPage />} />
          <Route path="servic" element={<ServicePage />} />
          <Route path="clinic" element={<ClinicPage />} />
          <Route path="profile" element={<ProfilPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
