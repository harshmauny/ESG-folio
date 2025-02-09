import Header from './Common/Header'
import { useAuth } from './Context/AuthContext'

function Home() {
  const { user } = useAuth()
  return (
    <div>
      <Header />
      {user?.userType === 'company' ? <p>Company</p> : <p>Investor</p>}
    </div>
  )
}

export default Home
