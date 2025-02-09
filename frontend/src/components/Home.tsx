import Header from './Common/Header'
import CompanyView from './CompanyView'
import { useAuth } from './Context/AuthContext'
import InvestorView from './InvestorView'

function Home() {
  const { user } = useAuth()
  return (
    <div>
      <Header />
      {user?.userType === 'company' ? <CompanyView /> : <InvestorView />}
    </div>
  )
}

export default Home
