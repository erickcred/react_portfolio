import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corDaBorda};
  padding: 16px;
`
export const LinkBotao = styled.a`
  background-color: ${(props) => props.theme.corDeFundoBotao};
  color: ${(props) => props.theme.corDeFundo};
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  text-decoration: none;
  padding: 8px;
  margin-top: 24px;
  white-space: nowrap;
`
