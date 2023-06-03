import React from 'react'
import './css/DashBoard.css'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const DashBoard = () => {

  const navigate = useNavigate()

  const clearLocalStorage = (e) => {
    localStorage.clear()
    navigate('/')
  }

  return (
    <>
      <div className="dash-body">
        <span className='dash-welcome'>Welcome, <span className="username">Admin</span></span>
        <Button variant='outline-danger mt-2 col-1 p-2' onClick={clearLocalStorage}> Logout</Button>
      </div>
    </>
  )
}

export default DashBoard