import styles from "./RegistrationPage.module.css";
import { useState } from "react";
import axios from "axios";

export default function RegistrationPage() {
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registrationHandler = async () => {
    const result = await axios.post(
      "http://localhost:3000/auth/registration",
      { nickname: nickName, email, password },
      { withCredentials: true }
    );
    console.log(result);
  };

  return (
    <div className={styles.wrapper}>
      <h1>Регистрация</h1>

      <input placeholder="nickName" value={nickName} onChange={(e) => setNickName(e.target.value)} />
      <input placeholder="E-mail" value={email} type={"email"} onChange={(e) => setEmail(e.target.value)} />
      <input placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={registrationHandler}>Регистрация</button>
    </div>
  );
}
