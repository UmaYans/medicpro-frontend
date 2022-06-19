import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { modules } from "./pages/Main";

function App() {
  const token = useSelector((state) => state.user.token);

  return (
    <>
      <Routes>
        <Route path="/sign-up" element={<modules.SignupPage />} />
        <Route
          path="/sign-in"
          // element={<SigninPage />}
          element={token ? <Navigate to="/" /> : <modules.SigninPage />}
        />
        <Route
          path="/"
          element={<modules.Layout />}
          // element={!token ? <Navigate to="/sign-in" /> : <Layout />}
        >
          <Route index element={<modules.HomePage />} />
          <Route path="docs" element={<modules.DocPage />} />
          <Route path="docs/all" element={<modules.DocPage />} />
          <Route path="docs/spec/:id" element={<modules.DocPage />} />
          <Route path="docs/:docId" element={<modules.DocInfo />} />
          <Route path="service" element={<modules.ServicePage />} />
          <Route path="clinics/*" element={<modules.ClinicPage />}>
            {/* <Route index element={<CardsWithMap />} /> */}
            <Route index element={<modules.CardsWithMap />} />
            <Route path=":id" element={<modules.CardsWithMap />} />
            <Route path="list" element={<modules.List />} />
          </Route>
          <Route path="clinics/list/:clinId" element={<modules.ClinicCard />} />
          <Route path="profile/*" element={<modules.ProfilPage />}>
            <Route index element={<modules.MainProfil />} />
            <Route path="inform" element={<modules.MainProfil />} />
            <Route path="comments" element={<modules.CommentProfil />} />
            <Route path="entry" element={<modules.EntryProfil />} />
          </Route>
        </Route>
        <Route path="*" element={<modules.NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
