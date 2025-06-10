import LocationsList from '../../components/LocationsList'
import { rural } from '../api'

const Rural = () => (
  <>
    <LocationsList locations={rural} title="Rural" category="rural" />
  </>
)

export default Rural
