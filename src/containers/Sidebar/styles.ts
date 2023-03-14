import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'

export const Descricao = styled(P)`
  margin: 24px 0 40px;
`
export const BotaoTema = styled.button`
  background-color: #282a35;
  border-radius: 12px;
  border: none;
  color: #eeeeee;
  cursor: pointer;
  font-size: 10px;
  font-weight: bold;
  padding: 8px;
  white-space: nowrap;

  &:hover {
    background-color: rgba(40, 42, 53, 0.95);
  }
`
export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`
