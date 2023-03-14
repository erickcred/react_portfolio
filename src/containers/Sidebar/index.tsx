import { Avatar } from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Erick Rick</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        erickcred
      </Paragrafo>
      <Descricao fontSize={12} tipo="principal">
        Desenvolvedor Full Stack ASP.NET Core Junior | Javascript | NodeJs | C#
        .NET/ASP.NET | HTML | CSS
      </Descricao>
      <BotaoTema>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
