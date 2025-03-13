import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import MaterialsPage from './pages/MaterialsPage';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/materials" element={<MaterialsPage />} />
          <Route path="/contact" element={<div className="container mx-auto px-4 py-8">Kontakt side kommer snart</div>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;