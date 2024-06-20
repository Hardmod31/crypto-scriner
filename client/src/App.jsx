import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage.jsx";
import Layout from "./components/Layout/Layout.jsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProfilePage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
