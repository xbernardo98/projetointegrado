import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Logo from "./view/imagens/logo.svg";
import user from "./view/imagens/user.svg";

import utilizadores from './view/utilizadores';
import login from './view/login';
import Edit from './view/edit';
import projetos from './view/projetos';
import navbar from './view/navbar';
import utilizador from './view/utilizador';
import projetos_info from './view/projetos_info';
import ver_perfil from './view/ver_perfil';
import info_pessoal_dev from './view/info_pessoal_dev';
import editar_info_pessoal_dev from './view/editar_info_pessoal_dev';






function App() {
  
  return (
    <Router>

      <div className="app">
        
        <Route path="/" exact component={login} />
        <Route path="/projetos" component={projetos} />
        <Route path="/edit/:employeeId" component={Edit} />
        <Route path="/utilizadores" component={utilizadores} />
        <Route path="/utilizador" component={utilizador} />
        <Route path="/projetos_info" component={projetos_info} />
        <Route path="/ver_perfil" component={ver_perfil} />
        <Route path="/info_pessoal_dev" component={info_pessoal_dev} />
        <Route path="/editar_info_pessoal_dev" component={editar_info_pessoal_dev} />
      </div>

    </Router>

  );
}

export default App;
