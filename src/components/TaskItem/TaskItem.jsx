import { useContext, useState } from 'react';
import { TaskContext } from '../../contexts/taskContext';
import styles from './taskitem.module.css';

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
    <div className={styles.card}>
      <h3 className={styles.titulo}>{task.title}</h3>
      <p className={styles.descricao}>{task.description}</p>
      <div>
        <button className={styles.btnEditar} onClick={() => setEditando(true)}>Editar</button>
        <button className={styles.btnExcluir} onClick={() => removeTask(task.id)}>Excluir</button>
      </div>
    </div>
  );
};

const TaskItemEditando = ({ novoTitulo, novaDescricao, setNovoTitulo, setNovaDescricao, onSalvar, onCancelar }) => (
  <div className={styles.card}>
    <input
      className={styles.input}
      value={novoTitulo}
      onChange={(e) => setNovoTitulo(e.target.value)}
      placeholder="Título"
    />
    <input
      className={styles.input}
      value={novaDescricao}
      onChange={(e) => setNovaDescricao(e.target.value)}
      placeholder="Descrição"
    />
    <div>
      <button className={styles.btnSalvar} onClick={onSalvar}>Salvar</button>
      <button className={styles.btnCancelar} onClick={onCancelar}>Cancelar</button>
    </div>
  </div>
);


export default TaskItem;