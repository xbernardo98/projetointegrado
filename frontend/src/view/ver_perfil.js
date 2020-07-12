import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';



import logo from './imagens/logo.svg'
import boss from "./imagens/icons/boss.svg";
import correct from "./imagens/icons/correct.svg";
import Logo from "./imagens/logo.svg";
import user from "./imagens/user.svg";


import './css/ver_perfil.css';

const baseUrl = "http://localhost:3000";
class ver_perfil extends React.Component {

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
        const url = baseUrl + "/users/user_detail/" + userId
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
                    {/* titulo*/}
                    <div class="col-sm-12 col-lg-12 col-md-12 col-xl-12">
                        <h2>Informação Pessoal</h2>
                    </div>
                    {/* titulo*/}

                    <div class="conteudo col-sm-12 col-lg-12 col-md-12 col-xl-12">
                        <div>
                            {/* card_1*/}
                            <div class="card ">
                                <div class="row justify-content-center">
                                    {/* coluna_1*/}
                                    <div class="col-3  ">
                                        <div class="row ">
                                            <div class="col-4"><img src={boss} alt="avatar" height="100" width="100" /></div>
                                            <div class="col-8">
                                                <h4>{this.state.campName} </h4>
                                                <h3 >{this.state.campTipoUser}</h3>
                                                <h6 >{this.state.campGenero}</h6>

                                            </div>

                                        </div>
                                    </div>
                                    {/* coluna_1*/}

                                    {/* coluna_2*/}
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
                                    {/* coluna_2*/}

                                    {/* coluna_3*/}
                                    <div class="col-3  ">
                                        <div class="row">

                                            <div class="col-5">
                                                <p>Nascimento:</p>
                                            </div>
                                            <div class="col-7"><b>{this.state.campDataNascimento}</b></div>
                                            <div class="col-5">
                                                <p>Idiomas:</p>
                                            </div>
                                            <div class="col-7"><b>{this.state.camplinguas} </b></div>
                                            <div class="col-5">
                                                <p>Recomendações:</p>
                                            </div>
                                            <div class="col-7"><b>{this.state.campRecomendacoes}</b></div>
                                        </div>

                                    </div>
                                    {/* coluna_3*/}

                                    {/* coluna_4*/}
                                    <div class="col-3  ">
                                        <div class="row">

                                            <div class="col-6">
                                                <p>Disponibilidade para viajar:</p>
                                            </div>
                                            <div class="col-7"><b>{this.state.campDisponibilidadeViajar}</b></div>

                                        </div>

                                    </div>
                                    {/* coluna_4*/}
                                </div>



                            </div>
                            {/* card_1*/}

                            {/* card2*/}
                            <div class="row">
                                <div class="col-6">
                                    <div class="card">
                                        <div class="row">
                                            <img class="img_logo" src={logo} />
                                            <h5>Hard Skills</h5>
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
                                            <img class="img_logo" src={logo} />
                                            <h5>Soft Skills</h5>

                                        </div>

                                        <div class="row">
                                            <div><span class="badge badge-pill badge-secondary">Trabalho de Equipa</span></div>
                                            <div><span class="badge badge-pill badge-secondary">Comunicativo</span></div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            {/* card2*/}

                            {/* card3*/}
                            <div class="card">
                                <div class="row">
                                    <h4>Histórico de Projetos</h4>
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
                                                <td>
                                                   Criação de um Gestor de Equipas
                                                </td>
                                                <td>18/02/2020</td>
                                                <td>02/06/2020</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>
                                                    Criação de um Gestor de Equipas
                                                </td>
                                                <td>18/02/2020</td>
                                                <td>02/06/2020</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>
                                                    Criação de um Gestor de Equipas
                                                </td>
                                                <td>18/02/2020</td>
                                                <td>02/06/2020</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            {/* card3*/}

                            {/* card4*/}
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
                                                <td>
                                                    Criação de um Gestor de Equipas
                                                </td>
                                                <td>18/02/2020</td>
                                                <td>02/06/2020</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>
                                                    Criação de um Gestor de Equipas
                                                </td>
                                                <td>18/02/2020</td>
                                                <td>02/06/2020</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>
                                                    Criação de um Gestor de Equipas
                                                </td>
                                                <td>18/02/2020</td>
                                                <td>02/06/2020</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>

                            </div>
                            {/* card4*/}


                        </div>


                    </div>
                </div>
            </div>
        );
    }
}
export default ver_perfil;