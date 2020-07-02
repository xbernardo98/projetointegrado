import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import infopessoal_dev from './info_pessoal_dev'

import logo from './imagens/logo.svg'
import boss from "./imagens/icons/boss.svg";
import correct from "./imagens/icons/correct.svg";
import Logo from "./imagens/logo.svg";
import user from "./imagens/user.svg";



import './css/criacaodeequipa.css';
class criacaodeequipa extends React.Component {
    render() {
        return (
            <div class="container-fluid">
            <div class="row">
                <nav class="navbar">
                    <a class="navbar-brand" href="home_gestor.html"><Link to="/home_gestor"><img class="img1" src={logo} /></Link></a>
                    <div class="nav_list">
                        <ul>
                            <li><a href="utilizadores_gestor.html"><Link to="/utilizadores_gestor">Utilizadores</Link></a></li>
                            <li><a href="projeto_gestor.html"><Link to="/projeto_gestor">Projeto</Link></a></li>
                            <li>
                                <div class="dropdown" >
                                    <a class="dropbtn">Nome</a>
                                    <div class="dropdown-content">
                                    <a href="user.html"><Link to="/infopessoal_gestor">Perfil</Link></a>
                                    <a href="index.html"><Link to="/">Terminar Sessão</Link></a>
                                    </div>
                                </div>
                            </li>
                           
                            <li class="user">
                                <a><img class="img2" src={user}/></a>
                            </li>
                          </ul>
                    </div>
                  </nav>
            </div>
            <div class="col-sm-12 col-lg-12 col-md-12 col-xl-12">
        <h2>Criação de Equipa</h2>
      </div>

      <div class="conteudo col-sm-12 col-lg-12 col-md-12 col-xl-12">


        <div class="card">
          <div class="row d-flex justify-content-center">
            <form class="row col-12">
              <div class="form-row col-6">
                <div class="form-group col-12 ">
                  <label for="inputAddress">Nome Projecto:</label>
                  <input type="text" class="form-control" id="inputAddress" placeholder="Nome Projecto"/>
                </div>
                <div class="form-row col-12">
                  <div class="form-group col-md-6">
                    <label for="inputEmail4">Anos Empresa:</label>
                    <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                      <option selected>Nenhum...</option>
                      <option value="1">1-3</option>
                      <option value="2">4-6</option>
                      <option value="3">7-+</option>
                    </select>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputPassword4">Idioma:</label>
                    <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                      <option selected>Nenhum...</option>
                      <option value="1">Inglês</option>
                      <option value="2">Alemão</option>
                      <option value="3">Francês</option>
                    </select>
                  </div>
                </div>
                <div class="form-group col-12">
                  <label for="inputAddress">Soft Skills:</label>
                  <input type="text" class="form-control" id="inputAddress" placeholder="Soft Skills"/>
                </div>
              </div>
              <div class="form-row col-6">
                <div class="form-group col-6 ">
                  <label for="inputAddress">Início do Progecto:</label>
                  <input type="text" class="form-control" id="inputAddress" placeholder="Início"/>
                </div>
                <div class="form-group col-6 ">
                  <label for="inputAddress">Fim do Progecto:</label>
                  <input type="text" class="form-control" id="inputAddress" placeholder="Fim"/>
                </div>
                <div class="form-row col-12">
                  <div class="form-group col-md-6">
                    <label for="inputEmail4">Viajar:</label>
                    <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                      <option selected>Nenhum...</option>
                      <option value="1">Sim</option>
                      <option value="2">Não</option>

                    </select>
                  </div>
                  <div class="form-group col-md-6">
                    <label for="inputPassword4">Nº Pessoas:</label>
                    <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                      <option selected>Nenhum...</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="3">4</option>
                      <option value="3">5</option>
                    </select>
                  </div>
                </div>
                <div class="form-group col-12">
                  <label for="inputAddress">Hard Skills:</label>
                  <input type="text" class="form-control" id="inputAddress" placeholder="Hard Skills"/>
                </div>
              </div>

              <div class="ml-auto p-2 mr-sm-4">
                  <button type="submit" class="btn "><a href="criacaodeequipa2.html"><Link to="/">Gerar</Link></a></button>
              </div>
            </form>
          </div>


        </div>
      </div>



    </div>



        );
    }
}
export default criacaodeequipa; 