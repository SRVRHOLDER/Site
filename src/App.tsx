import React from 'react';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { ArtworkPage } from './pages/ArtworkPage';

function App() {
  const path = window.location.pathname;

  return (
    <Layout>
      {path === '/' && <HomePage />}
      {path === '/desenhos' && <ArtworkPage />}
    </Layout>
  );
}

export default App;