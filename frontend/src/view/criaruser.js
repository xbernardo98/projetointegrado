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
            camptipouser: "",
            camptelemovel: "",
            camplinguas:"",
            camppass:""


        }
    }
    render() {
        return (

            <div class="container-fluid">
                <div class=" row col-sm-12 col-lg-12 col-md-12 col-xl-12">
                    <h2>Criar Utilizadores</h2>
                </div>

                <div>
                    <div class="conteudo col-sm-12 col-lg-12 col-md-12 col-xl-12">

                        <div class="card ">
                            <div class="row justify-content-center">
                                <div class="col-3  ">
                                    <div class="row ">
                                        <div class="col-4"><img src={boss} alt="avatar" height="100" width="100" /></div>
                                        <div class="col-8">
                                            <div class="form-group">
                                                <label for="inputPassword4">Nome:</label>
                                                <input type="text" class="form-control"
                                                    placeholder="Nome" value={this.state.campName} onChange={(value) =>
                                                        this.setState({ campName: value.target.value })} />
                                            </div>


                                            <div class="form-group">
                                                <label for="inputAddress">tipo de utilizador:</label>
                                                <input type="text" class="form-control"
                                                    placeholder="tipo de utilizador" value={this.state.camptipouser}
                                                    onChange={(value) =>
                                                        this.setState({ camptipouser: value.target.value })} />
                                            </div>


                                            <div class="form-group">
                                                <label for="inputAddress">genero:</label>
                                                <input type="text" class="form-control"
                                                    placeholder="genero" value={this.state.campGenero}
                                                    onChange={(value) =>
                                                        this.setState({ campGenero: value.target.value })} />
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div class="col-3  ">
                                    <div class="row">

                                        <div class="col-9">
                                            <div class="form-group">
                                                <label for="inputEmail4">Email:</label>
                                                <input type="email" class="form-control"
                                                    placeholder="Email" value={this.state.campEmail} onChange={(value) =>
                                                        this.setState({ campEmail: value.target.value })} />
                                            </div>

                                            <div class="form-group">
                                                <label for="inputAddress">Telemovel:</label>
                                                <input type="text" class="form-control"
                                                    placeholder="localidade" value={this.state.camptelemovel}
                                                    onChange={(value) =>
                                                        this.setState({ camptelemovel: value.target.value })}  />
                                            </div>

                                            <div class="form-group">
                                                <label for="inputAddress">localidade:</label>
                                                <input type="text" class="form-control"
                                                    placeholder="localidade" value={this.state.campLocalidade}
                                                    onChange={(value) =>
                                                        this.setState({ campLocalidade: value.target.value })} />
                                            </div>


                                        </div>
                                    </div>

                                </div>
                                <div class="col-3  ">
                                    <div class="row">

                                        <div class="form-group">
                                            <label for="inputAddress">data de nascimento:</label>
                                            <input type="date" class="form-control"
                                                placeholder="data de nascimento" value={this.state.campDatanascimento}
                                                onChange={(value) =>
                                                    this.setState({ campDatanascimento: value.target.value })} />
                                        </div>


                                        <div class="form-group">
                                            <label for="inputAddress">Idiomas:</label>
                                            <input type="text" class="form-control"
                                                placeholder="idiomas" value={this.state.camplinguas}
                                                onChange={(value) =>
                                                    this.setState({ camplinguas: value.target.value })}  />
                                        </div>

                                        <div class="form-group">
                                            <label for="inputAddress">recomendaçoes:</label>
                                            <input type="number" class="form-control"
                                                placeholder="recomendaçoes" value={this.state.camprecomendaçoes}
                                                onChange={(value) =>
                                                    this.setState({ camprecomendaçoes: value.target.value })} />
                                        </div>

                                    </div>

                                </div>
                                <div class="col-3  ">
                                    <div class="row">
                                        <div class="form-group">
                                            <label for="inputAddress">disponibilidade de Viajar:</label>
                                            <input type="text" class="form-control"
                                                placeholder="disponibilidade" value={this.state.campdisponibilidade}
                                                onChange={(value) =>
                                                    this.setState({ campdisponibilidade: value.target.value })} />
                                        </div>

                                        <div class="form-group">
                                            <label for="inputEmail4">Idade:</label>
                                            <input type="number" class="form-control"
                                                placeholder="Idade" value={this.state.campIdade}
                                                onChange={(value) => this.setState({ campIdade: value.target.value })} />
                                        </div>

                                        <div class="form-group">
                                            <label for="inputAddress">anos na empresa:</label>
                                            <input type="number" class="form-control"
                                                placeholder="anos na empresa" value={this.state.campanosempresa}
                                                onChange={(value) =>
                                                    this.setState({ campanosempresa: value.target.value })} />
                                        </div>
                                        <div class="form-group">
                                            <label for="inputAddress">password:</label>
                                            <input type="number" class="form-control"
                                                placeholder="password" value={this.state.camppass}
                                                onChange={(value) =>
                                                    this.setState({ camppass: value.target.value })} />
                                        </div>
                                    </div>

                                </div>
                            </div>



                        </div>

                        <div class="row">
                            <div class="col-6" >
                                <div class="card_1">
                                    <div class="row">

                                        <img class="img_logo" src={logo} />

                                        <h4>Hard Skills</h4>

                                    </div>
                                    <div class="row">
                                        <form class="form-inline" >

                                            <div class="form-group  mb-2">
                                                <input type="text" class="form-control" id="Hardskills" placeholder="Adicionar" />
                                            </div>
                                            <button type="submit" class="btn1 btn-primary mb-2">Adicionar</button>
                                        </form>
                                    </div>

                                    <div class="row">
                                        <div><span class="badge badge-pill badge-secondary">Java</span></div>
                                        <div><span class="badge badge-pill badge-secondary">HTML</span></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="card_1">
                                    <div class="row">

                                        <img class="img_logo" src={logo} />

                                        <h4>Soft Skills</h4>

                                    </div>
                                    <div class="row">
                                        <form class="form-inline" >

                                            <div class="form-group mb-2">
                                                <input type="text" class="form-control" id="Hardskills" placeholder="Adicionar" />
                                            </div>
                                            <button type="submit" class="btn1 btn-primary mb-2">Adicionar</button>
                                        </form>
                                    </div>
                                    <div class="row" >

                                        <div ><span class="badge badge-pill badge-secondary">Trabalho de Equipa</span></div>
                                        <div><span class="badge badge-pill badge-secondary">Comunicativo</span></div>
                                    </div>

                                </div>
                            </div>
                        </div>




                        <div class="card_1">
                            <div class="row">
                                <h4>Certificados</h4>
                            </div>
                            <div class="row">
                                <form></form>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="exampleFormControlTextarea1">Descrição</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                    </div>
                                </div>
                                <div class="col-6">
                                    <div class="form-group">
                                        <label for="exampleFormControlFile1">Descrição...</label>
                                        <input type="file" class="form-control-file" id="exampleFormControlFile1" />
                                    </div>
                                </div>

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
                                            <td><h6>Criação de um Gestor de Equipas</h6> </td>
                                            <td>18/02/2020</td>
                                            <td>02/06/2020</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td><h6>Criação de um Gestor de Equipas</h6> </td>
                                            <td>18/02/2020</td>
                                            <td>02/06/2020</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td><h6>Criação de um Gestor de Equipas</h6> </td>
                                            <td>18/02/2020</td>
                                            <td>02/06/2020</td>
                                        </tr>

                                    </tbody>
                                </table>

                            </div>

                        </div>


                        <div class="row justify-content-center">
                            <button type="submit" class="btn btn-primary"
                                onClick={() => this.sendSave()}>Guardar</button>
                        </div>


                    </div>


                </div>
                {/* coluna_2
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
                */}

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
                linguas: this.state.camplinguas,
                pass: this.state.camppass

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