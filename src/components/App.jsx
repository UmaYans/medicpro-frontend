import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import ClinicPage from "./pages/Clinics/Index";
import CardsWithMap from "./pages/Clinics/Contain/WithMap/Index";
import List from "./pages/Clinics/Contain/List/Index";
import DocInfo from "./pages/DocPage/DocInfo/DocInfo";
import DocPage from "./pages/DocPage/DocPage";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./pages/Layout/Layout";
import ProfilPage from "./pages/ProfilPage/PersonalPage";
import ServicePage from "./pages/ServicePage/ServicePage";
import SigninPage from "./pages/SigninPage/SigninPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import ClinicCard from "./pages/Clinics/Contain/Card/Index";
import MainProfil from "./pages/ProfilPage/MainProfil/MainProfil";
import CommentProfil from "./pages/ProfilPage/CommentProfil/CommentProfil";
import EntryProfil from "./pages/ProfilPage/EntryProfil/EntryProfil";


function App() {
  const token = useSelector((state) => state.user.token);

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
          element={<Layout />}
          // element={!token ? <Navigate to="/sign-in" /> : <Layout />}
        >
          <Route index element={<HomePage />} />
          <Route path="docs" element={<DocPage />} />
          <Route path="docs/all" element={<DocPage />} />
          <Route path="docs/spec/:id" element={<DocPage />} />
          <Route path="docs/:docId" element={<DocInfo />} />
          <Route path="servic" element={<ServicePage />} />
          <Route path="clinics/*" element={<ClinicPage />}>
            {/* <Route index element={<CardsWithMap />} /> */}
            <Route index element={<CardsWithMap />}/>
            <Route path=":id" element={<CardsWithMap />}/>
            <Route path="list" element={<List />} />
          </Route>
          <Route path="clinics/list/:clinId" element={<ClinicCard />} />
          <Route path="profile/*" element={<ProfilPage />}>
            <Route index element={<MainProfil />} />
            <Route path="inform" element={<MainProfil />} />
            <Route path="comments" element={<CommentProfil />} />
            <Route path="entry" element={<EntryProfil />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
