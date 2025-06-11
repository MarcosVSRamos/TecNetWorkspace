import LocationsList from '../../components/LocationsList'
import { distrito } from '../api'

const Distrito = () => (
  <>
    <LocationsList locations={distrito} title="Distrito" category="distrito" />
  </>
)

export default Distrito
