import { createGlobalStyle } from 'styled-components'
import fundo from './assets/images/fundo.jpg'

export const cores = {
  azul: '#3742fa',
  branco: '#EEEEEE',
  cinza: '#2f3542'
}

const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-sefif;
    list-style: none;
  }
    body{
      background-image: url(${fundo});
      background-repeat: no-repeat;
    }
`

export default GlobalCss
