import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Brazil from './components/Brazil';
import Argentina from './components/Argentina'; // Importa o componente da Argentina
import Mexico from './components/Mexico';
import Colombia from './components/Colombia';
import PuertoRico from './components/PuertoRico';
// Importe os demais países conforme necessário

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Rota da Home */}
        <Route path="/" element={<Home />} />

        {/* Rota do Brazil */}
        <Route
          path="/brazil"
          element={
            <div className="d-flex vw-100">
              <Sidebar />
              <Brazil />
            </div>
          }
        />

        {/* Rota da Argentina */}
        <Route
          path="/argentina"
          element={
            <div className="d-flex vw-100">
              <Sidebar />
              <Argentina />
            </div>
          }
        />

        <Route
          path="/mexico"
          element={
            <div className="d-flex vw-100">
              <Sidebar />
              <Mexico />
            </div>
          }
        />

        <Route
          path="/colombia"
          element={
            <div className="d-flex vw-100">
              <Sidebar />
              <Colombia />
            </div>
          }
        />

<Route
          path="/puerto-rico"
          element={
            <div className="d-flex vw-100">
              <Sidebar />
              <PuertoRico />
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
