import React, { useEffect, useState } from 'react'
import Login from './Login'
import DashBoard from './DashBoard'

const Home = () => {

  // const [loginStatus, setLoginStatus] = useState(false)

  // useEffect(() => {
  //   localStorage.setItem('loginStatus', false)
  // }, [])

  return (
    <>
      {
        (localStorage.getItem('loginStatus')) ? (
          <DashBoard />
        ) : (
          <Login />
        )
      }
    </>
  )
}

export default Home