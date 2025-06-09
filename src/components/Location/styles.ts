import styled from 'styled-components'
import { cores } from '../../styles'

export const Card = styled.a`
  background-color: ${cores.verde};
  border: solid 1px ${cores.verde};
  width: 140px;
  max-width: 100%;
  text-align: center;
  padding-bottom: 1px;
  border-radius: 16px;
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.7);
  overflow: hidden;
  display: block;
  margin: 8px;
  position: relative;

  h4 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 7px;
    color: ${cores.cinza};
  }
`
export const Info = styled.a`
  font-weight: bold;
  position: absolute;
  width: 60px;
  right: 12px;
  top: 12px;
  background-color: ${cores.cinza}BF;
  border-radius: 8px;
`

export const Img = styled.img`
  width: 140px;
  width: 100%;
`
