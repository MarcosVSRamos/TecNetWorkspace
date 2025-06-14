import { Div, Img, Sections } from './styles'

import logo from '../../assets/images/logo_dois.jpg'
import { Link } from 'react-router-dom'

const Header = () => (
  <Div>
    <Img>
      <Link to="/home">
        <img src={logo} />
      </Link>
    </Img>
    <Sections>
      <li>
        <Link to="/cidade">
          <a>Cidade</a>
        </Link>
      </li>
      <li>
        <Link to="/rural">
          <a>Rural</a>
        </Link>
      </li>
      <li>
        <Link to="/distrito">
          <a>Distritos</a>
        </Link>
      </li>
    </Sections>
  </Div>
)

export default Header
