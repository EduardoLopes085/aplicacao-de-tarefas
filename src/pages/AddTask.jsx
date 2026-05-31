import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TaskContext } from '../contexts/TaskContext';

const AddTask = () => {
  const { addTask } = useContext(TaskContext);
  const navigate = useNavigate();

  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!titulo.trim()) {
      alert('O título é obrigatório!');
      return;
    }

    const novaTarefa = {
      id: Date.now(),
      title: titulo,
      description: descricao,
    };

    addTask(novaTarefa);
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.titulo}>Adicionar Tarefa</h1>

      <form onSubmit={handleSubmit}>
        <div style={styles.campo}>
          <label style={styles.label}>Título:</label>
          <input
            style={styles.input}
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Digite o título da tarefa"
          />
        </div>

        <div style={styles.campo}>
          <label style={styles.label}>Descrição:</label>
          <input
            style={styles.input}
            type="text"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            placeholder="Digite uma descrição (opcional)"
          />
        </div>

        <button type="submit" style={styles.btnSalvar}>Salvar Tarefa</button>
        <button type="button" style={styles.btnVoltar} onClick={() => navigate('/')}>
          Voltar
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '500px',
    margin: '40px auto',
    padding: '0 16px',
    fontFamily: 'Arial, sans-serif',
  },
  titulo: {
    fontSize: '22px',
    marginBottom: '20px',
  },
  campo: {
    marginBottom: '14px',
  },
  label: {
    display: 'block',
    marginBottom: '4px',
    fontSize: '14px',
  },
  input: {
    width: '100%',
    padding: '7px',
    fontSize: '14px',
    boxSizing: 'border-box',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  btnSalvar: {
    padding: '8px 14px',
    backgroundColor: '#5cb85c',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    marginRight: '10px',
  },
  btnVoltar: {
    padding: '8px 14px',
    backgroundColor: '#aaa',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
  },
};

export default AddTask;