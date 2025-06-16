import styled from 'styled-components'
import { cores } from '../../styles'

export const DivHeader = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${cores.cinza};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  z-index: 1000;
`

export const HeaderLinks = styled.div`
  display: flex;
  gap: 12px;
  font-size: 16px;
  font-weight: bold;
`

export const Img = styled.img`
  width: 120px;
  height: 40px;
  max-width: 100%;
  border-radius: 8px;
  margin-right: 32px;
`
