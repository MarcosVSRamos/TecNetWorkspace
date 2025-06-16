import { Torre as TorreType } from '../../models/Torre'
import { Torre } from '../Torre'
import { List } from './syles'

type Props = {
  torres: TorreType[]
  location: 'cidade' | 'rural' | 'distrito'
}

export const ListaTorres = ({ torres, location }: Props) => {
  const idMap = {
    cidade: 'city',
    rural: 'farm',
    distrito: 'village'
  }

  const tituloMap = {
    cidade: 'Cidade',
    rural: 'Rural',
    distrito: 'Distritos'
  }

  const torresFiltradas = torres.filter((torre) => torre.location === location)

  return (
    <List id={idMap[location]}>
      <h2>{tituloMap[location]}</h2>
      {torresFiltradas.map((torre) => (
        <Torre key={torre.id} torre={torre} />
      ))}
    </List>
  )
}
