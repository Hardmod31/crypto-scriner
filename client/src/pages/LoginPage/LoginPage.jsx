import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function LoginPage() {
  const navigate = useNavigate();
  const [stateLogin, setStateLogin] = useState("");
  const [statePassword, setStatePassword] = useState("");

  const loginHandler = async () => {
    const result = await axios.post(
      "http://localhost:3000/auth/login",
      {
        email: stateLogin,
        password: statePassword,
      },
      { withCredentials: true }
    );

    if (result.status === 200) {
      navigate("/");
    }
  };
  return (
    <div>
      <h1>Авторизация</h1>
      <input value={stateLogin} onChange={(e) => setStateLogin(e.target.value)} placeholder={"login"} />
      <input value={statePassword} onChange={(e) => setStatePassword(e.target.value)} placeholder={"password"} />
      <button onClick={loginHandler}>Вход</button>
      <button onClick={()=>navigate('/registration')}>Регистрация</button>
    </div>
  );
}
