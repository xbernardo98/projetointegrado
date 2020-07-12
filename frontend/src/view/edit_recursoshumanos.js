import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';


import ver_perfil from './ver_perfil'

import perfil from "./imagens/perfil.jpg";
import Logo from "./imagens/logo.svg";
import user from "./imagens/user.svg";
import boss from "./imagens/icons/boss.svg";

import './css/projeto_dev.css';

const baseUrl = "http://localhost:3000";
class edit_recursoshumanosComponent extends React.Component {

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
                        <h2>Perfil Recursos Humanos</h2>
                    </div>

                    <div class="conteudo col-sm-12 col-lg-12 col-md-12 col-xl-12">
                        <div class="row">
                            <div class="conteudo col-sm-4 col-lg-4 col-md-4 col-xl-4"></div>
                            <div class="conteudo col-sm-4 col-lg-4 col-md-4 col-xl-4">
                                <div class="card ">
                                    <form>
                                        <div class="d-flex justify-content-center">

                                            <img src={boss} class="boss" alt="avatar" />

                                            <div class="flex-column">
                                                <div class="form-group ">
                                                    <label for="inputPassword4">Nome</label>
                                                    <input type="text" class="form-control" placeholder="Nome"
                                                        value={this.state.campName} onChange={(value) =>
                                                            this.setState({ campName: value.target.value })} />
                                                </div>

                                                <div class="form-group ">
                                                    <label for="inputPassword4">Tipo de User</label>
                                                    <input type="number" class="form-control" placeholder="Tipo de User"
                                                        value={this.state.campTipoUser} onChange={(value) =>
                                                            this.setState({ campTipoUser: value.target.value })} />
                                                </div>

                                                <div class="form-group ">
                                                        <label for="inputPassword4">Email</label>
                                                        <input type="text" class="form-control" placeholder="Email"
                                                            value={this.state.campEmail} onChange={(value) =>
                                                                this.setState({ campEmail: value.target.value })} />
                                                    </div>




                                                    <div class="form-group ">
                                                        <label for="inputPassword4">Telemovel</label>
                                                        <input type="text" class="form-control" placeholder="Telemovel"
                                                            value={this.state.camptelemovel} onChange={(value) =>
                                                                this.setState({ camptelemovel: value.target.value })} />
                                                    </div>


                                                    <div class="form-group ">
                                                        <label for="inputPassword4">Localidade</label>
                                                        <input type="text" class="form-control" placeholder="Localidade"
                                                            value={this.state.campLocalidade} onChange={(value) =>
                                                                this.setState({ campLocalidade: value.target.value })} />
                                                    </div>
                                            </div>
                                        </div>

                                        

                                        

                                        <div class="row justify-content-center">
                                            <a href="editar.html"><button type="submit" class="btn btn-primary" onClick={() => this.sendUpdate()}>Guardar</button></a>
                                            <a href="home_rh.html"><button type="button" class="btn btn-light">Voltar</button></a>
                                        </div>


                                    </form>

                                </div>
                            </div>
                            <div class="conteudo col-sm-4 col-lg-4 col-md-4 col-xl-4"></div>

                        </div>

                    </div>
                    <div className="container">
                        <Route path="/ver_perfil" component={ver_perfil} />
                    </div>
                </div>
            </div >
        );
    }

    sendUpdate() {
        // get parameter id
        let userId = this.props.match.params.employeeId;
        // url de backend
        const url = baseUrl + "/users/user_update/" + sessionStorage.getItem('id')
        // parametros de datos post
        const datapost = {
            nome: this.state.campName,
            email: this.state.campEmail,
            localidade: this.state.campLocalidade,
            genero: this.state.campGenero,
            idade: this.state.campIdade,
            datanascimento: this.state.campDatanascimento,
            disponibilidadeviajar: this.state.campdisponibilidade,
            recomendacoes: this.state.camprecomendaçoes,
            anosempresa: this.state.campanosempresa,
            tipo: this.state.camptipouser,
            telemovel: this.state.camptelemovel,
            linguas: this.state.camplinguas
        }
        axios.post(url, datapost)
            .then(response => {
                if (response.data.sucess === true) {
                    alert(response.data.message)
                }
                else {
                    alert("Error")
                }
            }).catch(error => {
                alert("Error 34 " + error)
            })
    }
}
export default edit_recursoshumanosComponent;