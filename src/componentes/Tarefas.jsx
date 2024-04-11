import React from 'react'

/* Injeta tarefas como componente*/
const Tarefas = ({tarefas, removeTarefas, completaTarefas}) => {
  return (
    <div className="tarefa" style={{textDecoration: tarefas.isCompleted ? "line-through" : ""}}>

        <div className="conteudo">
            <p>{tarefas.text}</p>
            <p className="category">({tarefas.category})</p>
        </div>

        <div>
            <button className="complete"onClick={() => completaTarefas(tarefas.id)}>Completar</button>
            <button className="remove" onClick={() => removeTarefas(tarefas.id)}>Deletar</button>
        </div>

    </div>
  )
}

export default Tarefas
