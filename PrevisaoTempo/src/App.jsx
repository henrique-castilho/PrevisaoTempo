import { useState } from 'react'
import Busca from './components/Busca'
import ExibirPrevisoes from './components/ExibirPrevisoes'

function App() {
    const [previsoes, setPrevisoes] = useState([])
    
  return (
    <div>
      <Busca BuscaFeita={setPrevisoes}/>
      <ExibirPrevisoes dados={previsoes} />
    </div>
  )
}

export default App
