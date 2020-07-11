import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import infopessoal_dev from './info_pessoal_dev'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

import logo from './imagens/logo.svg'
import boss from "./imagens/icons/boss.svg";
import correct from "./imagens/icons/correct.svg";
import Logo from "./imagens/logo.svg";
import user from "./imagens/user.svg";



import './css/criacaodeequipa.css';
class criacaodeequipa2 extends React.Component {
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
                        <h2>Criação de Equipa</h2>
                    </div>

                    <div class="conteudo col-sm-12 col-lg-12 col-md-12 col-xl-12">


                        <div class="card">
                            <div class="row d-flex justify-content-center">
                                <form class="row col-12">
                                    <div class="form-row col-6">
                                        <div class="form-group col-12 ">
                                            <label for="inputAddress">Nome Projecto:</label>
                                            <input type="text" class="form-control" id="inputAddress" placeholder="Nome Projecto" />
                                        </div>
                                        <div class="form-row col-12">
                                            <div class="form-group col-md-6">
                                                <label for="inputEmail4">Anos Empresa:</label>
                                                <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                                    <option selected>Nenhum...</option>
                                                    <option value="1">1-3</option>
                                                    <option value="2">4-6</option>
                                                    <option value="3">7-+</option>
                                                </select>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="inputPassword4">Idioma:</label>
                                                <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                                    <option selected>Nenhum...</option>
                                                    <option value="1">Inglês</option>
                                                    <option value="2">Alemão</option>
                                                    <option value="3">Francês</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group col-12">
                                            <label for="inputAddress">Soft Skills:</label>
                                            <input type="text" class="form-control" id="inputAddress" placeholder="Soft Skills" />
                                        </div>
                                    </div>
                                    <div class="form-row col-6">
                                        <div class="form-group col-6 ">
                                            <label for="inputAddress">Início do Progecto:</label>
                                            <input type="text" class="form-control" id="inputAddress" placeholder="Início" />
                                        </div>
                                        <div class="form-group col-6 ">
                                            <label for="inputAddress">Fim do Progecto:</label>
                                            <input type="text" class="form-control" id="inputAddress" placeholder="Fim" />
                                        </div>
                                        <div class="form-row col-12">
                                            <div class="form-group col-md-6">
                                                <label for="inputEmail4">Viajar:</label>
                                                <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                                    <option selected>Nenhum...</option>
                                                    <option value="1">Sim</option>
                                                    <option value="2">Não</option>

                                                </select>
                                            </div>
                                            <div class="form-group col-md-6">
                                                <label for="inputPassword4">Nº Pessoas:</label>
                                                <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                                    <option selected>Nenhum...</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                    <option value="3">4</option>
                                                    <option value="3">5</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="form-group col-12">
                                            <label for="inputAddress">Hard Skills:</label>
                                            <input type="text" class="form-control" id="inputAddress" placeholder="Hard Skills" />
                                        </div>
                                    </div>

                                    <div class="ml-auto p-2 mr-sm-4">
                                        <button type="submit" class="btn btn-primary">Gerar</button></div>
                                </form>
                                <div class="overflow-auto col-12 ">
                                    <div class="row">
                                    
                                    {this.loadFillData()}   
                                     
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="row d-flex justify-content-center">
                                <div class="row col-12">
                                    <div class="col-4 "><Link to="/comparar">
                                        <div class="row justify-content-center ">
                                            <img src={boss} alt="avatar" />

                                        </div>
                                        <div class="row justify-content-center">
                                            <p>João Sousa</p>
                                        </div></Link>
                                        <div class="row justify-content-center">
                                            <button type="button" class="btn btn-danger">Remover</button>
                                        </div>
                                    </div>
                                    <div class="col-4"><Link to="/comparar">
                                        <div class="row justify-content-center ">
                                            <img src={boss} alt="avatar" />
                                        </div>
                                        <div class="row justify-content-center">
                                            <p>João Sousa</p>
                                        </div></Link>
                                        <div class="row justify-content-center">
                                            <button type="button" class="btn btn-danger">Remover</button>
                                        </div>
                                    </div>
                                    <div class="col-4"><Link to="/comparar">
                                        <div class="row justify-content-center">
                                            <img src={boss} alt="avatar" />
                                        </div>
                                        <div class="row justify-content-center">
                                            <p>João Sousa</p>
                                        </div></Link>
                                        <div class="row justify-content-center">
                                            <button type="button" class="btn btn-danger">Remover</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div class="row justify-content-center mt-md-4">
                                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#Modal">Criar Projeto</button>

                                <div class="modal fade" id="Modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Projeto foi Criado!</h5>
                                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div class="modal-body">
                                                <p>Pode voltar agora a página principal, para ver o projeto e a equipa.</p>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-primary" data-dismiss="modal">Fechar</button>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>



                </div>
            </div>

        );
    }
    loadFillData() {
        return this.state.listEmployee.map((data, index) => {
            return (
                
                    <div class="col-2 "><Link to="/ver_perfil">
                    <div class="row justify-content-center ">
                                                <img src={boss} alt="avatar" />
                                            </div>
                                            <div class="row justify-content-center">
                                                <p>{data.Nome}</p>
                                            </div>
                                        </Link>
                                        </div>
                

                
            )
        });
    }
}

export default criacaodeequipa2; 
