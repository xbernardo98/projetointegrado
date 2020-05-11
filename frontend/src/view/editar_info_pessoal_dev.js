import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import infopessoal_dev from'./info_pessoal_dev'

import logo from'./imagens/logo.svg'
import boss from "./imagens/icons/boss.svg";
import correct from "./imagens/icons/correct.svg";



import './css/editar_info_pessoal_dev.css';
class editar_info_pessoal_dev extends React.Component {
    render() {
        return (
            <div class="container-fluid">
                <div class="row">


                    <div class="col-sm-12 col-lg-12 col-md-12 col-xl-12">
                        <h2>Informação Pessoal</h2>
                    </div>

                    <div class="conteudo col-sm-12 col-lg-12 col-md-12 col-xl-12">

                        <div class="card_1 ">
                            <div class="row justify-content-center">
                                <div class="col-3  ">
                                    <div class="row ">
                                        <div class="col-4"><img src={boss} alt="avatar" height="100" width="100" /></div>
                                        <div class="col-8">
                                            <h4 >Tiago Souza</h4>
                                            <h3 >Developer</h3>
                                            <h6 >Masculino</h6>
                                        </div>

                                    </div>

                                </div>
                                <div class="col-3  ">
                                    <div class="row">
                                        <div class="col-3">
                                            <p>E-mail:</p>
                                        </div>
                                        <div class="col-9"><b>tiagosouza@mail.com</b></div>
                                        <div class="col-3">
                                            <p>Telemóvel:</p>
                                        </div>
                                        <div class="col-9"><b>911 333 555</b></div>
                                        <div class="col-3">
                                            <p>Localidade:</p>
                                        </div>
                                        <div class="col-9"><b>Viseu</b></div>
                                    </div>

                                </div>
                                <div class="col-3  ">
                                    <div class="row">

                                        <div class="col-5">
                                            <p>Nascimento:</p>
                                        </div>
                                        <div class="col-7"><b>12-12-1991</b></div>
                                        <div class="col-5">
                                            <p>Idiomas:</p>
                                        </div>
                                        <div class="col-7"><b>Português, Inglês </b></div>
                                        <div class="col-5">
                                            <p>Recomendações:</p>
                                        </div>
                                        <div class="col-7"><b>0</b></div>
                                    </div>

                                </div>
                                <div class="col-3  ">
                                    <div class="row">

                                        <div class="col-6">
                                            <p>Disponibilidade para viajar:</p>
                                        </div>
                                        <div class="col-6"><img src={correct} alt="Disponibilidade" height="20" width="20" /></div>

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
                            <button type="submit" onclick="location.href='infopessoal_dev.html'" class="btn btn-primary"><Link to="/info_pessoal_dev">Guardar</Link></button>
                            <button type="button" onclick="location.href='infopessoal_dev.html'" class="btn btn-primary"><Link to="/info_pessoal_dev">Cancelar</Link></button>
                        </div>
                        <div className="container">
					<Route path="/info_pessoal_dev" component={infopessoal_dev} />
				</div>


                    </div>


                </div>
            </div>

        );
    }
}
export default editar_info_pessoal_dev;