import styles from "./RegistrationPage.module.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function RegistrationPage() {
  const navigate = useNavigate();
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registrationHandler = async () => {
    const result = await axios.post(
      "http://localhost:3000/auth/registration",
      { nickname: nickName, email, password },
      { withCredentials: true }
    );

    if (result.status === 200) {
      navigate('/')
    }
  };

  return (
    <div className={styles.wrapper}>
      <h1>Регистрация</h1>

      <input placeholder="nickName" value={nickName} onChange={(e) => setNickName(e.target.value)} />
      <input placeholder="E-mail" value={email} type={"email"} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={registrationHandler}>Регистрация</button>
      <button onClick={()=>navigate('/login')}>Вернуться к авторизации</button>
    </div>
  );
}
