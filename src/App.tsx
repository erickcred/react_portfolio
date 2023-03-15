import { useState } from 'react'
import { ThemeProvider } from 'styled-components'

import Projetos from './containers/Projetos'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import EstiloGlobal, { Container } from './styles'
import temaDark from './Themes/dark'
import temaLight from './Themes/light'

function App() {
  const [estaUsandoThemeDark, setEstaUsandoThemeDark] = useState(false)

  function trocaTema() {
    setEstaUsandoThemeDark(!estaUsandoThemeDark)
  }

  return (
    <ThemeProvider theme={estaUsandoThemeDark ? temaDark : temaLight}>
      <EstiloGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema} />

        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
