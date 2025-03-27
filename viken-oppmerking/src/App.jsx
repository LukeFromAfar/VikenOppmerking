import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import MaterialsPage from './pages/MaterialsPage';
import ParkingService from './pages/services/Parking';
import SchoolService from './pages/services/School';
import CleaningService from './pages/services/Cleaning';
import FixingService from './pages/services/Fixing';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/parking" element={<ParkingService />} />
          <Route path="/services/school" element={<SchoolService />} />
          <Route path="/services/cleaning" element={<CleaningService />} />
          <Route path="/services/fixing" element={<FixingService />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/materials" element={<MaterialsPage />} />
          <Route path="/contact" element={<div className="container mx-auto px-4 py-8">Kontakt side kommer snart</div>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;