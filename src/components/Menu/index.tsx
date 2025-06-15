import { Link } from 'react-router-dom'
import backup from '../../assets/images/backup.jpg'
import mapas from '../../assets/images/mapas_dois.jpg'
import { Card, Div, DivCard, Img } from './styles'

const Menu = () => (
  <Div>
    <h1>Oque deseja acessar?</h1>
    <DivCard>
      <Card>
        <a>
          <Link to="/backups">
            <Img src={backup} alt="Backup" />
            <h3>Backups</h3>
          </Link>
        </a>
      </Card>
      <Card>
        <Link to="/home">
          <a>
            <Img src={mapas} alt="Mapas" />
            <h3>Localizações</h3>
          </a>
        </Link>
      </Card>
    </DivCard>
  </Div>
)

export default Menu
