import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  padding: 32px 0;
  text-align: center;

  div {
    h2 {
      background-color: ${cores.azul}80;
      max-width: 80%;
      margin: 0 auto;
      border-radius: 8px;
    }
  }
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 18px;
  place-items: center;
`
