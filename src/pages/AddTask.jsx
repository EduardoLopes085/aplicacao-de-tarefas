import TaskForm from '../components/TaskForm';

const AddTask = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.titulo}>Adicionar Tarefa</h1>
      <TaskForm />
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
};

export default AddTask;