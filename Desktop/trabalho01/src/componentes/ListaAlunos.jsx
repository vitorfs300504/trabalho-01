function ListaAlunos() {
  const alunos = ["Ana", "Vitor", "Maria", "Pedro", "Alice", "Inacio", "Eduardo", "Laura"];

  return (
    <div>
      <h2>Lista de Alunos</h2>
      <ul>
        {alunos.map((aluno, index) => (
          <li key={index}>{aluno}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListaAlunos;