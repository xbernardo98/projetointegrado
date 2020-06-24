import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

import perfil from "./imagens/perfil.jpg";
import line from "./imagens/line.svg";
import Logo from "./imagens/logo.svg";
import user from "./imagens/user.svg";

import './css/projeto_dev.css';

const baseUrl = "http://localhost:3000";
class projeto_gestor extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            dataEmployee: {},
            campName: "",
            campEmail: "",
            campPhone: "",
            campAddress: "",
        }
    }
    componentDidMount() {
        let userId = this.props.match.params.employeeId;
        const url = baseUrl + "/users/projetos_detail/" + userId
        axios.get(url)
            .then(res => {
                if (res.data.sucess) {
                    const data = res.data.data[0]
                    this.setState({
                        dataEmployee: data,
                        campName: data.NomeProjeto,
                        campDataInicio: data.DataInicio,
                        campDataFim: data.DataFim,
                        campInfo_Projeto: data.Info_Projeto,
                        campComentario: data.Comentario,
                        campMembro1: data.Membro1,
                        campMembro2: data.Membro2,
                        campMembro3: data.Membro3,
                        campMembro4: data.Membro4
                    })
                }
                else {
                    alert("Error web service")
                }
            })
            .catch(error => {
                alert("Error server: " + error)
            })
    }



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
                <h2>Projetos em desenvolvimento</h2>
            </div>

                    <div class="conteudo col-sm-12 col-lg-12 col-md-12 col-xl-12">

                            <div class="card">
                                
                                <form class="form-inline">

                                    <div class="form-group mx-sm-3 mb-2">
                                      <input type="search" class="form-control" id="inputPassword2" placeholder="Procurar"/>
                                    </div>
                                    <button type="submit" class="btn1 btn-primary mb-2">Procurar</button>
                                  </form>

                                <table class="table">
                                    
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
                                        <td><h6>Criação de um Gestor de Equipas</h6> <div><a href="home_2_gestor.html"><button type="button" class="btn btn-info">Info</button></a></div></td>
                                        <td>18/02/2020</td>
                                        <td>02/06/2020</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td><h6>Criação de um Gestor de Equipas</h6> <div><a href="home_2_gestor.html"><button type="button" class="btn btn-info">Info</button></a></div></td>
                                        <td>18/02/2020</td>
                                        <td>02/06/2020</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td><h6>Criação de um Gestor de Equipas</h6> <div><a href="home_2_gestor.html"><button type="button" class="btn btn-info">Info</button></a></div></td>
                                        <td>18/02/2020</td>
                                        <td>02/06/2020</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td><h6>Criação de um Gestor de Equipas</h6> <div><a href="home_2_gestor.html"><button type="button" class="btn btn-info">Info</button></a></div></td>
                                        <td>18/02/2020</td>
                                        <td>02/06/2020</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td><h6>Criação de um Gestor de Equipas</h6> <div><a href="home_2_gestor.html"><button type="button" class="btn btn-info">Info</button></a></div></td>
                                        <td>18/02/2020</td>
                                        <td>02/06/2020</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">6</th>
                                        <td><h6>Criação de um Gestor de Equipas</h6> <div><a href="home_2_gestor.html"><button type="button" class="btn btn-info">Info</button></a></div></td>
                                        <td>18/02/2020</td>
                                        <td>02/06/2020</td>
                                    </tr>
                                    
                                    </tbody>
                                </table>
                                </div>
                    </div>

           
        </div>
    </div>
        );
    }
}
export default projeto_gestor;