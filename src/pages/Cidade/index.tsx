import LocationsList from '../../components/LocationsList'
import { cidade } from '../api'

const Cidade = () => (
  <>
    <LocationsList locations={cidade} title="Cidade" category="cidade" />
  </>
)

export default Cidade
