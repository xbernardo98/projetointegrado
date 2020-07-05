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

class recursoshumanosComponent extends React.Component {

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
                    <nav class="navbar">
                        <a class="navbar-brand" href="home_dev.html"><Link to="/projetos"><img class="img1" src={Logo} /></Link></a>
                        <div class="nav_list">
                            <ul>
                                <li><Link to="/utilizador">Utilizadores</Link></li>
                                <li><Link to="/utilizadores">Projeto</Link></li>
                                <li>
                                    <div class="dropdown">
                                        <a class="dropbtn">Nome<img class="user" src={user}/></a>
                                        <div class="dropdown-content">
                                            <Link to="/info_pessoal_dev">Perfil</Link>
                                            <Link to="/">Terminar Sessão</Link>

                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>


            <div class="row">
                <div class="col-sm-12 col-lg-12 col-md-12 col-xl-12">
                    <h2>Utilizadores</h2>
                </div>
    
                <div class="conteudo col-sm-12 col-lg-12 col-md-12 col-xl-12">
                        <div class="row">
                            <div class="conteudo col-sm-4 col-lg-4 col-md-4 col-xl-4"></div>
                            <div class="conteudo col-sm-4 col-lg-4 col-md-4 col-xl-4">
                                <div class="card ">
                                <form>
                                    <div class="d-flex justify-content-center">
                                        
                                            <img src={boss} alt="avatar"/>
                                        
                                        <div class="flex-column">
                                            <h4>Geraldino Alves</h4>    
                                             <h5 >Recursos Humanos</h5>
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
                                                        <div class="row" ><p>geraldinoalves@mail.com</p></div>
                                                    </div>
                                                  </div>
                                                <div class="row">
                                                    <div class="col-6" ><b>Telemóvel:</b></div>
                                                    <div class="col-6">
                                                        <div  class="row"><p>911 333 555</p></div>
                                                    </div>
                                                  </div>
                                                  <div class="row">
                                                    <div class="col-6"><b>Localidade:</b></div>
                                                    <div class="col-6">
                                                        <div  class="row" ><p>Viseu</p></div>
                                                    </div>
                                                  </div>
                                                  
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div class="row justify-content-center">
                                        <a href="editar.html"><button type="button" class="btn btn-primary">Editar</button></a>
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