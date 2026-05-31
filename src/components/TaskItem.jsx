import { useContext, useState } from 'react';
import { TaskContext } from '../contexts/taskContext';

const TaskItem = ({ task }) => {
  const { removeTask, editTask } = useContext(TaskContext);
  const [editando, setEditando] = useState(false);
  const [novoTitulo, setNovoTitulo] = useState(task.title);
  const [novaDescricao, setNovaDescricao] = useState(task.description);

  const salvarEdicao = () => {
    if (!novoTitulo.trim()) {
      alert('O título não pode ficar vazio!');
      return;
    }
    editTask({ ...task, title: novoTitulo, description: novaDescricao });
    setEditando(false);
  };

  const cancelarEdicao = () => {
    setNovoTitulo(task.title);
    setNovaDescricao(task.description);
    setEditando(false);
  };

  if (editando) {
    return <TaskItemEditando
      novoTitulo={novoTitulo}
      novaDescricao={novaDescricao}
      setNovoTitulo={setNovoTitulo}
      setNovaDescricao={setNovaDescricao}
      onSalvar={salvarEdicao}
      onCancelar={cancelarEdicao}
    />;
  }

  return (
    <div style={styles.card}>
      <h3 style={styles.titulo}>{task.title}</h3>
      <p style={styles.descricao}>{task.description}</p>
      <div>
        <button style={styles.btnEditar} onClick={() => setEditando(true)}>Editar</button>
        <button style={styles.btnExcluir} onClick={() => removeTask(task.id)}>Excluir</button>
      </div>
    </div>
  );
};

const TaskItemEditando = ({ novoTitulo, novaDescricao, setNovoTitulo, setNovaDescricao, onSalvar, onCancelar }) => (
  <div style={styles.card}>
    <input
      style={styles.input}
      value={novoTitulo}
      onChange={(e) => setNovoTitulo(e.target.value)}
      placeholder="Título"
    />
    <input
      style={styles.input}
      value={novaDescricao}
      onChange={(e) => setNovaDescricao(e.target.value)}
      placeholder="Descrição"
    />
    <div>
      <button style={styles.btnSalvar} onClick={onSalvar}>Salvar</button>
      <button style={styles.btnCancelar} onClick={onCancelar}>Cancelar</button>
    </div>
  </div>
);

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '6px',
    padding: '12px',
    marginBottom: '10px',
    backgroundColor: '#fff',
  },
  titulo: {
    margin: '0 0 4px 0',
    fontSize: '16px',
    fontFamily: 'Arial, sans-serif',
  },
  descricao: {
    margin: '0 0 10px 0',
    color: '#555',
    fontSize: '14px',
    fontFamily: 'Arial, sans-serif',
  },
  input: {
    display: 'block',
    width: '100%',
    marginBottom: '8px',
    padding: '6px',
    fontSize: '14px',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  btnEditar: {
    marginRight: '8px',
    padding: '5px 10px',
    backgroundColor: '#4a90d9',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  btnExcluir: {
    padding: '5px 10px',
    backgroundColor: '#e05c5c',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  btnSalvar: {
    marginRight: '8px',
    padding: '5px 10px',
    backgroundColor: '#5cb85c',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  btnCancelar: {
    padding: '5px 10px',
    backgroundColor: '#aaa',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};

export default TaskItem;