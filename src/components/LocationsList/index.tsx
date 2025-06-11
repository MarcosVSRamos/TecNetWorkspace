import Local from '../../models/Local'
import Location from '../Location'
import { Container, List } from './styles'

export type Props = {
  title: string
  category?: 'cidade' | 'rural' | 'distrito'
  locations: Local[]
}

const LocationsList: React.FC<Props> = ({ title, category, locations }) => (
  <Container>
    <div>
      <h2>{title}</h2>
      <List>
        {locations.map((location) => (
          <Location
            key={location.id}
            category={location.category}
            title={location.title}
            image={location.image}
            link={location.link}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default LocationsList
