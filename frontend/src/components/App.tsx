import { BrowserRouter as Router } from 'react-router-dom'
import Main from './Main'
import { HeroUIProvider } from '@heroui/react'

function App() {
  return (
    <HeroUIProvider>
      <Router>
        <Main />
      </Router>
    </HeroUIProvider>
  )
}

export default App
