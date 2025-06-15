import styled from 'styled-components'
import { cores } from '../../styles'

export const Div = styled.div`
  text-align: center;

  h1 {
    padding-top: 20px;
    padding-bottom: 20px;
    margin-bottom: 60px;
    background-color: ${cores.cinza}BF;
  }
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  max-width: 100%;
  background-color: ${cores.cinza};
`

export const DivCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`

export const Img = styled.img`
  width: 140px;
  height: 146px;
`
