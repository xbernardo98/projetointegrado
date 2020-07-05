import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';


import ver_perfil from './ver_perfil'

import perfil from "./imagens/perfil.jpg";
import Logo from "./imagens/logo.svg";
import user from "./imagens/user.svg";
import line from "./imagens/line.svg";
import photo from "./imagens/photo.jpg";

import './css/home_2_gestor.css';


class home_2_gestor extends React.Component {
    render() {
        return (
            <div class="container-fluid">
            <div class="row">
             
                    <nav class="navbar">
                        <Link to="/home_gestor"><img class="img1" src={Logo} /></Link>
                        <div class="nav_list">
                            <ul>
                                <li><Link to="/utilizadores_gestor">Utilizadores</Link></li>
                                <li><Link to="/projeto_gestor">Projeto</Link></li>
                                <li>
                                    <div class="dropdown" >
                                        <a class="dropbtn">Nome<img class="user" src={user}/></a>
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
                        <div class="conteudo col-sm-12 col-lg-12 col-md-12 col-xl-12">
                            
                                <div class="card">
                                    <div class="title">
                                        <h2>Criação de um Gestor de Equipas</h2>
                                    </div>
                                    
                                </div>
                        </div>
    
                        <div class="conteudo col-sm-12 col-lg-6 col-md-12 col-xl-6">
                            
                            <div class="card">
                                <div class="conteudo_1">
                                    <img class="line" src={line} />
                                    <h5>Membros da Equipa</h5>
                                    <svg width="400">
                                        <line x1="400" y1="0"   />
                                    </svg>
                                </div>
                                <div class="conteudo_2">
                                    <div class="column">
                                        <img class="img_perfil" src={photo}/>
                                        <p>João Souza</p>
                                      </div>
                                      <div class="column">
                                        <img class="img_perfil" src={perfil}/>
                                        <p>João Souza</p>
                                      </div>
                                </div>
                                <div class="conteudo_2">
                                    <div class="column">
                                        <img class="img_perfil" src={perfil}  />
                                        <p>João Souza</p>
                                      </div>
                                      <div class="column">
                                        <img class="img_perfil" src={photo}  />
                                        <p>João Souza</p>
                                      </div>
                                </div>
    
                                
                            </div>
                    </div>
    
                    <div class="conteudo col-sm-12 col-lg-6 col-md-12 col-xl-6">
                            
                        <div class="card">
                            <div class="conteudo_1">
                                <h5>Descrição Projeto</h5>
                                <svg width="400">
                                    <line x1="400" y1="0" />
                                </svg>
                                <div class="text">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitor iaculis molestie. In viverra id justo quis mattis. Etiam felis nisi, placerat ut mi eu, euismod convallis dolor. Cras mollis, risus nec eleifend ornare, lorem purus scelerisque nunc, sed congue arcu elit ac turpis. Cras id nunc tristique, pulvinar elit sit amet, dignissim erat. Nulla nunc nulla, vestibulum ut cursus sit amet, aliquam et nisl. Proin tempus erat eget libero vulputate rhoncus. Aliquam nec pharetra risus. Duis egestas nunc lectus, eu aliquet tellus imperdiet ut. Aliquam bibendum mi interdum feugiat vestibulum. Fusce vel consectetur lacus, eget accumsan urna. Integer ac urna et ante rutrum mollis.
    
                                    Ut lectus dolor, maximus vel sapien et, hendrerit laoreet velit. Aliquam iaculis cursus mi sed iaculis. Nunc commodo dui lectus, eget cursus mauris dapibus quis. Nulla sagittis nisi nec felis imperdiet dictum. Mauris semper turpis augue, quis efficitur ipsum congue sit amet. Nunc bibendum luctus sem, id euismod lacus accumsan vitae. Proin dapibus sapien mi, quis fermentum sem faucibus ac. Pellentesque vitae orci id mi lacinia auctor ac at mi.
                                    </p>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            </div>

        )
    }
}
export default home_2_gestor; 