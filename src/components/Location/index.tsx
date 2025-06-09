import { Card, Img, Info } from './styles'

type Props = {
  title: string
  category?: 'cidade' | 'rural' | 'destrito'
  image: string
}

const Location = ({ title, image }: Props) => (
  <li>
    <Card href="#">
      <Info href="#">Info</Info>
      <Img src={image} alt={title} />
      <h4>{title}</h4>
    </Card>
  </li>
)

export default Location
