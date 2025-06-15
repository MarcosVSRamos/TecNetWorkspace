import Header from '../../components/Header'
import LocationsList from '../../components/LocationsList'
import { distrito } from '../api'

const Distrito = () => (
  <>
    <Header />
    <LocationsList locations={distrito} title="Distrito" category="distrito" />
  </>
)

export default Distrito
