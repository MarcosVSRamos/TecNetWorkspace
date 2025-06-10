import { createGlobalStyle } from 'styled-components'
import fundo from './assets/images/fundo.jpg'

export const cores = {
  azul: '#3742fa',
  branco: '#12cbc4',
  cinza: '#2f3542',
  verde: '#009432',
  azulClaro: '#0652DD'
}

const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-sefif;
    list-style: none;
    text-decoration: none;
    color: ${cores.branco};
  }
    body{
      background-image: url(${fundo});
      background-repeat: no-repeat;
      background-size: cover;
      background-attachment: fixed;
    }
`

export default GlobalCss
