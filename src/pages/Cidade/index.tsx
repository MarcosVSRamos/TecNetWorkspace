import Header from '../../components/Header'
import LocationsList from '../../components/LocationsList'
import { cidade } from '../api'

const Cidade = () => (
  <>
    <Header />
    <LocationsList locations={cidade} title="Cidade" category="cidade" />
  </>
)

export default Cidade
