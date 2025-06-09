import Local from '../../models/Local'
import LocationsList from '../../components/LocationsList'

import fundo_rural from '../../assets/images/paisagem_rural.jpg'
import fundo_destrito from '../../assets/images/fundo_destrito.jpg'
import fundo_cidade from '../../assets/images/fundo_cidade.jpg'

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
  },
  {
    id: 7,
    category: 'rural',
    title: 'Dona Amélia',
    image: fundo_rural
  },
  {
    id: 8,
    category: 'rural',
    title: 'São Miguel',
    image: fundo_rural
  },
  {
    id: 9,
    category: 'rural',
    title: 'Terra do Boi',
    image: fundo_rural
  },
  {
    id: 10,
    category: 'rural',
    title: 'Porco',
    image: fundo_rural
  },
  {
    id: 11,
    category: 'rural',
    title: 'Faz. Palmeiras',
    image: fundo_rural
  },
  {
    id: 12,
    category: 'rural',
    title: 'Granja Finamoure',
    image: fundo_rural
  }
]

const Rural = () => (
  <>
    <LocationsList locations={rural} title="Rural" category="rural" />
  </>
)

export default Rural
