import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from './imagens/logo.svg'
import boss from "./imagens/icons/boss.svg";
import correct from "./imagens/icons/correct.svg";
import axios from 'axios';

import user from "./imagens/user.svg";


import './css/infopessoal_gestor.css';
import editar_info_pessoal_dev from './editar_info_pessoal_dev';
const baseUrl = "https://projetointegrado-outcode.herokuapp.com";
class infopessoal_gestor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataEmployee: {},
            campName: "",
            campEmail: "",
            campPhone: "",
            campAddress: ""
        }
    }

    componentDidMount() {
        let userId = this.props.match.params.employeeId;
        const url = baseUrl + "/users/user_detail/" + sessionStorage.getItem('id')
        axios.get(url)
            .then(res => {
                if (res.data.sucess) {
                    const data = res.data.data[0]
                    this.setState({
                        dataEmployee: data,
                        campName: data.nome,
                        campIdade: data.idade,
                        campLocalidade: data.localidade,
                        campEmail: data.email,
                        campDataNascimento: data.datanascimento,
                        campDisponibilidadeViajar: data.disponibilidadeviajar,
                        campRecomendacoes: data.recomendacoes,
                        campGenero: data.genero,
                        campAnosEmpresa: data.anosempresa,
                        campTipoUser: data.tipo,
                        camptelemovel: data.telemovel,
                        camplinguas: data.linguas,
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
                    <div class="col-sm-12 col-lg-12 col-md-12 col-xl-12">
                        <h2>Informação Pessoal</h2>
                    </div>
                    <div class="conteudo col-sm-12 col-lg-12 col-md-12 col-xl-12">

                        <div class="card">
                            <div class="row justify-content-center">
                                <div class="col-3  ">
                                    <div class="row ">
                                        <div class="col-4"><img class="imgavatar" src={boss} alt="avatar" /></div>
                                        <div class="col-8">
                                            <h4>{this.state.campName}</h4>
                                            <h5>{this.state.campTipoUser}</h5>
                                            <h6>{this.state.campGenero}</h6></div>
                                    </div>
                                </div>
                                <div class="col-3  ">
                                    <div class="row">
                                        <div class="col-3">
                                            <p>E-mail:</p>
                                        </div>
                                        <div class="col-9"><b>{this.state.campEmail}</b></div>
                                        <div class="col-3">
                                            <p>Telemóvel:</p>
                                        </div>
                                        <div class="col-9"><b>{this.state.camptelemovel}</b></div>
                                        <div class="col-3">
                                            <p>Localidade:</p>
                                        </div>
                                        <div class="col-9"><b>{this.state.campLocalidade}</b></div>
                                    </div>
                                </div>
                                <div class="col-3  ">
                                    <div class="row">
                                        <div class="col-5">
                                            <p>Nascimento:</p>
                                        </div>
                                        <div class="col-7"><b>{this.state.campDataNascimento}</b></div>
                                        <div class="col-5">
                                            <p>Idiomas:</p>
                                        </div>
                                        <div class="col-7"><b>{this.state.camplinguas}</b></div>
                                        <div class="col-5">
                                            <p>Recomendações:</p>
                                        </div>
                                        <div class="col-7"><b>{this.state.campRecomendacoes}</b></div>
                                    </div>
                                </div>
                                <div class="col-3  ">
                                    <div class="row">

                                        <div class="col-6">
                                            <p>Disponibilidade para viajar:</p>
                                        </div>
                                        <div class="col-6"><b>{this.state.campDisponibilidadeViajar}</b></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-6" >
                                <div class="card">
                                    <div class="row">

                                        <img class="img1" class="imglogo" src={logo} />

                                        <h4>Hard Skills</h4>

                                    </div>
                                    <div class="row">
                                        <div><span class="badge badge-pill badge-secondary">Java</span></div>
                                        <div><span class="badge badge-pill badge-secondary">HTML</span></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="card">
                                    <div class="row">
                                        <img class="imglogo" src={logo} />
                                        <h4>Soft Skills</h4>
                                    </div>

                                    <div class="row" >

                                        <div ><span class="badge badge-pill badge-secondary">Trabalho de Equipa</span></div>
                                        <div><span class="badge badge-pill badge-secondary">Comunicativo</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="row">
                                <h4>Certificados</h4>
                            </div>
                            <div class="row">
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
                                            <td>Criação de um Gestor de Equipas </td>
                                            <td>18/02/2020</td>
                                            <td>02/06/2020</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Criação de um Gestor de Equipas </td>
                                            <td>18/02/2020</td>
                                            <td>02/06/2020</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Criação de um Gestor de Equipas </td>
                                            <td>18/02/2020</td>
                                            <td>02/06/2020</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>

                        </div>
                        <div class="row justify-content-center">
                                <button type="submit" onclick="location.href='user.html'" class="btn btn-primary"><Link to="/editarinfopessoal_gestor">Editar</Link></button>
                                <button type="button" onclick="location.href='user.html'" class="btn btn-light">Cancelar</button>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default infopessoal_gestor; 