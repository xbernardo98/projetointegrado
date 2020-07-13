import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import infopessoal_dev from './info_pessoal_dev'
import axios from 'axios';

import logo from './imagens/logo.svg'
import boss from "./imagens/icons/boss.svg";
import correct from "./imagens/icons/correct.svg";
import Logo from "./imagens/logo.svg";
import user from "./imagens/user.svg";
import './css/editar_info_pessoal_dev.css';


const baseUrl = "https://projetointegrado-outcode.herokuapp.com";

class editar_info_pessoal_dev extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataEmployee: {},
            campName: "",
            campEmail: "",
            campPhone: "",
            campAddress: "",
            stringRole: "",
            selectRole: 0
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
                        <h2>Informação Pessoal</h2>
                    </div>

                    <div class="conteudo col-sm-12 col-lg-12 col-md-12 col-xl-12">

                        <div class="card ">
                            <div class="row justify-content-center">
                                <div class="col-3  ">
                                    <div class="row ">
                                        <div class="col-4"><img src={boss} alt="avatar" /></div>
                                        <div class="col-8">
                                            <div class="form-group ">
                                                <label for="inputPassword4">Nome</label>
                                                <input type="text" class="form-control" placeholder="Nome"
                                                    value={this.state.campName} onChange={(value) =>
                                                        this.setState({ campName: value.target.value })} />
                                            </div>

                                            <div class="form-group ">
                                                <label for="inputPassword4">Tipo de user</label>
                                                <input type="number" class="form-control" placeholder="tipo de user"
                                                    value={this.state.campTipoUser} onChange={(value) =>
                                                        this.setState({ campTipoUser: value.target.value })} />
                                            </div>

                                            <div class="form-group ">
                                                <label for="inputPassword4">Genero</label>
                                                <input type="text" class="form-control" placeholder="Genero"
                                                    value={this.state.campGenero} onChange={(value) =>
                                                        this.setState({ campGenero: value.target.value })} />
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div class="col-3  ">
                                    <div class="row">

                                        <div class="form-group ">
                                            <label for="inputPassword4">Email</label>
                                            <input type="text" class="form-control" placeholder="Email"
                                                value={this.state.campEmail} onChange={(value) =>
                                                    this.setState({ campEmail: value.target.value })} />
                                        </div>

                                        <div class="form-group ">
                                            <label for="inputPassword4">Telemovel</label>
                                            <input type="number" class="form-control" placeholder="Telemovel"
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
                                <div class="col-3  ">
                                    <div class="row">

                                        <div class="form-group ">
                                            <label for="inputPassword4">Data de Nascimento</label>
                                            <input type="date" class="form-control" placeholder="Data de nascimento"
                                                value={this.state.campDataNascimento} onChange={(value) =>
                                                    this.setState({ campDataNascimento: value.target.value })} />
                                        </div>
                                        <div class="form-group ">
                                            <label for="inputPassword4">Idiomas</label>
                                            <input type="text" class="form-control" placeholder="Idiomas"
                                                value={this.state.camplinguas} onChange={(value) =>
                                                    this.setState({ camplinguas: value.target.value })} />
                                        </div>

                                        <div class="form-group ">
                                            <label for="inputPassword4">Recomendacoes</label>
                                            <input type="number" class="form-control" placeholder="Recomendacoes"
                                                value={this.state.campRecomendacoes} onChange={(value) =>
                                                    this.setState({ campRecomendacoes: value.target.value })} />
                                        </div>
                                    </div>

                                </div>
                                <div class="col-3  ">
                                    <div class="row">

                                    <div class="form-group ">
                                            <label for="inputPassword4">Disponibilidade para Viajar</label>
                                            <input type="text" class="form-control" placeholder="Disponibilidade para viajar"
                                                value={this.state.campDisponibilidadeViajar} onChange={(value) =>
                                                    this.setState({ campDisponibilidadeViajar: value.target.value })} />
                                        </div>

                                    </div>

                                </div>
                            </div>



                        </div>

                        <div class="row">
                            <div class="col-6" >
                                <div class="card">
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
                                <div class="card">
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




                        <div class="card">
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
                        <button type="submit" class="btn btn-primary" onClick={()=>this.sendUpdate()}>Guardar</button>
                            <button type="button" onclick="location.href='infopessoal_dev.html'" class="btn btn-primary"><Link to="/info_pessoal_dev">Cancelar</Link></button>
                        </div>



                    </div>


                </div>
            </div>

        );
    }

    sendUpdate(){
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
        axios.post(url,datapost)
        .then(response=>{
        if (response.data.sucess===true) {
        alert(response.data.message)
        }
        else {
        alert("Error")
        }
        }).catch(error=>{
        alert("Error 34 "+error)
        })
        }
}
export default editar_info_pessoal_dev;