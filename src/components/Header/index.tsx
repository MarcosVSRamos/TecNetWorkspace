import { Div, Img, Sections } from './styles'

import logo from '../../assets/images/logo.png'

const Header = () => (
  <Div>
    <Img src={logo} />
    <Sections>
      <li>
        <a>Cidade</a>
      </li>
      <li>
        <a>Rural</a>
      </li>
      <li>
        <a>Distritos</a>
      </li>
    </Sections>
  </Div>
)

export default Header
