import { Card, Img, Info } from './styles'

type Props = {
  title: string
  category?: 'cidade' | 'rural' | 'distrito'
  image: string
  link: string
}

const Location = ({ title, image, link }: Props) => (
  <li>
    <Card href={link}>
      <Info href="#">Info</Info>
      <Img src={image} alt={title} />
      <h4>{title}</h4>
    </Card>
  </li>
)

export default Location
