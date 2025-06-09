import styled from 'styled-components'
import { cores } from '../../styles'

export const Div = styled.div`
  background-color: ${cores.azul}80;
  height: 60px;
  padding: 12px 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  display: flex;
`
export const Img = styled.img`
  width: 80px;
  max-width: 100%;
  margin-right: 40px;
`

export const Sections = styled.ul`
  display: flex;
  text-align: center;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;

  li {
    margin: 0 8px;
  }
`
