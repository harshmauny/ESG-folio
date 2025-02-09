import { Suspense, lazy } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Login from './Login'
import Register from './Register'
import Home from './Home'
import { useAuth } from './Context/AuthContext'

const Loading = () => (
  <div className="flex justify-center items-center h-screen">
    <p>Loading...</p>
  </div>
)

function Main() {
  const { isAuthenticated, user } = useAuth()
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route
          path="/login"
          element={!isAuthenticated ? <Login /> : <Navigate to="/" />}
        />
        <Route
          path="/register"
          element={!isAuthenticated ? <Register /> : <Navigate to="/" />}
        />

        <Route path="/" element={<Home />} />
      </Routes>
    </Suspense>
  )
}

export default Main
