import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import PsyList from './pages/PsyList';
import PsyForm from './pages/PsyForm';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" component={Landing} exact />
      <Route path="/paciente" component={PsyList} />
      <Route path="/cadastro-psicologo" component={PsyForm} />
    </BrowserRouter>
  );
}

export default Routes;