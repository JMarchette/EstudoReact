import { useState } from 'react'
import "./App.css";
import Tarefas from './componentes/Tarefas';
import TarefasForm from './componentes/TarefasForm';
import Busca from './componentes/Busca';
import Filtro from './componentes/Filtro';

function App() {

  const[tarefas, setTarefas] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: false,
    },
  ]);

  const [search, setSearch] = useState("");

  const [filter, setFilter] = useState("All");

  const addTarefa = (text, category) => {
      const newTarefas = [...tarefas, {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];

    setTarefas(newTarefas);
  }

  const removeTarefas = (id) => {
    const newTarefas = [...tarefas]
    const filteredTarefas = newTarefas.filter(tarefas => 
      tarefas.id !== id ? tarefas : null);
      setTarefas(filteredTarefas);
  }

  const completaTarefas = (id) => {
    const newTarefas = [...tarefas]
    newTarefas.map((tarefas) => tarefas.id === id ? tarefas.isCompleted = !tarefas.isCompleted : tarefas)
    setTarefas(newTarefas); // Corrigido aqui
  }

  const filteredTarefas = tarefas.filter((tarefa) => {
    if (filter === "All") return true;
    if (filter === "Completed") return tarefa.isCompleted;
    if (filter === "Incomplete") return !tarefa.isCompleted;
  });

  return (
    <div className="app">
      <h1>Lista de tarefas</h1>
      <Busca busca={search} setSearch={setSearch}/>
      <Filtro filter={filter} setFilter={setFilter}/>
      <div className="tarefas-list">

        { filteredTarefas
          .filter((tarefas) => 
          tarefas.text.toLowerCase().includes(search.toLowerCase()))
          .map((tarefas) => 
          (
            /* Libera o acesso ao componente tarefas */
            <Tarefas key={tarefas.id} tarefas={tarefas} removeTarefas={removeTarefas} completaTarefas={completaTarefas}/>
        ))}
      </div>
        <TarefasForm addTarefa={addTarefa}/>
    </div>
  )
    
}

export default App
