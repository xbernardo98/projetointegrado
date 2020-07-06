import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

import perfil from "./imagens/perfil.jpg";
import line from "./imagens/line.svg";
import Logo from "./imagens/logo.svg";
import user from "./imagens/user.svg";

import './css/projetos_info.css';

const baseUrl = "http://localhost:3000";
class projetos_info_rh extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            dataEmployee: {},
            campName: "",
            campEmail: "",
            campPhone: "",
            campAddress: "",
        }
    }
    componentDidMount() {
        let userId = this.props.match.params.employeeId;
        const url = baseUrl + "/users/projetos_detail/" + userId
        axios.get(url)
            .then(res => {
                if (res.data.sucess) {
                    const data = res.data.data[0]
                    this.setState({
                        dataEmployee: data,
                        campName: data.NomeProjeto,
                        campDataInicio: data.DataInicio,
                        campDataFim: data.DataFim,
                        campInfo_Projeto: data.Info_Projeto,
                        campComentario: data.Comentario,
                        campMembro1: data.Membro1,
                        campMembro2: data.Membro2,
                        campMembro3: data.Membro3,
                        campMembro4: data.Membro4
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
                <nav class="navbar">
                        <Link to="/home_rh"><img class="img1" src={Logo} /></Link>
                        <div class="nav_list">
                            <ul>
                                <li><Link to="/utilizadores_rh">Utilizadores</Link></li>
                                <li><Link to="/projeto_rh">Projetos</Link></li>
                                <li>
                                    <div class="dropdown" >
                                        <a class="dropbtn">Nome <img class="user" src={user}/></a>
                                        <div class="dropdown-content">
                                            <Link to="/recursoshumanos">Perfil</Link>
                                            <Link to="/">Terminar Sessão</Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>


            <div class="row">
                
    
                        <div class="conteudo col-sm-12 col-lg-12 col-md-12 col-xl-12">
                            
                                <div class="card">
                                    <div class="title">
                                        <h2>{this.state.campName}</h2>
                                    </div>
                                    
                                </div>
                        </div>
    
                        <div class="conteudo col-sm-12 col-lg-6 col-md-12 col-xl-6">
                            
                            <div class="card">
                                <div class="conteudo_1">
                                    <img class="line" src={line}/>
                                    <h5>Membros da Equipa</h5>
                                    <svg width="400">
                                        <line class="svg" x1="400" y1="0" />
                                    </svg>
                                </div>
                                <div class="conteudo_2">
                                    <div class="column">
                                        <img class="img_perfil" src={perfil}  />
                                        <p>{this.state.campMembro1}</p>
                                      </div>
                                      <div class="column">
                                        <img class="img_perfil" src={perfil}  />
                                        <p>{this.state.campMembro2}</p>
                                      </div>
                                </div>
                                <div class="conteudo_2">
                                    <div class="column">
                                        <img class="img_perfil" src={perfil} />
                                        <p>{this.state.campMembro3}</p>
                                      </div>
                                      <div class="column">
                                        <img class="img_perfil" src={perfil}  />
                                        <p>{this.state.campMembro4}</p>
                                      </div>
                                </div>
    
                                
                            </div>
                    </div>
    
                    <div class="conteudo col-sm-12 col-lg-6 col-md-12 col-xl-6">
                            
                        <div class="card">
                            <div class="conteudo_1">
                                <h5>Descrição Projeto</h5>
                                <svg width="400">
                                    <line class="svg" x1="400" y1="0" />
                                </svg>
                                <div class="text">
                                    <p>{this.state.campInfo_Projeto} </p>
                                    <div class="form-row justify-content-center">
                </div>
                                </div>
                            </div>
                        </div>
                </div>
    
    
               
            </div>
        </div>
        );
    }
}
export default projetos_info_rh;