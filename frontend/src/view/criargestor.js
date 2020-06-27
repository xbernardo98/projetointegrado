import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';


import ver_perfil from './ver_perfil'

import logo from "./imagens/logo.svg";
import user from "./imagens/user.svg";
import boss from "./imagens/icons/boss.svg";



import './css/criargestor.css';
import './css/criacaodeequipa.css';

class criargestor extends React.Component {


    render() {
        return (
            <div class="container-fluid">
        <div class="row">
            
        <nav class="navbar">
                    <a class="navbar-brand" href="home_gestor.html"><Link to="/projetos"><img class="img1" src={logo} /></Link></a>
                    <div class="nav_list">
                        <ul>
                            <li><a href="utilizadores_gestor.html"><Link to="/utilizadores">Utilizadores</Link></a></li>
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
            <div class="row">
            <div class="col-sm-12 col-lg-12 col-md-12 col-xl-12" >
                <div class="card ">
                    <div class="row justify-content-center">
                        <h2 >Criação de um Gestor de Equipas</h2>    
                    </div>

                </div>
            </div>
            
            
                
            
            
                    <div class="conteudo col-sm-5 col-lg-5 col-md-5 col-xl-5">
                        
                            <div class="card">
                                <div class="row" >
                                    <h4>Criação de um Gestor de Equipas</h4>
                                </div>
                                <div class="row">
                                    <div class="col-6 ">
                                        <div class="row justify-content-center ">
                                            <img class="imgboss" src={boss} alt="avatar"/>
                                        </div>
                                        <div class="row justify-content-center">
                                            <p>João Sousa</p>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="row justify-content-center ">
                                            <img class="imgboss" src={boss} alt="avatar" />
                                        </div>
                                        <div class="row justify-content-center">
                                            <p>João Sousa</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-6">
                                        <div class="row justify-content-center ">
                                            <img class="imgboss" src={boss} alt="avatar"/>
                                        </div>
                                        <div class="row justify-content-center">
                                            <p>João Sousa</p>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="row justify-content-center ">
                                            <img class="imgboss" src={boss} alt="avatar" />
                                        </div>
                                        <div class="row justify-content-center">
                                            <p>João Sousa</p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                    </div>


                    <div class="conteudo  col-sm-7 col-lg-7 col-md-7 col-xl-7">
                        <div class="card">
                            <div class="row" >
                                <h4>Descrição Projeto</h4>
                            </div>
                            <div class="row" >
                               <p class="text-justify">Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. 
                                Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                                Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                
                                Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                            </div>
                            
                            
                          </div>
                         
                    </div>
                    

           
        </div>
    </div>
            );
    }
}
export default criargestor; 