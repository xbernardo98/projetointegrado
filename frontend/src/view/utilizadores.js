import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

import projetos_info from './projetos_info'

import Logo from "./imagens/logo.svg";
import user from "./imagens/user.svg";

import './css/utilizadores.css';

class listComponent extends React.Component {


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

            <div className="container-fluid">
                <div class="row">
                    {/* titulo*/}
                    <div class="col-sm-12 col-lg-12 col-md-12 col-xl-12">
                        <h2>Projetos em desenvolvimento</h2>
                    </div>
                    {/* titulo*/}

                    <div class="conteudo col-sm-12 col-lg-12 col-md-12 col-xl-12">
                        {/* card*/}
                        <div class="card">

                            {/* procurar*/}
                            <form class="form-inline">

                                <div class="form-group mx-sm-3 mb-2">
                                    <input type="search" class="form-control" id="inputPassword2" placeholder="Procurar" />
                                </div>
                                <button type="submit" class="btn1 btn-primary mb-2">Procurar</button>
                            </form>
                            {/* procurar*/}

                            {/* tabela*/}
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
                            </table>
                            {/* tabela*/}
                        </div>
                        {/* card*/}

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


                <tr key={index}>
                    <th scope="row">{data.ID_Projeto}</th>
                    <td><h6>{data.NomeProjeto}</h6> <div><a href="home_2_dev.html"><button type="button" class="btn btn-info"><Link to={"/projetos_info/" + data.ID_Projeto} >Info</Link></button></a></div></td>
                    <td>{data.DataInicio}</td>
                    <td>{data.DataFim}</td>
                </tr>
            )
        });
    }



}
export default listComponent;