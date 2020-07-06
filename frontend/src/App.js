import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Logo from "./view/imagens/logo.svg";
import user from "./view/imagens/user.svg";

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





function App() {

  return (
    <Router>

      <div className="app">
        {/*login*/}

        <Route path="/" exact component={login} />

        {/* login*/}

        {/* recursos humanos*/}
        <Route path="/home_rh" component={home_rh} />
        <Route path="/projeto_rh" component={projeto_rh} />
        <Route path="/utilizadores_rh" component={utilizadores_rh} />
        <Route path="/criaruser" component={criaruser} />
        <Route path="/verperfil_rh/:employeeId" component={verperfil_rh} />
        <Route path="/projetos_info_rh/:employeeId" component={projetos_info_rh} />
        {/* recursos humanos*/}


        {/* gestores*/}
        <Route path="/home_gestor" component={home_gestor} />
        <Route path="/utilizadores_gestor" component={utilizadores_gestor} />
        <Route path="/projeto_gestor" component={projeto_gestor} />
        <Route path="/infopessoal_gestor" component={infopessoal_gestor} />
        <Route path="/editarinfopessoal_gestor" component={editarinfopessoal_gestor} />
        <Route path="/criacaodeequipa" component={criacaodeequipa} />
        <Route path="/criacaodeequipa2" component={criacaodeequipa2} />
        <Route path="/verperfil_gestor/:employeeId" component={verperfil_gestor} />
        <Route path="/projetos_info_gestor/:employeeId" component={projetos_info_gestor} />
        {/* gestores*/}


        {/* desenvolvedores*/}
        <Route path="/projetos" component={projetos} />
        <Route path="/utilizadores" component={utilizadores} />
        <Route path="/utilizador" component={utilizador} />
        <Route path="/ver_perfil/:employeeId" component={ver_perfil} />
        <Route path="/projetos_info/:employeeId" component={projetos_info} />
        <Route path="/editar_info_pessoal_dev" component={editar_info_pessoal_dev} />
        <Route path="/info_pessoal_dev" component={info_pessoal_dev} />
        {/* desenvolvedores*/}



        {/* perfil_recursos_humanos*/}
        <Route path="/recursoshumanos" component={recursoshumanos} />
        {/* perfil_recursos_humanos*/}

        {/* criacaostordeqeuipa*/}
        <Route path="/home_2_dev" component={home_dev_2} />
        <Route path="/home_2_rh" component={home_2_rh} />
        <Route path="/home_2_gestor" component={home_2_gestor} />
        <Route path="/criargestor" component={criargestor} />
        {/* criacaostordeqeuipa*/}

        <Route path="/comparar" component={comparar} />


      </div>



    </Router>

  );
}

export default App;
