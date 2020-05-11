import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import projetos_info from'./projetos_info'

import './css/utilizadores.css';

class listComponent extends React.Component {
    render() {
        return (

            <div className="container-fluid">
                <div class="row">

                    <div class="col-sm-12 col-lg-12 col-md-12 col-xl-12">
                        <h2>Projetos em desenvolvimento</h2>
                    </div>

                    <div class="conteudo col-sm-12 col-lg-12 col-md-12 col-xl-12">

                        <div class="card">

                            <form class="form-inline">

                                <div class="form-group mx-sm-3 mb-2">
                                    <input type="search" class="form-control" id="inputPassword2" placeholder="Procurar" />
                                </div>
                                <button type="submit" class="btn1 btn-primary mb-2">Procurar</button>
                            </form>

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
                                        <td><h6>Criação de um Gestor de Equipas</h6> <div><a href="home_2_dev.html"><button type="button" class="btn btn-info"><Link to="/projetos_info">Info</Link></button></a></div></td>
                                        <td>18/02/2020</td>
                                        <td>02/06/2020</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td><h6>Criação de um Gestor de Equipas</h6> <div><a href="home_2_dev.html"><button type="button" class="btn btn-info"><Link to="/projetos_info">Info</Link></button></a></div></td>
                                        <td>18/02/2020</td>
                                        <td>02/06/2020</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td><h6>Criação de um Gestor de Equipas</h6> <div><a href="home_2_dev.html"><button type="button" class="btn btn-info"><Link to="/projetos_info">Info</Link></button></a></div></td>
                                        <td>18/02/2020</td>
                                        <td>02/06/2020</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td><h6>Criação de um Gestor de Equipas</h6> <div><a href="home_2_dev.html"><button type="button" class="btn btn-info"><Link to="/projetos_info">Info</Link></button></a></div></td>
                                        <td>18/02/2020</td>
                                        <td>02/06/2020</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td><h6>Criação de um Gestor de Equipas</h6> <div><a href="home_2_dev.html"><button type="button" class="btn btn-info"><Link to="/projetos_info">Info</Link></button></a></div></td>
                                        <td>18/02/2020</td>
                                        <td>02/06/2020</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">6</th>
                                        <td><h6>Criação de um Gestor de Equipas</h6> <div><a href="home_2_dev.html"><button type="button" class="btn btn-info"><Link to="/projetos_info">Info</Link></button></a></div></td>
                                        <td>18/02/2020</td>
                                        <td>02/06/2020</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>



                    <div className="container">
					<Route path="/projetos_info" component={projetos_info} />
				</div>
                </div>
            </div>
            


           
        );
    }
}
export default listComponent;