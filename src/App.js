import React from 'react';
import Sidebar from './components/sidebar/sidebar';
import MainContent from './components/maincontent/maincontent';
import './styles/colors.css';
import '../src/App.css';
const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <MainContent/>
    </div>
  );
};

export default App;