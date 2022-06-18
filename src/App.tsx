import { useFetch } from './hooks/useFetch';

/* DEFINE TIPO DE DADOS */
type Repository = {
  full_name: string,
  description: string
}

function App() {

/* CONSULTA API via get */
const { data: repositories, isFetching } = useFetch<Repository[]>('users/diogobsd/repos')

  return (
    <ul>
      { isFetching && <p>Carregando...</p>}
      {repositories?.map(repo => {
        return (
          <li key={repo.full_name}>
            <strong>{repo.full_name}</strong>
            <p>{repo.description}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default App