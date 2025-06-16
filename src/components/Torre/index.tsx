import { Torre as TorreType } from '../../models/Torre'
import { Div, ItensList } from './styles'

type Props = {
  torre: TorreType
}

export const Torre = ({ torre }: Props) => (
  <Div id={torre.id}>
    <h3>{torre.nome}</h3>
    <ul>
      {torre.equipamentos.map((equip, index) => (
        <ItensList key={index}>
          <a href={equip.link}>{equip.titulo}</a>
        </ItensList>
      ))}
    </ul>
  </Div>
)
