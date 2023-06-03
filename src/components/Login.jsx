import React, { useState } from 'react'
import './css/Login.css'
import { useNavigate } from 'react-router-dom'

const Login = ( { setLoginStatus } ) => {

  const adminUser = {
    username: "admin",
    password: "admin123"
  }

  const [loginUser, setLoginUser] = useState({
    username: "",
    password: ""
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setLoginUser({...loginUser, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (adminUser.username == loginUser.username && adminUser.password == loginUser.password) {
      alert("Login Success")
      localStorage.setItem('loginStatus', true)
      // setLoginStatus(true)
      navigate('/')
    } else {
      alert("Login Failed")
    }
  }

  return (
    <>
      <div className="login-body">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-2"></div>
          <div className="col-lg-6 col-md-8 login-box">
            <div className="col-lg-12 login-key">
              <i className="fa fa-key" aria-hidden="true"></i>
            </div>
            <div className="col-lg-12 login-title">
              ADMIN LOGIN PANEL
            </div>

            <div className="col-lg-12 login-form">
              <div className="col-lg-10 mx-auto login-form">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-control-label">USERNAME</label>
                    <input type="text" className="form-control" name='username' onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">PASSWORD</label>
                    <input type="password" className="form-control" name='password' onChange={handleChange} />
                  </div>

                  <div className="col-lg-12 loginbttm">
                    <div className="col-lg-6 login-btm login-text">
                      
                    </div>
                    <div className="col-lg-6 login-btm login-button">
                      <button type="submit" className="btn btn-outline-primary">LOGIN</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-3 col-md-2"></div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default Login