import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

export const Descricao = styled(P)`
  margin: 24px 0 40px;
`
export const BotaoTema = styled.button`
  background-color: ${(props) => props.theme.corPrincipal};
  border-radius: 12px;
  border: none;
  color: ${(props) => props.theme.corDeFundo};
  cursor: pointer;
  font-size: 10px;
  font-weight: bold;
  padding: 8px;
  white-space: nowrap;
`
export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
