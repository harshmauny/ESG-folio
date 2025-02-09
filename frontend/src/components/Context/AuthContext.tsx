import axios from 'axios'
import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect
} from 'react'
import { useNavigate } from 'react-router-dom'

const SERVER_URL = import.meta.env.VITE_SERVER_URL

export type RegisterData = {
  name: string
  email: string
  password: string
  userType?: string
}

export type userData = Pick<RegisterData, 'name' | 'email' | 'userType'>

interface AuthContextType {
  user: userData | null
  isAuthenticated: boolean
  loading: boolean
  login: (username: string, password: string) => Promise<void>
  logout: () => void
  register: (data: RegisterData) => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  loading: true,
  login: async () => {},
  logout: () => {},
  register: async () => {}
})

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<userData | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    let token = null
    // check if token is in local storage (user is already logged in)

    token = localStorage.getItem('token')
    // save token in local storage
    if (token !== null) {
      localStorage.setItem('token', token)
    }

    if (token !== null) {
      // set the token in the axios header
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      fetchUser()
    }
  }, [])

  // fetch the user data from token
  const fetchUser = async () => {
    try {
      const response = await axios.get(`/user`)
      setUser(response.data)
      setIsAuthenticated(true)
    } catch (error) {
      console.error('Failed to fetch user:', error)
      setIsAuthenticated(false)
    } finally {
      setLoading(false)
    }
  }

  const register = async (data: RegisterData) => {
    try {
      const response = await axios.post(`/register`, data)
      if (response.data.success) {
        navigate("/login")
      }
      else {

      }
    } catch (error) {
      console.error('Registration failed:', error)
      throw error
    }
  }

  const login = async (username: string, password: string) => {
    try {
      const response = await axios.post(`/login`, { username, password })
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('name', response.data.name)
      localStorage.setItem('email', response.data.email)
      localStorage.setItem('role', response.data.role)
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
      navigate("/")
    } catch (error) {
      console.error('Login failed:', error)
      throw error
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
    setIsAuthenticated(false)
    delete axios.defaults.headers.common['Authorization']
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        register,
        isAuthenticated,
        loading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
