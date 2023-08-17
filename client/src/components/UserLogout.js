import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App'

export const UserLogout = () => {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const UserLogoutPage = async () => {
    try {
      const res = await fetch('', {
        method: "GET",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        credentials: "include"
      })

      navigate('/login');
      dispatch({ type: "USER", payload: false })

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }


    }
    catch (err) {
      console.log(err)

    }

  }

  useEffect(() => { UserLogoutPage() }, [])
  return (
    <></>
  )
}
export default UserLogout