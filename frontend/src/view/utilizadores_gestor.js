import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

import projetos_info from './projetos_info'

import logo from "./imagens/logo.svg";
import user from "./imagens/user.svg";
import perfil from "./imagens/perfil.jpg";

import './css/utilizadores.css';
class utilizadores_gestor extends React.Component {
    render() {
        return ( 
            <div class="container-fluid">
            <div class="row">
              
                    <nav class="navbar">
                        <a class="navbar-brand" href="home_gestor.html"><Link to="/home_gestor"><img class="img1" src={logo.svg}/></Link></a>
                        <div class="nav_list">
                            <ul>
                                <li><a href="utilizadores_gestor.html"><Link to="/utilizadores_gestor">Utilizadores</Link></a></li>
                                <li><a href="projeto_gestor.html"><Link to="/projeto_gestor">Projetos</Link></a></li>
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
                
                <div class="row col-sm-12 col-lg-12 col-md-12 col-xl-12">
                    <h2>Utilizadores</h2>
                </div>
    
                        <div class="conteudo col-sm-12 col-lg-12 col-md-12 col-xl-12">
    
                                <div class="card">
                                    
                                    <form class="form-inline">
    
                                        <div class="form-group mx-sm-3 mb-2">
                                          <input type="password" class="form-control" id="inputPassword2" placeholder="Procurar"/>
                                        </div>
                                        <button type="submit" class="btn1 btn-primary mb-2">Procurar</button>
                                      </form>
    
                                    <table class="table">
                                        
                                        <thead class="thead-light">
                                        <tr>
                                            <th scope="col"> </th>
                                            <th scope="col">Nome</th>
                                            <th scope="col">Anos Empresa</th>
                                            <th scope="col">Função</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row"><img class="photo" src={perfil}/></th>
                                            <td><h6>Tiago Souza</h6> <div><a href="verperfil_gestor.html"><button type="button" class="btn btn-info"><Link to="infopessoal_gestor">Info</Link></button></a></div></td>
                                            <td>5</td>
                                            <td>Gestor de Projeto</td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><img class="photo" src={perfil}/></th>
                                            <td><h6>Tiago Souza</h6> <div><a href="verperfil_gestor.html"><button type="button" class="btn btn-info"><Link to="infopessoal_gestor">Info</Link></button></a></div></td>
                                            <td>3</td>
                                            <td>Gestor de Projeto</td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><img class="photo" src={perfil}/></th>
                                            <td><h6>Tiago Souza</h6> <div><a href="verperfil_gestor.html"><button type="button" class="btn btn-info"><Link to="infopessoal_gestor">Info</Link></button></a></div></td>
                                            <td>2</td>
                                            <td>Gestor de Projeto</td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><img class="photo" src={perfil}/></th>
                                            <td><h6>Tiago Souza</h6> <div><a href="verperfil_gestor.html"><button type="button" class="btn btn-info"><Link to="infopessoal_gestor">Info</Link></button></a></div></td>
                                            <td>1</td>
                                            <td>Gestor de Projeto</td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><img class="photo"src={perfil}/></th>
                                            <td><h6>Tiago Souza</h6> <div><a href="verperfil_gestor.html"><button type="button" class="btn btn-info"><Link to="infopessoal_gestor">Info</Link></button></a></div></td>
                                            <td>7</td>
                                            <td>Gestor de Projeto</td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><img class="photo"src={perfil}/></th>
                                            <td><h6>Tiago Souza</h6> <div><a href="verperfil_gestor.html"><button type="button" class="btn btn-info"><Link to="infopessoal_gestor">Info</Link></button></a></div></td>
                                            <td>3</td>
                                            <td>Gestor de Projeto</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    </div>
                        </div>
    
               
            </div>
      
    

        );
    }
}

export default utilizadores_gestor; 