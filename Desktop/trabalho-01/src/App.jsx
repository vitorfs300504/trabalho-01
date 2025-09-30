import ListaAlunos from './componentes/ListaAlunos';
import Header from './componentes/Header'; 
import Footer from './componentes/Footer'; 
import Botao from './componentes/Button'; 
import Alerta from './componentes/Alerta';
import Acoes from './componentes/Acoes';
import Cards from './componentes/Cards';

function App() {
  return (
    <>
      <div>
        <h1>Olá, seja bem-vindo!</h1>
        <h2>Vitor de Freitas</h2>
      </div>

      <div>
        <h1>Mini Aplicação Desenvolvida em React com Versionamento no GitHub</h1>
        <p>Disciplina: Front-End</p>
        <p>Curso: Análise e Desenvolvimento de Sistemas</p>
      </div> 

      <div>
        <h1>Lista de Alunos:</h1>
        <h2>Ana, Vitor, Maria, Pedro, Alice, Inacio, Eduardo, Laura</h2>
      </div>

      <div>
        <h1>Eventos no React</h1>
        <Botao />
      </div>

      <div>
        <Alerta tipo="sucesso" />
        <Alerta tipo="erro" />
        <Alerta tipo="aviso" />
      </div>

      <div>
        <Acoes texto="Salvar" />
        <Acoes texto="Cancelar" />
        <Acoes texto="Enviar" />
      </div> 

      <div className="card-container">
      <Cards titulo="Ana" descricao="Aluna de Matemática" icone="📐" />
      <Cards titulo="Vitor" descricao="Aluno de Física" icone="🔬" />
      <Cards titulo="Maria" descricao="Aluna de Química" icone="⚗️" />
    </div>
    </>
  );
}

export default App;
