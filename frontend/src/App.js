import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//imagnes
import Logo from "./view/imagens/logo.svg";
import user from "./view/imagens/user.svg";
import logo from "./view/imagens/logo.svg";

//paginas
import navbar from './view/navbar';
import utilizadores from './view/utilizadores';
import login from './view/login';
import projetos from './view/projetos';
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
import home_2_gestor from './view/home_2_gestor';
import home_gestor from './view/home_gestor';
import projeto_rh from './view/projeto_rh';
import utilizadores_gestor from './view/utilizadores_gestor';
import utilizadores_rh from './view/utilizadores_rh';
import criargestor from './view/criargestor';
import criaruser from './view/criaruser';
import verperfil_rh from './view/verperfil_rh';
import projetos_info_rh from './view/projetos_info_rh';
import verperfil_gestor from './view/verperfil_gestor';
import projetos_info_gestor from './view/projetos_info_gestor';
import edit_recursoshumanos from './view/edit_recursoshumanos';


import { data } from 'jquery';





function App() {
  

  /*console.log(!sessionStorage.getItem('id'));*/

  if (!sessionStorage.getItem('id')) {
    

    return (
      <Router>
        <div className="App">
          <Route path="/" exact component={login} />
        </div>

      </Router>
    );

  }

  else if (sessionStorage.getItem('tipo_user') == 0) {
    
    return (
      
      <Router>
        <div className="App">
          <div class="row">
            <nav class="navbar">
              <Link to="/home_gestor"><img class="img1" src={logo} /></Link>
              <div class="nav_list">
                <ul>
                  <li><Link to="/utilizadores_gestor">Utilizadores</Link></li>
                  <li><Link to="/projeto_gestor">Projeto</Link></li>
                  <li><Link to="/criacaodeequipa">Criar Projeto</Link></li>
                  <li>
                    <div class="dropdown" >
                      <a class="dropbtn">{sessionStorage.getItem('nomeuser')} <img class="user" src={user} /></a>
                      <div class="dropdown-content">
                        <Link to="/infopessoal_gestor">Perfil</Link>
                        <Link to="/">Terminar Sessão</Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>

          </div>

          <Route path="/" exact component={home_gestor} />
          <Route path="/home_gestor" component={home_gestor} />
          <Route path="/utilizadores_gestor" component={utilizadores_gestor} />
          <Route path="/projeto_gestor" component={projeto_gestor} />
          <Route path="/infopessoal_gestor" component={infopessoal_gestor} />
          <Route path="/editarinfopessoal_gestor" component={editarinfopessoal_gestor} />
          <Route path="/criacaodeequipa" component={criacaodeequipa} />
          <Route path="/criacaodeequipa2" component={criacaodeequipa2} />
          <Route path="/verperfil_gestor/:employeeId" component={verperfil_gestor} />
          <Route path="/projetos_info_gestor/:employeeId" component={projetos_info_gestor} />
        </div>





      </Router>
    );
  }

  else if (sessionStorage.getItem('tipo_user') == 1) {
     
    return (
      
      <Router>

        <div className="App">
          <div class="row">
            <nav class="navbar">
              <Link to="/home_rh"><img class="img1" src={Logo} /></Link>
              <div class="nav_list">
                <ul>
                  <li><Link to="/utilizadores_rh">Utilizadores</Link></li>
                  <li><Link to="/projeto_rh">Projetos</Link></li>
                  <li>
                    <div class="dropdown" >
                      <a class="dropbtn" id="nome" > {sessionStorage.getItem('nomeuser')} <img class="user" src={user} /></a>
                      <div class="dropdown-content">
                        <Link to="/recursoshumanos">Perfil</Link>
                        <Link to="/">Terminar Sessão</Link>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>

          </div>

          <Route path="/" exact component={home_rh} />
          <Route path="/home_rh" component={home_rh} />
          <Route path="/projeto_rh" component={projeto_rh} />
          <Route path="/utilizadores_rh" component={utilizadores_rh} />
          <Route path="/criaruser" component={criaruser} />
          <Route path="/verperfil_rh/:employeeId" component={verperfil_rh} />
          <Route path="/projetos_info_rh/:employeeId" component={projetos_info_rh} />
          <Route path="/recursoshumanos" component={recursoshumanos} />
          <Route path="/edit_recursoshumanos" component={edit_recursoshumanos} />
         

        </div>





      </Router>
    );
  }

  else if (sessionStorage.getItem('tipo_user') == 2) {
    return (
      <Router>

        <div className="App">
          <div class="row">
            <nav class="navbar">
              <Link to="/projetos"><img class="img1" src={Logo} /></Link>
              <div class="nav_list">
                <ul>
                  <li><Link to="/utilizador">Utilizadores</Link></li>
                  <li><Link to="/utilizadores">Projeto</Link></li>
                  <li>
                    <div class="dropdown">
                      <a class="dropbtn">{sessionStorage.getItem('nomeuser')} <img class="user" src={user} /></a>
                      <div class="dropdown-content">
                        <Link to="/info_pessoal_dev">Perfil</Link>
                        <Link to="/">Terminar Sessão</Link>

                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>

          </div>

          <Route path="/" exact component={projetos} />
          <Route path="/projetos" exact component={projetos} />
          <Route path="/utilizadores" component={utilizadores} />
          <Route path="/utilizador" component={utilizador} />
          <Route path="/ver_perfil/:employeeId" component={ver_perfil} />
          <Route path="/projetos_info/:employeeId" component={projetos_info} />
          <Route path="/editar_info_pessoal_dev" component={editar_info_pessoal_dev} />
          <Route path="/info_pessoal_dev" component={info_pessoal_dev} />
        </div>





      </Router>
    );
  }




}

export default App;




