import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';


import ver_perfil from './ver_perfil'

import icon from "./imagens/icon.svg";
import logo from "./imagens/logo.svg";
import user from "./imagens/user.svg";
import boss from "./imagens/icons/boss.svg";
import correct from "./imagens/icons/correct.svg";
import Logo from "./imagens/logo.svg";


import './css/infopessoal_gestor.css';

class criaruser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            campName: "",
            campEmail: "",
            campIdade: "",
            campLocalidade: "",
            campDatanascimento: "",
            campdisponibilidade: "",
            camprecomendaçoes: "",
            campgenero: "",
            campanosempresa: "",
            camptipouser: ""


        }
    }
    render() {
        return (

            <div class="container-fluid">
                <div class="row">
                    <nav class="navbar">
                        <Link to="/home_rh"><img class="img1" src={Logo} /></Link>
                        <div class="nav_list">
                            <ul>
                                <li><Link to="/utilizadores_rh">Utilizadores</Link></li>
                                <li><Link to="/projeto_rh">Projetos</Link></li>
                                <li>
                                    <div class="dropdown">
                                        <a class="dropbtn">Nome<img class="user" src={user}/></a>
                                        <div class="dropdown-content">
                                           <Link to="/verperfil_rh">Perfil</Link>
                                            <Link to="/">Terminar Sessão</Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>   
                </div>

                
                <div class=" row col-sm-12 col-lg-12 col-md-12 col-xl-12">
                        <h2>Utilizadores</h2>
                    </div>

                <div>
                <div class="form-row justify-content-center">
                    <div class="form-group col-md-6">
                        <label for="inputPassword4">Nome </label>
                        <input type="text" class="form-control"
                            placeholder="Nome" value={this.state.campName} onChange={(value) =>
                                this.setState({ campName: value.target.value })} />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" class="form-control"
                            placeholder="Email" value={this.state.campEmail} onChange={(value) =>
                                this.setState({ campEmail: value.target.value })} />
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Idade</label>
                        <input type="number" class="form-control"
                            placeholder="Idade" value={this.state.campIdade}
                            onChange={(value) => this.setState({ campIdade: value.target.value })} />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputAddress">genero</label>
                        <input type="text" class="form-control"
                            placeholder="genero" value={this.state.campGenero}
                            onChange={(value) =>
                                this.setState({ campGenero: value.target.value })} />
                    </div>
                </div>

                <div class="form-group">
                    <label for="inputAddress">localidade</label>
                    <input type="text" class="form-control"
                        placeholder="localidade" value={this.state.campLocalidade}
                        onChange={(value) =>
                            this.setState({ campLocalidade: value.target.value })} />
                </div>
                <div class="form-group">
                    <label for="inputAddress">data de nascimento</label>
                    <input type="date" class="form-control"
                        placeholder="data de nascimento" value={this.state.campDatanascimento}
                        onChange={(value) =>
                            this.setState({ campDatanascimento: value.target.value })} />
                </div>
                <div class="form-group">
                    <label for="inputAddress">disponibilidade</label>
                    <input type="text" class="form-control"
                        placeholder="disponibilidade" value={this.state.campdisponibilidade}
                        onChange={(value) =>
                            this.setState({ campdisponibilidade: value.target.value })} />
                </div>
                <div class="form-group">
                    <label for="inputAddress">recomendaçoes</label>
                    <input type="number" class="form-control"
                        placeholder="recomendaçoes" value={this.state.camprecomendaçoes}
                        onChange={(value) =>
                            this.setState({ camprecomendaçoes: value.target.value })} />
                </div>
                <div class="form-group">
                    <label for="inputAddress">anos na empresa</label>
                    <input type="number" class="form-control"
                        placeholder="anos na empresa" value={this.state.campanosempresa}
                        onChange={(value) =>
                            this.setState({ campanosempresa: value.target.value })} />
                </div>
                <div class="form-group">
                    <label for="inputAddress">tipo de utilizador</label>
                    <input type="text" class="form-control"
                        placeholder="tipo de utilizador" value={this.state.camptipouser}
                        onChange={(value) =>
                            this.setState({ camptipouser: value.target.value })} />
                </div>

                <button type="submit" class="btn btn-primary"
                    onClick={() => this.sendSave()}>Save</button>
            </div>
            </div>

        );
    }
    sendSave() {
        if (this.state.campName === "") {
            alert("Insert Name!")
        }
        else if (this.state.campEmail === "") {
            alert("Insert Email!")
        }
        else {
            const baseUrl = "http://localhost:3000/users/user_create"
            const datapost = {
                Nome: this.state.campName,
                Email: this.state.campEmail,
                Localidade: this.state.campLocalidade,
                Genero: this.state.campGenero,
                Idade: this.state.campIdade,
                DataNascimento: this.state.campDatanascimento,
                DisponibilidadeViajar: this.state.campdisponibilidade,
                Recomendacoes: this.state.camprecomendaçoes,
                AnosEmpresa: this.state.campanosempresa,
                TipoUser: this.state.camptipouser

            }
            axios.post(baseUrl, datapost)
                .then(response => {
                    if (response.data.sucess === true) {
                        alert(response.data.message)
                    }
                    else {
                        alert(response.data.message)
                    }
                }).catch(error => {
                    alert("Error 34 " + error)
                })
        }
    }

}
export default criaruser; 