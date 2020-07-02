import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";





import Logo from "./imagens/logo.svg";
import user from "./imagens/user.svg";
import photo from "./imagens/photo.jpg";

import './css/comparar.css';


class comparar extends React.Component {
    render() {
        return (
            <div class="container-fluid">
                <div class="row">
                    <nav class="navbar">
                        <a class="navbar-brand" href="home_gestor.html"><Link to="/home_gestor"><img class="img1" src={Logo} /></Link></a>
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
                                    <a><img class="img2" src={user} /></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <div class="row d-flex justify-content-center">
                    <div class="conteudo col-sm-10 col-lg-10 col-md-10 col-xl-10">
                        <div class="card ">
                            <div class="user1 ">
                                <div class="conteudo_2 d-flex ">

                                    <div class="column  ">
                                        <img class="img_perfil" src={photo} />

                                        <div class="texto">
                                            <h2>Tiago Nunes</h2>
                                            <h3>Developer</h3>
                                            <p>Recomendações 0</p>

                                        </div>
                                        <div class=" conteudo_1 row">
                                            <h5>Soft Skills</h5>
                                            <svg >
                                                <line x1="300" y1="0" />
                                            </svg>
                                            <div class="texto1">
                                                <h6>Trabalho de Equipa</h6>
                                                <h6>Comunicativo</h6>
                                                <h6>Organizado</h6>
                                            </div>
                                        </div>
                                        <div class="  conteudo_1 row">
                                            <h5>Hard Skills</h5>
                                            <svg >
                                                <line x1="300" y1="0" />
                                            </svg>
                                            <div class="texto1">
                                                <h6>Java</h6>
                                                <h6> C++</h6>
                                                <h6> C#</h6>
                                                <h6> HTML/CSS</h6>
                                            </div>
                                        </div>
                                    </div>


                                    <svg class="svg_line" >
                                        <line x1="2" y1="1000" />
                                    </svg>


                                    <div class="column">
                                        <img class="img_perfil" src={photo} />

                                        <div class="texto">
                                            <h2>Tiago Nunes</h2>
                                            <h3>Developer</h3>
                                            <p>Recomendações 0</p>

                                        </div>
                                        <div class="conteudo_1 row">
                                            <h5>Soft Skills</h5>
                                            <svg >
                                                <line x1="300" y1="0" />
                                            </svg>
                                            <div class="texto1">
                                                <h6>Trabalho de Equipa</h6>
                                                <h6>Comunicativo</h6>
                                                <h6>Organizado</h6>
                                            </div>
                                        </div>
                                        <div class=" conteudo_1 row">
                                            <h5>Hard Skills</h5>
                                            <svg >
                                                <line x1="300" y1="0" />
                                            </svg>
                                            <div class="texto1">
                                                <h6>Java</h6>
                                                <h6> C++</h6>
                                                <h6> C#</h6>
                                                <h6> HTML/CSS</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );

    }

}


export default comparar;