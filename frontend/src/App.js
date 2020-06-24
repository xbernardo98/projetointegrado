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
import home_dev_2 from './view/home_2_dev';
import editarinfopessoal_gestor from './view/editarinfopessoal_gestor';
import infopessoal_gestor from './view/infopessoal_gestor';
import criacaodeequipa from './view/criacaodeequipa';
import criacaodeequipa2 from './view/criacaodeequipa2';
import comparar from './view/comparar';
import home_2_rh from './view/home_2_rh';
import home_rh from './view/home_rh';
import recursoshumanos from './view/recursoshumanos';
import projeto_gestor from './view/projeto_gestor';





function App() {
  
  return (
    <Router>

      <div className="app">
        
        <Route path="/" exact component={login} />
        <Route path="/projetos" component={projetos} />
        <Route path="/edit/:employeeId" component={Edit} />
        <Route path="/utilizadores" component={utilizadores} />
        <Route path="/utilizador" component={utilizador} />
        <Route path="/projetos_info/:employeeId" component={projetos_info} />
        <Route path="/ver_perfil/:employeeId" component={ver_perfil} />
        <Route path="/info_pessoal_dev" component={info_pessoal_dev} />
        <Route path="/editar_info_pessoal_dev" component={editar_info_pessoal_dev} />
        <Route path="/home_2_dev" component={home_dev_2} />
        <Route path="/comparar" component={comparar} />
        <Route path="/infopessoal_gestor" component={infopessoal_gestor} />
        <Route path="/editarinfopessoal_gestor" component={editarinfopessoal_gestor} />
        <Route path="/criacaodeequipa" component={criacaodeequipa} />
        <Route path="/criacaodeequipa2" component={criacaodeequipa2} />
        <Route path="/home_2_rh" component={home_2_rh} />
        <Route path="/home_rh" component={home_rh} />
        <Route path="/recursoshumanos" component={recursoshumanos} />
        <Route path="/projeto_gestor" component={projeto_gestor} />
      </div>

    </Router>

  );
}

export default App;
