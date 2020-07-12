import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import projetos_info from './projetos_info'
import axios from 'axios';

import icon from "./imagens/icon.svg";
import Logo from "./imagens/logo.svg";
import user from "./imagens/user.svg";


import './css/projetos.css';
import '../App.css';
class home extends React.Component {

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
                    <div class="col-sm-12 col-lg-12 col-md-12 col-xl-12">
                        <h2>Projetos em desenvolvimento</h2>
                    </div>
                    <div class="conteudo col-sm-8 col-lg-8 col-md-8 col-xl-8">

                        <div class="card">
                            <a href="projeto_dev.html">
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
                                <h5 class="card-title">Veja o projeto que está a trabalhar</h5>
                                <p class="card-text">Veja informação sobre os seus colegas de equipa e o projeto que estão a desenvolver.</p>
                                <a href="home_2_dev.html"><button type="button" class="tam alinhar btn btn-success"><Link to="/projetos_info">Ir</Link></button></a>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <Route path="/projetos_info" component={projetos_info} />
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
export default home;