import { Div, Img, Sections } from './styles'

import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'

const Header = () => (
  <Div>
    <Img>
      <Link to="/">
        <img src={logo} />
      </Link>
    </Img>
    <Sections>
      <li>
        <a>Cidade</a>
      </li>
      <li>
        <Link to="/rural">
          <a>Rural</a>
        </Link>
      </li>
      <li>
        <a>Distritos</a>
      </li>
    </Sections>
  </Div>
)

export default Header
