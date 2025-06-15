import Header from '../../components/Header'
import LocationsList from '../../components/LocationsList'
import { rural } from '../api'

const Rural = () => (
  <>
    <Header />
    <LocationsList locations={rural} title="Rural" category="rural" />
  </>
)

export default Rural
