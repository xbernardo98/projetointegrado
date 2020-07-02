import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';


import ver_perfil from './ver_perfil'

import perfil from "./imagens/perfil.jpg";
import logo from "./imagens/logo.svg";
import user from "./imagens/user.svg";
import icon from "./imagens/icon.svg";
import photo from "./imagens/photo.jpg";

import './css/home_dev.css';


class home_gestor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            listEmployee: []
        }
    }
    componentDidMount() {
        const url = "http://localhost:3000/users/projetos_list";
        axios.get(url)
            .then(res => {
                if (res.data.sucess) {
                    const data = res.data.data;
                    this.setState({ listEmployee: data });
                } else {
                    alert("Error Web Service!");
                }
            })
            .catch(error => {
                alert(error);
            });
    }

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
            <div class="row">
            <div class="col-sm-8 col-lg-8 col-md-8 col-xl-8">
                <h2>Projetos em desenvolvimento</h2>
            </div>

                    <div class="conteudo col-sm-8 col-lg-8 col-md-8 col-xl-8">
                        
                            <div class="card">
                                <a href="projeto_gestor.html"><Link to="/projeto_gestor"><table class="table">
                                    
                                    <thead class="thead-light">
                                    <tr>
                                        <th scope="col"> </th>
                                        <th scope="col">Nome Projecto</th>
                                        <th scope="col">Data Inicio</th>
                                        <th scope="col">Data Fim</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {this.loadFillData()}
                                    </tbody>
                                </table></Link></a>
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
                              <h5 class="card-title">Crie um novo projeto</h5>
                              <p class="card-text">Utilize a ferramenta de criação de equipas para criar um novo projeto, escolha as skills que procura e será criada uma equipa automaticamente.
                              </p>
                              <a href="criacaodeequipa.html"><button type="button" class="alinhar btn btn-success"><Link to="/criacaodeequipa">Ir</Link></button></a>
                            </div>
                          </div>
                    </div>

           
        </div>
    </div>

            )
        }
        loadFillData() {
            return this.state.listEmployee.map((data, index) => {
                return (
                    <tr>
                    <th scope="row">{data.ID_Projeto}</th>
                <td>{data.NomeProjeto}</td>
                    <td>{data.DataInicio}</td>
                    <td>{data.DataFim}</td>
                </tr>
                )
            });
        }
    }
    export default home_gestor; 