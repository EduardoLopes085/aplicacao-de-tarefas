import { useContext } from 'react';
import { TaskContext } from '../../contexts/taskContext';
import TaskItem from '../TaskItem/TaskItem';
import styles from './tasklist.module.css';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  if (tasks.length === 0) {
    return <p className={styles.vazio}>Nenhuma tarefa cadastrada ainda.</p>;
  }

  return (
    <div className={styles.lista}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};


export default TaskList;
