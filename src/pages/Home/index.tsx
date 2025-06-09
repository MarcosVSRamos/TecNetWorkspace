import Local from '../../models/Local'
import LocationsList from '../../components/LocationsList'

import fundo_rural from '../../assets/images/paisagem_rural.jpg'
import fundo_destrito from '../../assets/images/fundo_destrito.jpg'

const rural: Local[] = [
  {
    id: 1,
    category: 'rural',
    title: 'Sta. Claudina',
    image: fundo_rural
  },
  {
    id: 2,
    category: 'rural',
    title: 'Conchita',
    image: fundo_rural
  },
  {
    id: 3,
    category: 'rural',
    title: 'Faz. LV',
    image: fundo_rural
  },
  {
    id: 4,
    category: 'rural',
    title: 'Fonseca',
    image: fundo_rural
  },
  {
    id: 5,
    category: 'rural',
    title: 'Frenham',
    image: fundo_rural
  },
  {
    id: 6,
    category: 'rural',
    title: 'Sta. Helena',
    image: fundo_rural
  }
]

const destrito: Local[] = [
  {
    id: 1,
    category: 'destrito',
    title: 'Nova América',
    image: fundo_destrito
  },
  {
    id: 2,
    category: 'destrito',
    title: 'Cristalina',
    image: fundo_destrito
  }
]

const Home = () => (
  <>
    <LocationsList locations={rural} title="Rural" category="rural" />
    <LocationsList locations={destrito} title="Distritos" category="destrito" />
  </>
)

export default Home
