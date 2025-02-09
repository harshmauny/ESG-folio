import { Suspense, lazy } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Home from './Home'

const Loading = () => (
  <div className="flex justify-center items-center h-screen">
    <p>Loading...</p>
  </div>
)

function Main() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  )
}

export default Main
