import styled from 'styled-components'
import { cores } from '../../styles'

export const Div = styled.div`
  text-align: center;
  width: 180px;
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
  gap: 10px;
  width: 180px;
  max-width: 100%;
  margin-top: 16px;

  input {
    text-align: center;
    border: none;
    border-radius: 4px;
    color: ${cores.branco};
  }

  button {
    background-color: ${cores.azul};
    border: none;
    border-radius: 4px;
  }
`
