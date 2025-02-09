import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import App from 'components/App'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:3000'

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(<App />)
