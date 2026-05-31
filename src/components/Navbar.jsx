import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav style={styles.nav}>
      <span style={styles.logo}>📝 Minhas Tarefas</span>
      <div style={styles.links}>
        <Link to="/" style={location.pathname === '/' ? styles.linkAtivo : styles.link}>
          Início
        </Link>
        <Link to="/add-task" style={location.pathname === '/add-task' ? styles.linkAtivo : styles.link}>
          + Nova Tarefa
        </Link>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 24px',
    backgroundColor: '#4a90d9',
    color: '#fff',
  },
  logo: {
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    fontSize: '16px',
  },
  links: {
    display: 'flex',
    gap: '16px',
  },
  link: {
    color: '#dce9f7',
    textDecoration: 'none',
    fontSize: '14px',
  },
  linkAtivo: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: 'bold',
    borderBottom: '2px solid #fff',
    paddingBottom: '2px',
  },
};

export default Navbar;
