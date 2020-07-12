import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';


import ver_perfil from './ver_perfil'

import perfil from "./imagens/perfil.jpg";
import Logo from "./imagens/logo.svg";
import user from "./imagens/user.svg";

import './css/utilizador.css';

class utilizadorComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            listEmployee: []
        }
    }
    componentDidMount() {
        const url = "http://localhost:3000/users/users_list";
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
                        <h2>Utilizadores</h2>
                    </div>

                    <div class="conteudo col-sm-12 col-lg-12 col-md-12 col-xl-12">

                        <div class="card">

                            <form class="form-inline">

                                <div class="form-group mx-sm-3 mb-2">
                                    <input type="password" class="form-control" id="inputPassword2" placeholder="Procurar" />
                                </div>
                                <button type="submit" class="btn1 btn-primary mb-2">Procurar</button>
                            </form>

                            <table class="table">

                                <thead class="thead-light">
                                    <tr>
                                        <th scope="col"> </th>
                                        <th scope="col">Nome</th>
                                        <th scope="col">info</th>
                                        <th scope="col">Anos Empresa</th>
                                        <th scope="col">Função</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.loadFillData()}

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="container">
                        <Route path="/ver_perfil" component={ver_perfil} />
                    </div>
                </div>
            </div>
        );
    }

    loadFillData() {
        return this.state.listEmployee.map((data, index) => {
            return (
                <tr>
                    <th scope="row"><img class="photo" src={perfil} /></th>
                    <td>{data.nome} <div><a href="verperfil_dev.html"></a></div></td>
                    <td><button type="button" class="btn btn-info"><Link to={"/ver_perfil/" + data.id_user} >Info</Link></button></td>
                    <td>{data.anosempresa}</td>
                    <td>{data.tipo}</td>
                </tr>
            )
        });
    }
}
export default utilizadorComponent;