import { BrowserRouter as Router } from 'react-router-dom'
import Main from './Main'
import { HeroUIProvider } from '@heroui/react'
import { AuthProvider } from './Context/AuthContext'

function App() {
  return (
    <HeroUIProvider>
      <Router>
        <AuthProvider>
          <Main />
        </AuthProvider>
      </Router>
    </HeroUIProvider>
  )
}

export default App
