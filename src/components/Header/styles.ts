import styled from 'styled-components'
import { cores } from '../../styles'

export const Div = styled.div`
  background-color: ${cores.azul}80;
  height: 60px;
  padding: 12px 38px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Sections = styled.ul`
  display: flex;
  text-align: center;
  justify-content: space-between;
  font-size: 24px;
  font-weight: bold;

  li {
    border: solid 2px ${cores.cinza};
    border-radius: 8px;
    margin: 0 4px;
    width: 110px;
  }
`
