import { FC, ReactElement } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppContent from './AppContent';
import React from 'react';

const App: FC = (): ReactElement => {
  return (
    <>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </>
  );
};

export default App;