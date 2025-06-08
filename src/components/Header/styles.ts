import styled from 'styled-components'
import { cores } from '../../styles'

export const Div = styled.div`
  background-color: ${cores.cinza}BF;
  padding: 12px 38px;
`

export const Sections = styled.ul`
  display: flex;
  text-align: center;
  justify-content: space-between;
  font-size: 16px;
  font-weight: bold;
  color: ${cores.branco};

  li {
    border: solid 2px ${cores.azul};
    border-radius: 8px;
    width: 80px;
  }
`
