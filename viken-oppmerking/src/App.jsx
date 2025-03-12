import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<div className="container mx-auto px-4 py-8">Tjenester side kommer snart</div>} />
          <Route path="/projects" element={<div className="container mx-auto px-4 py-8">Prosjekter side kommer snart</div>} />
          <Route path="/materials" element={<div className="container mx-auto px-4 py-8">Materialer side kommer snart</div>} />
          <Route path="/contact" element={<div className="container mx-auto px-4 py-8">Kontakt side kommer snart</div>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;