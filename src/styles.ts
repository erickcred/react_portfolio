import styled, { createGlobalStyle } from 'styled-components'
import { Theme } from './Themes/dark'

const EstiloGlobal = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  body {
    background-color: ${(props) => (props.theme as Theme).corDeFundo};
    padding: 80px 0;

    @media (max-width: 768px) {
      padding-top: 40px;
    }
  }
`

export default EstiloGlobal

export const Container = styled.div`
  display: grid;
  grid-template-columns: 128px auto;
  column-gap: 56px;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 768px) {
    display: block;
    max-width: 80%;
  }
`
