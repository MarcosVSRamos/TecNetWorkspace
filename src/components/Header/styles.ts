import styled from 'styled-components'
import { cores } from '../../styles'

export const Div = styled.div`
  background-color: ${cores.cinza};
  height: 60px;
  padding: 12px 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  display: flex;
`
export const Img = styled.div`
  img {
    max-width: 100%;
  }
`

export const Sections = styled.ul`
  display: flex;
  text-align: center;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;
  margin-left: 12px;

  li {
    margin: 0 8px;
  }
`
