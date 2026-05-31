import { useContext, useState } from 'react';
import { TaskContext } from '../contexts/TaskContext';

const TaskItem = ({ task }) => {
  const { removeTask, editTask } = useContext(TaskContext);
  const [editando, setEditando] = useState(false);
  const [novoTitulo, setNovoTitulo] = useState(task.title);
  const [novaDescricao, setNovaDescricao] = useState(task.description);

  const salvarEdicao = () => {
    editTask({ ...task, title: novoTitulo, description: novaDescricao });
    setEditando(false);
  };

  return (
    <div style={styles.card}>
      {editando ? (
        <div>
          <input
            style={styles.input}
            value={novoTitulo}
            onChange={(e) => setNovoTitulo(e.target.value)}
          />
          <input
            style={styles.input}
            value={novaDescricao}
            onChange={(e) => setNovaDescricao(e.target.value)}
          />
          <button style={styles.btnSalvar} onClick={salvarEdicao}>Salvar</button>
          <button style={styles.btnCancelar} onClick={() => setEditando(false)}>Cancelar</button>
        </div>
      ) : (
        <div>
          <h3 style={styles.titulo}>{task.title}</h3>
          <p style={styles.descricao}>{task.description}</p>
          <button style={styles.btnEditar} onClick={() => setEditando(true)}>Editar</button>
          <button style={styles.btnExcluir} onClick={() => removeTask(task.id)}>Excluir</button>
        </div>
      )}
    </div>
  );
};

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
  },
  descricao: {
    margin: '0 0 10px 0',
    color: '#555',
    fontSize: '14px',
  },
  input: {
    display: 'block',
    width: '100%',
    marginBottom: '8px',
    padding: '6px',
    fontSize: '14px',
    boxSizing: 'border-box',
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