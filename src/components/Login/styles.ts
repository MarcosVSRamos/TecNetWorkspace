import styled from 'styled-components'
import { cores } from '../../styles'

export const Div = styled.div`
  text-align: center;
  width: 240px;
  max-width: 100%;
  margin: 232px auto;
  padding: 16px;
  background-color: ${cores.cinza};
  border-radius: 8px;

  img {
    width: 120px;
    border-radius: 8px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 16px auto 0;
  gap: 10px;
  width: 140px;
  max-width: 100%;
  margin-top: 16px;

  input {
    text-align: center;
    border: none;
    border-radius: 4px;
    height: 24px;
    color: #000;
  }

  button {
    background-color: ${cores.azul};
    border: none;
    border-radius: 4px;
  }
`
