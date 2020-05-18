import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ver_perfil from'./ver_perfil'

import perfil from "./imagens/perfil.jpg";
import Logo from "./imagens/logo.svg";
import user from "./imagens/user.svg";

import './css/utilizador.css';

class utilizadorComponent extends React.Component {
    render() {
        return (
            <div class="container-fluid">

                <div class="row">
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
                </div>


            <div class="row">
                <div class="col-sm-12 col-lg-12 col-md-12 col-xl-12">
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
                                            <th scope="row"><img class="photo" src={perfil} /></th>
                                            <td><h6>Tiago Souza</h6> <div><a href="verperfil_dev.html"><button type="button" class="btn btn-info"><Link to="/ver_perfil">Info</Link></button></a></div></td>
                                            <td>5</td>
                                            <td>Gestor de Projeto</td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><img class="photo" src={perfil}  /></th>
                                            <td><h6>Tiago Souza</h6> <div><a href="verperfil_dev.html"><button type="button" class="btn btn-info">Info</button></a></div></td>
                                            <td>3</td>
                                            <td>Gestor de Projeto</td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><img class="photo" src={perfil}  /></th>
                                            <td><h6>Tiago Souza</h6> <div><a href="verperfil_dev.html"><button type="button" class="btn btn-info">Info</button></a></div></td>
                                            <td>2</td>
                                            <td>Gestor de Projeto</td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><img class="photo" src={perfil}  /></th>
                                            <td><h6>Tiago Souza</h6> <div><a href="verperfil_dev.html"><button type="button" class="btn btn-info">Info</button></a></div></td>
                                            <td>1</td>
                                            <td>Gestor de Projeto</td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><img class="photo" src={perfil}  /></th>
                                            <td><h6>Tiago Souza</h6> <div><a href="verperfil_dev.html"><button type="button" class="btn btn-info">Info</button></a></div></td>
                                            <td>7</td>
                                            <td>Gestor de Projeto</td>
                                        </tr>
                                        <tr>
                                            <th scope="row"><img class="photo" src={perfil} /></th>
                                            <td><h6>Tiago Souza</h6> <div><a href="verperfil_dev.html"><button type="button" class="btn btn-info">Info</button></a></div></td>
                                            <td>3</td>
                                            <td>Gestor de Projeto</td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    </div>
                        </div>
                        <div className="container">
					<Route path="/ver_perfil" component={ver_perfil} />
				</div>
            </div>
        </div>
        );
    }
}
export default utilizadorComponent;