import LocationsList from '../../components/LocationsList'
import { distrito } from '../api'

const Distrito = () => (
  <>
    <LocationsList locations={distrito} title="Distrito" category="destrito" />
  </>
)

export default Distrito
