import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddTask from './pages/AddTask';
import Navbar from './components/Navbar/Navbar';
import { TaskProvider } from './contexts/taskContext';

const App = () => {
  return (
    <Router>
      <TaskProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-task" element={<AddTask />} />
        </Routes>
      </TaskProvider>
    </Router>
  );
};

export default App;
