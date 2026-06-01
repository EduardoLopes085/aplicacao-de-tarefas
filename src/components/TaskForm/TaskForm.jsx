import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { TaskContext } from '../../contexts/taskContext';
import styles from './taskform.module.css';

const TaskForm = () => {
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
    <form onSubmit={handleSubmit}>
      <div className={styles.campo}>
        <label className={styles.label}>Título:</label>
        <input
          className={styles.input}
          type="text"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          placeholder="Digite o título da tarefa"
        />
      </div>

      <div className={styles.campo}>
        <label className={styles.label}>Descrição:</label>
        <input
          className={styles.input}
          type="text"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Digite uma descrição (opcional)"
        />
      </div>

      <button type="submit" className={styles.btnSalvar}>Salvar Tarefa</button>
      <button type="button" className={styles.btnVoltar} onClick={() => navigate('/')}>
        Voltar
      </button>
    </form>
  );
};



export default TaskForm;