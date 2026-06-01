import { Link, useLocation } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className={styles.nav}>
      <span className={styles.logo}>📝 Minhas Tarefas</span>
      <div className={styles.links}>
        <Link to="/" className={location.pathname === '/' ? styles.linkAtivo : styles.link}>
          Início
        </Link>
        <Link to="/add-task" className={location.pathname === '/add-task' ? styles.linkAtivo : styles.link}>
          + Nova Tarefa
        </Link>
      </div>
    </nav>
  );
};


export default Navbar;
