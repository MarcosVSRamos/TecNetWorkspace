import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.a`
  background-color: ${cores.verde};
  border: solid 1px ${cores.verde};
  width: 120px;
  max-width: 100%;
  text-align: center;
  padding-bottom: 1px;
  border-radius: 16px;
  overflow: hidden;
  display: block;
  margin: 8px;

  h4 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
    color: ${cores.cinza};
  }
`

export const Img = styled.img`
  width: 120px;
  width: 100%;
`
