import { Titulo as TitutloEstilo } from './styles'

export type Props = {
  children: string
  fontSize?: number
}

const Titulo = (props: Props) => (
  <TitutloEstilo fontSize={props.fontSize}>{props.children}</TitutloEstilo>
)

export default Titulo
