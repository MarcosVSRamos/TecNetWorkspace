import LocationsList from '../../components/LocationsList'
import { cidade, distrito, rural } from '../api'

const Home = () => (
  <>
    <LocationsList locations={rural} title="Rural" category="rural" />
    <LocationsList locations={distrito} title="Distritos" category="destrito" />
    <LocationsList locations={cidade} title="Cidade" category="cidade" />
  </>
)

export default Home
