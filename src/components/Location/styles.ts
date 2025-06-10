import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.a`
  background-color: ${cores.cinza};
  border: solid 1px ${cores.cinza};
  color: ${cores.cinza};
  width: 140px;
  max-width: 100%;
  text-align: center;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.7);
  overflow: hidden;
  display: block;
  margin: 8px;
  position: relative;

  h4 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 7px;
  }
`
export const Info = styled.a`
  font-weight: bold;
  position: absolute;
  width: 60px;
  right: 12px;
  top: 12px;
  background-color: ${cores.cinza};
  border-radius: 8px;
`

export const Img = styled.img`
  width: 140px;
  width: 100%;
`
