import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';


import ver_perfil from'./ver_perfil'

import perfil from "./imagens/perfil.jpg";
import Logo from "./imagens/logo.svg";
import user from "./imagens/user.svg";
import boss from "./imagens/icons/boss.svg";

import './css/projeto_dev.css';

const baseUrl = "http://localhost:3000";
class recursoshumanosComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            dataEmployee: {},
            campName: "",
            campEmail: "",
            campPhone: "",
            campAddress: ""
        }
    }
    componentDidMount() {
        let userId = this.props.match.params.employeeId;
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
                    <h2>Perfil Recursos Humanos</h2>
                </div>
    
                <div class="conteudo col-sm-12 col-lg-12 col-md-12 col-xl-12">
                        <div class="row">
                            <div class="conteudo col-sm-4 col-lg-4 col-md-4 col-xl-4"></div>
                            <div class="conteudo col-sm-4 col-lg-4 col-md-4 col-xl-4">
                                <div class="card ">
                                <form>
                                    <div class="d-flex justify-content-center">
                                        
                                            <img src={boss} class="boss" alt="avatar"/>
                                        
                                        <div class="flex-column">
                                            <h4>{this.state.campName}</h4>    
                                             <h5 >{this.state.TipoUser}</h5>
                                         </div>
                                    </div>

                                    <div class="d-flex justify-content-center">
                                        <div class="row">
                                            
                                            <div class="flex-column">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <b>E-mail:</b>
                                                    </div>
                                                    
                                                    <div class="col-6">
                                                        <div class="row" ><p>{this.state.campEmail}</p></div>
                                                    </div>
                                                  </div>
                                                <div class="row">
                                                    <div class="col-6" ><b>Telemóvel:</b></div>
                                                    <div class="col-6">
                                                        <div  class="row"><p>{this.state.camptelemovel}</p></div>
                                                    </div>
                                                  </div>
                                                  <div class="row">
                                                    <div class="col-6"><b>Localidade:</b></div>
                                                    <div class="col-6">
                                                        <div  class="row" ><p>{this.state.campLocalidade}</p></div>
                                                    </div>
                                                  </div>
                                                  
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div class="row justify-content-center">
                                        <a href="editar.html"><button type="button" class="btn btn-primary"><Link to="/edit_recursoshumanos">Editar</Link></button></a>
                                        <a href="home_rh.html"><button type="button" class="btn btn-light">Voltar</button></a>
                                    </div>

                                    
                                </form>
                             
                                </div>
                            </div>
                            <div class="conteudo col-sm-4 col-lg-4 col-md-4 col-xl-4"></div>
                            
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
                    <td><h6>{data.Nome}</h6> <div><a href="verperfil_dev.html"></a></div></td>
                    <td><button type="button" class="btn btn-info"><Link  to={"/ver_perfil/"+data.ID_User} >Info</Link></button></td>
                    <td>{data.AnosEmpresa}</td>
                    <td>{data.TipoUser}</td>
                </tr>
            )
        });
    }
}
export default recursoshumanosComponent;