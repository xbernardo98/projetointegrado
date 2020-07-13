import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import infopessoal_dev from './info_pessoal_dev';
import axios from 'axios';

import logo from './imagens/logo.svg';
import user from "./imagens/user.svg";


import './css/criacaodeequipa.css';
class criacaodeequipa extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      campanosempresa: "",
      campoidioma:"",
      campViagem:"",
    }
  }
  
  render() {
    return (
      <div class="container-fluid">

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
                     
                      <div class="form-group mr-sm-2">
                                            <label for="inputAddress">Anos Empresa</label>
                                            <input type="number" class="form-control"
                                                placeholder="Anos na empresa" value={this.state.campanosempresa} onChange={(value) =>
                                                  this.setState({ campanosempresa: value.target.value })} />
                                        </div>
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputPassword4">Idioma:</label>
                      <select  class="custom-select mr-sm-2" id="inlineFormCustomSelect" value={this.state.campoidioma} onChange={(value) =>
                                                  this.setState({ campoidioma: value.target.value })}>
                        <option selected>Nenhum...</option>
                        <option value="Ingles">Ingles</option>
                        <option value="Alemao">Alemao</option>
                        <option value="Frances">Frances</option>
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
                    <label for="inputAddress">Início do Projecto:</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="Início" />
                  </div>
                  <div class="form-group col-6 ">
                    <label for="inputAddress">Fim do Projecto:</label>
                    <input type="text" class="form-control" id="inputAddress" placeholder="Fim" />
                  </div>
                  <div class="form-row col-12">
                    <div class="form-group col-md-6">
                      <label for="inputEmail4">Viajar:</label>
                      <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" value={this.state.campViagem} onChange={(value) =>
                                                  this.setState({ campViagem: value.target.value })}>
                        <option selected >Nenhum...</option>
                        <option value="Sim">Sim</option>
                        <option value="Nao">Não</option>

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
                  <Link to="/criacaodeequipa2"><button type="submit" class="btn btn-primary" onClick={() => this.ListUsersCoiso()}>Gerar</button></Link>
                </div>
              </form>
            </div>

          </div>
        </div>


      </div>


    );
  }
  ListUsersCoiso() {
    
    const baseUrl = "https://projetointegrado-outcode.herokuapp.com/users/user_select/" + this.state.campanosempresa + "/" + this.state.campoidioma + "/" + this.state.campViagem ;
    const datapost = {
    AnosEmpresa: this.state.campanosempresa,
    linguas:this.state.campoidioma,
    disponibilidadeviajar:this.state.campViagem
    
    }
    axios.get(baseUrl, datapost)
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
        alert("OLA" + this.state.campanosempresa);
}
  
}

export default criacaodeequipa; 
