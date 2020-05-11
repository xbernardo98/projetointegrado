import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Logo from "./imagens/logo.svg";
import user from "./imagens/user.svg";

import utilizadores from './utilizadores';
import login from './login';
import Edit from './edit';
import projetos from './projetos';
import utilizador from './utilizador';
import projetos_info from './projetos_info';
import ver_perfil from './ver_perfil';
import info_pessoal_dev from './info_pessoal_dev';
import editar_info_pessoal_dev from './editar_info_pessoal_dev';

import '../App.css';






function App() {
  
  return (
    <Router>

      <div className="app">
        <nav class="navbar">
          <a class="navbar-brand" href="home_dev.html"><Link to="/projetos"><img class="img1" src={Logo} /></Link></a>
          <div class="nav_list">
            <ul>
              <li><a href="utilizadores_dev.html"><Link to="/utilizador">Utilizadores</Link></a></li>
              <li><a href="projeto_dev.html"><Link to="/utilizadores">Projeto</Link></a></li>
              <li>
                <div class="dropdown">
                  <a class="dropbtn">Nome</a>
                  <div class="dropdown-content">
                    <a href="#"><Link to="/info_pessoal_dev">Perfil</Link></a>
                    <a href="index.html"><Link to="/">Terminar Sessão</Link></a>

                  </div>
                </div>
              </li>

              <li class="user">
                <a><img class="img2" src={user} /></a>
              </li>
            </ul>
          </div>
        </nav>
        
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
