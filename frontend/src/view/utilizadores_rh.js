import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

import projetos_info from './projetos_info'

import perfil from "./imagens/perfil.jpg";
import Logo from "./imagens/logo.svg";
import user from "./imagens/user.svg";
import line from "./imagens/line.svg";
import photo from "./imagens/photo.jpg";
import './css/utilizadores.css';
class utilizadores_rh extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            listEmployee: []
        }
    }
    componentDidMount() {
        const url = "https://projetointegrado-outcode.herokuapp.com/users/users_list";
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
                <div class=" row col-sm-12 col-lg-12 col-md-12 col-xl-12">
                    <h2>Utilizadores</h2>
                </div>

                <div class=" col-sm-12 col-lg-12 col-md-12 col-xl-12">

                    <div class="row card ">

                        <form class="form-inline">

                            <div class="form-group mx-sm-3 mb-2">
                            <input type="text" class="form-control" id="inputPassword2" placeholder="Procurar" />
                            </div>
                            <button type="submit" class="btn1 btn-primary mb-2">Procurar</button>
                            <div><Link to="/criaruser"><button type="button" class="btn btn-primary">Adicionar Utilizador</button></Link></div>
                        </form>


                        <table class="table">

                            <thead class="thead-light">
                                <tr>
                                    <th scope="col"> </th>
                                    <th scope="col">Nome</th>
                                    <th scope="col">Anos Empresa</th>
                                    <th scope="col">Função</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.loadFillData()}

                            </tbody>
                        </table>
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
                    <td>{data.anosempresa}</td>
                    <td>{data.tipo}</td>
                    <td><button type="button" class="btn btn-info"><Link to={"/verperfil_rh/" + data.id_user} >Info</Link></button></td>
                </tr>
            )
        });
    }
}
export default utilizadores_rh; 