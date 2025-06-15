import Header from '../../components/Header'
import LocationsList from '../../components/LocationsList'
import { cidade, distrito, rural } from '../api'

const Home = () => (
  <>
    <Header />
    <LocationsList locations={rural} title="Rural" category="rural" />
    <LocationsList locations={distrito} title="Distritos" category="distrito" />
    <LocationsList locations={cidade} title="Cidade" category="cidade" />
  </>
)

export default Home
