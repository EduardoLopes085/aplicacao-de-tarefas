import TaskList from '../components/TaskList';

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.titulo}>Lista de Tarefas</h1>
      <TaskList />
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
};

export default Home;