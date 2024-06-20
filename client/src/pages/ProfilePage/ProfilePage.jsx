import React, { useEffect, useState } from "react";
import { getAuthCookies } from "../../utils/utility.js";
import { jwtDecode } from "jwt-decode";
import './ProfilePage.css'

const ProfilePage = () => {
  const { accessToken } = getAuthCookies()
  const [userState, setUserState] = useState({})
  const getUserData = (token) => {
    if (token) {
      const decoded = jwtDecode(token);
      const { user } = decoded;
      setUserState({...userState, nickname:user.nickname, email:user.email })

    }
  }

  useEffect(() => {
    getUserData(accessToken)
  }, [accessToken]);

  return (<div className='pageWindow'>
    <h1 className='pageTitle'>Ваша информация</h1>
    <p>{`Привет ${userState.nickname}!`}</p>
    <p>{`Твой Email: ${userState.email}`}</p>
  </div>);
};

export default ProfilePage;
