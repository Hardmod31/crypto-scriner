import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage.jsx";
import Layout from "./components/Layout/Layout.jsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import CoinDetail from '../src/components/CoinDetail/CoinDetail.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProfilePage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/coin/:id' element={<CoinDetail />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
