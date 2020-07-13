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

    constructor(props) {
        super(props);
        this.state = {
            listEmployee: []
        }
    }
    componentDidMount() {
        const url = "https://projetointegrado-outcode.herokuapp.com/users/projetos_list";
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
                                    {this.loadFillData()}
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
                                <h5 class="card-title data">22 Março 2020, Domingo</h5>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">Gestão de utilizadores</h5>
                                <p class="card-text">Adicionar ou remover utilizadores, ver perfis dos seus trabalhadores e
                            quais as suas skills.</p>
                                <Link to="/utilizadores_rh"><button type="button" class="tam alinhar btn btn-success">Ir</button></Link>
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
export default home_rh; 