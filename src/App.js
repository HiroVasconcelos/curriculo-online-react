import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home'
import Habilidades from './components/pages/Habilidades'
import Experiencia from './components/pages/Experiencia'
import Educacao from './components/pages/Educacao'
import Contatos from './components/pages/Contatos'

function App() {
  return (
    <Router>
        <header>
          <h1>Guilherme Ayres Vasconcelos</h1>
        </header>
        <section>
          <Navbar />
          <div className="content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/habilidades" element={<Habilidades />} />
                <Route path="/experiencia" element={<Experiencia />} />
                <Route path="/educacao" element={<Educacao />} />
                <Route path="/contatos" element={<Contatos />} />
            </Routes>
          </div>
        </section>
    </Router>
  );
}

export default App;
