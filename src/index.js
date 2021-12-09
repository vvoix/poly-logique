import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './App';
import Conjonction from './pages/connecteur/Conjonction';
import Disjonction from './pages/connecteur/Disjonction';
import Equivalence from './pages/connecteur/Equivalence';
import Implication from './pages/connecteur/Implication';
import Negation from './pages/connecteur/Negation';
import Connecteurs from './pages/Connecteurs';
import Existence from './pages/quantificateur/Existence';
import Universel from './pages/quantificateur/Universel';
import IlExiste from './pages/mot-cle/IlExiste';
import Montrons from './pages/mot-cle/Montrons';
import Posons from './pages/mot-cle/Posons';
import Soit from './pages/mot-cle/Soit';
import Supposons from './pages/mot-cle/Supposons';
import LC from './pages/liste/LC';
import LPU from './pages/liste/LPU';
import Phrase from './pages/liste/Phrase';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="connecteur" element={<Connecteurs />} />
        <Route path="connecteur/conjonction" element={<Conjonction />} />
        <Route path="connecteur/disjonction" element={<Disjonction />} />
        <Route path="connecteur/equivalence" element={<Equivalence />} />
        <Route path="connecteur/implication" element={<Implication />} />
        <Route path="connecteur/negation" element={<Negation />} />
        <Route path="quantificateur/existence" element={<Existence />} />
        <Route path="quantificateur/universel" element={<Universel />} />
        <Route path="liste/lc" element={<LC />} />
        <Route path="liste/lpu" element={<LPU />} />
        <Route path="liste/phrase" element={<Phrase />} />
        <Route path="motcle/ilexiste" element={<IlExiste />} />
        <Route path="motcle/montrons" element={<Montrons />} />
        <Route path="motcle/posons" element={<Posons />} />
        <Route path="motcle/soit" element={<Soit />} />
        <Route path="motcle/supposons" element={<Supposons />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
