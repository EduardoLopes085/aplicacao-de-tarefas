import { useContext } from 'react';
import { TaskContext } from '../contexts/taskContext';
import TaskItem from './TaskItem';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <p style={styles.vazio}>Nenhuma tarefa cadastrada ainda.</p>;
  }

  return (
    <div style={styles.lista}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

const styles = {
  lista: {
    marginTop: '10px',
  },
  vazio: {
    color: '#888',
    fontSize: '14px',
    fontFamily: 'Arial, sans-serif',
  },
};

export default TaskList;
