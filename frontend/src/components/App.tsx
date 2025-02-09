import Avatar from 'components/Avatar'
import logo from 'assets/logo.svg'
import Main from './Main'
import { HeroUIProvider } from '@heroui/react'

const randoms = [
  [1, 2],
  [3, 4, 5],
  [6, 7]
]

function App() {
  return (
    <HeroUIProvider>
      <Main />
    </HeroUIProvider>
  )
}

export default App
