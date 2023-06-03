import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import ErrorPage from './components/ErrorPage'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='*' Component={ErrorPage} />
        </Routes>
      </Router>
    </>
  )
}

export default App