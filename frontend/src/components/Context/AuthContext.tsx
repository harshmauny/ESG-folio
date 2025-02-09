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
  const [user, setUser] = useState<userData | null>({
    name: 'Harsh',
    email: 'Mauny',
    userType: 'investor'
  })
  const [isAuthenticated, setIsAuthenticated] = useState(true)
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
  const fetchUser = async () => {}

  const register = async (data: RegisterData) => {}

  const login = async (username: string, password: string) => {}

  const logout = () => {}

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
