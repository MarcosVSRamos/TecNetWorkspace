import styled, { createGlobalStyle } from 'styled-components'
import fundo from './assets/images/fundo.jpg'

export const cores = {
  azul: '#3742fa',
  branco: '#12cbc4',
  cinza: '#2f3542',
  verde: '#009432',
  azulClaro: '#0652DD'
}

const GlobalCss = createGlobalStyle`
html {
    scroll-behavior: smooth;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-sefif;
    list-style: none;
    text-decoration: none;
    color: ${cores.branco};
  }
`

export const Fundo = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  marging-top: -20px;
  background-image: url(${fundo});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
`

export const Div = styled.div`
  position: relative;
  z-index: 1;
`

export default GlobalCss
