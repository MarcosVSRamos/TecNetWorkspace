import { Link } from 'react-router-dom'

import { ListaTorres } from '../ListaTorres'
import { torres } from '../../pages/api'
import logo from '../../assets/images/logo_dois.jpg'
import { DivHeader, HeaderLinks, Img, Lista } from './styles'

const Backup = () => (
  <div>
    <DivHeader>
      <Link to="/menu">
        <Img src={logo} alt="Logo" />
      </Link>
      <HeaderLinks>
        <a href="#city">Cidade</a>
        <a href="#farm">Rural</a>
        <a href="#village">Distritos</a>
      </HeaderLinks>
    </DivHeader>

    <Lista>
      <ListaTorres torres={torres} location="cidade" />
      <ListaTorres torres={torres} location="rural" />
      <ListaTorres torres={torres} location="distrito" />
    </Lista>
  </div>
)

export default Backup
