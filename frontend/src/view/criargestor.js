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
                    <Link to="/home_gestor"><img class="img1" src={logo} /></Link>
                    <div class="nav_list">
                        <ul>
                            <li><Link to="/utilizadores_gestor">Utilizadores</Link></li>
                            <li><Link to="/projeto_gestor">Projeto</Link></li>
                            <li><Link to="/criacaodeequipa">Criar Equipa</Link></li>
                            <li>
                                <div class="dropdown" >
                                    <a class="dropbtn">Nome <img class="user" src={user}/></a>
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
                            
                            <div class="row justify-content-center">
                                <button type="submit" onclick="location.href='user.html'" class="btn btn-primary">Criar Gestor</button>
                                
                            </div>
                          </div>
                         
                    </div>
                    
                    
           
        </div>
    </div>
            );
    }
}
export default criargestor; 