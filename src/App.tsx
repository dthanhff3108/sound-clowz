import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import './App.css';
import { RenderRoutes, routes } from 'router/routes';

function App() {
  const { t } = useTranslation();
  const changeLanguage = () => {
    i18n.changeLanguage('vn');
  };
  return (
    <div className="App">
      <RenderRoutes routes={routes} authenticated={true} />
    </div>
  );
}

export default App;
