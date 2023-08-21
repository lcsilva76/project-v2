import Filhos from "./components/filhos"

function App() {

  const nomes = ['Luis','Thais','Andreia']
  const aluno = 'Luis'

  return (
    <>
      <h1>Teste</h1>
      <Filhos nomes={nomes} aluno={aluno}/>
    </>
  )
}

export default App
