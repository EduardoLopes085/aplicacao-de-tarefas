import { Link } from 'react-router-dom';
import {useContext} from 'react';
import { TaskContext } from '../contexts/TaskContext';
import TaskItem from '../components/TaskItem';

const Home = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div style={styles.container}>
      <h1 style={styles.titulo}>Lista de Tarefas</h1>
      <Link to="/add-task">
        <button style={styles.btnAdicionar}>+ Nova Tarefa</button>
      </Link>

      <div style={styles.lista}>
        {tasks.length === 0 ? (
          <p style={styles.vazio}>Nenhuma tarefa cadastrada ainda.</p>
        ) : (
          tasks.map((task) => <TaskItem key={task.id} task={task} />)
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '40px auto',
    padding: '0 16px',
    fontFamily: 'Arial, sans-serif',
  },
  titulo: {
    fontSize: '24px',
    marginBottom: '16px',
  },
  btnAdicionar: {
    padding: '8px 14px',
    backgroundColor: '#4a90d9',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '14px',
    marginBottom: '20px',
    display: 'block',
  },
  lista: {
    marginTop: '10px',
  },
  vazio: {
    color: '#888',
    fontSize: '14px',
  },
};

export default Home;