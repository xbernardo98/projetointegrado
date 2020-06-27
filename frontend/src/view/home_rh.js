import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';


import ver_perfil from './ver_perfil'

import icon from "./imagens/icon.svg";
import Logo from "./imagens/logo.svg";
import user from "./imagens/user.svg";
import estatisticas from "./imagens/estatisticas.svg";

import './css/home_rh.css';

class home_rh extends React.Component {


    render() {
        return (
            <div class="container-fluid">

                < div class=" row " >
                   
                        <nav class="navbar">
                            <a class="navbar-brand" href="home_dev.html"><Link to="/projetos"><img class="img1" src={Logo} /></Link></a>
                            <div class="nav_list">
                                <ul>
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
                    </ div >
                    < div class=" row " >

                    <div class="col-sm-8 col-lg-8 col-md-8 col-xl-8">
                        <h2>Projetos em desenvolvimento</h2>
                    </div>

                    <div class="conteudo col-sm-8 col-lg-8 col-md-8 col-xl-8">

                        <div class="card">
                            <a href="projeto_rh.html"><table class="table">

                                <thead class="thead-light">
                                    <tr>
                                        <th scope="col"> </th>
                                        <th scope="col">Nome Projecto</th>
                                        <th scope="col">Data Inicio</th>
                                        <th scope="col">Data Fim</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Criação de um Gestor de Equipas</td>
                                        <td>18/02/2020</td>
                                        <td>02/06/2020</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Criação de um Gestor de Equipas</td>
                                        <td>18/02/2020</td>
                                        <td>02/06/2020</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Criação de um Gestor de Equipas</td>
                                        <td>18/02/2020</td>
                                        <td>02/06/2020</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Criação de um Gestor de Equipas</td>
                                        <td>18/02/2020</td>
                                        <td>02/06/2020</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>Criação de um Gestor de Equipas</td>
                                        <td>18/02/2020</td>
                                        <td>02/06/2020</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">6</th>
                                        <td>Criação de um Gestor de Equipas</td>
                                        <td>18/02/2020</td>
                                        <td>02/06/2020</td>
                                    </tr>
                                </tbody>
                            </table></a>
                        </div>
                    </div>


                    <div class="conteudo  col-sm-4 col-lg-4 col-md-4 col-xl-4">
                        <div class="card">
                            <div class="card-body">
                                <a>
                                    <img class="img3" src={icon} />
                                </a>
                                <h5 class="card-title">22 Março 2020, Domingo</h5>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Gestão de utilizadores</h5>
                                <p class="card-text">Adicionar ou remover utilizadores, ver perfis dos seus trabalhadores e
                            quais as suas skills.</p>
                                <a href="utilizadores_rh.html"><button type="button" class=" alinhar btn btn-success">Ir</button></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-sm-8 col-lg-8 col-md-8 col-xl-8">
                        <h2>Estatisticas</h2>
                    </div>

                    <div class="estatistica col-sm-12 col-lg-12 col-md-12 col-xl-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="row">
                                    <img src={estatisticas} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default home_rh; 