import styled from 'styled-components'

type BotoaProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotoaProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  border: none;
  border-radius: 6px;
  color: #fff;
  cursor: pointer;
  font-size: ${(props) => props.fontSize || '16px'};
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  white-space: nowrap;
`

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
  &:hover {
    background-color: #ff0000b7;
  }
`

function Teste() {
  return (
    <>
      <Botao principal>Enviar</Botao>
      <Botao fontSize="14px" principal={false}>
        Cancelar
      </Botao>
      <BotaoPerigo as="a" principal>
        <span>Não clique aqui</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
