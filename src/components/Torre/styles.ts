import styled from 'styled-components'
import { cores } from '../../styles'

export const Div = styled.div`
  width: 240px;
  margin: 0 auto;

  h3 {
    margin-top: 22px;
    margin-bottom: 8px;
    background-color: ${cores.cinza}BF;
    color: #fff;
    padding-top: 6px;
    padding-bottom: 8px;
  }
`

export const ItensList = styled.li`
  font-weight: bold;

  a {
    display: block;
    color: ${cores.branco};
    background-color: ${cores.cinza}BF;
    width: 240px;
    max-width: 100%;
    padding: 2px;
    margin: 2px;
    border-radius: 6px;
  }
`
