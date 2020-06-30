import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';


import ver_perfil from './ver_perfil'

import icon from "./imagens/icon.svg";
import logo from "./imagens/logo.svg";
import user from "./imagens/user.svg";
import boss from "./imagens/icons/boss.svg";
import correct from "./imagens/icons/correct.svg";


import './css/infopessoal_gestor.css';

class criaruser extends React.Component {


    render() {
        return (
            <div class="container-fluid">

                < div class=" row " >
                   
                        <nav class="navbar">
                            <a class="navbar-brand" href="home_dev.html"><Link to="/projetos"><img class="img1" src={logo} /></Link></a>
                            <div class="nav_list">
                                <ul>
                                    <li><a href="projeto_dev.html"><Link to="/utilizadores">Projeto</Link></a></li>
                                    <li>
                                        <div class="dropdown">
                                            <a class="dropbtn">Nome</a>
                                            <div class="dropdown-content">
                                                <a href="#"><Link to="/info_pessoal_dev">Perfil</Link></a>
                                                <a href="index.html"><Link to="/">Terminar Sessão</Link></a>

                                            </div>
                                        </div>
                                    </li>

                                    <li class="user">
                                        <a><img class="img2" src={user} /></a>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        </div>
            
            <div class="row col-sm-12 col-lg-12 col-md-12 col-xl-12">
                <h2>Informação Pessoal</h2>
            </div>

                    <div class="conteudo col-sm-12 col-lg-12 col-md-12 col-xl-12">
                        
                            <div class="card ">
                                <div class="row justify-content-center">
                                    <div class="col-3  ">
                                        <div class="row ">
                                            <div class="col-4"><img src={boss} alt="avatar" /></div>
                                            <div class="col-8">
                                                <h4 >Tiago Souza</h4>
                                                <h5>Developer</h5>
                                                <h6>Masculino</h6></div>
                                        
                                        </div>
    
                                    </div>
                                    <div class="col-3  ">
                                        <div class="row">
                                            <div class="col-3">
                                                <p>E-mail:</p>
                                            </div>
                                            <div class="col-sm-8">
                                                <input type="email" class=" criaruser form-control" id="inputEmail3" placeholder=""/>
                                              </div>
                                            <div class="col-3">
                                                <p>Telemóvel:</p>
                                            </div>
                                            <div class="col-sm-8">
                                                <input type="email" class="criaruser form-control" id="inputEmail3" placeholder=""/>
                                              </div>
                                            <div class="col-3">
                                                <p>Localidade:</p>
                                            </div>
                                            <div class="col-sm-8">
                                                <input type="email" class="criaruser form-control" id="inputEmail3" placeholder=""/>
                                              </div>
                                        </div>
    
                                    </div>
                                    <div class="col-3  ">
                                        <div class="row">

                                            <div class="col-5">
                                                <p>Nascimento:</p>
                                            </div>
                                            <div class="col-sm-5">
                                                <input type="email" class="criaruser form-control" id="inputEmail3" placeholder=""/>
                                              </div>
                                            <div class="col-5">
                                                <p>Idiomas:</p>
                                            </div>
                                            <div class="col-sm-5">
                                                <input type="email" class="criaruser form-control" id="inputEmail3" placeholder=""/>
                                              </div>
                                            <div class="col-5">
                                                <p>Recomendações:</p>
                                            </div>
                                            <div class="col-sm-5">
                                                <input type="number" class="criaruser form-control" id="inputEmail3" placeholder=""/>
                                              </div>
                                        </div>
    
                                    </div>
                                    <div class="col-3  ">
                                        <div class="row">

                                            <div class="col-6">
                                                <p>Disponibilidade para viajar:</p>
                                            </div>
                                            <div class="col-6"><img class="imgvalid" src={correct} alt="Disponibilidade"/></div>
        
                                        </div>
    
                                    </div>
                                </div>
                                
                                
                                
                            </div>
                            
                            <div class="row">
                            <div class="col-6" >
                                <div class="card">
                                    <div class="row"> 
                                        
                                            <img class="imglogo" src={logo}  />
                                       
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
                                 <div class="card">
                                    <div class="row"> 
                                        
                                            <img class="imglogo" src={logo}/>
                                        
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

                            
                            

                            <div class="card">
                                <div class="row">
                                    <h4>Certificados</h4>
                                </div>
                                <div class="row">
                                    <form>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label for="exampleFormControlTextarea1">Descrição</label>
                                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                              </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label for="exampleFormControlFile1">Descrição...</label>
                                                <input type="file" class="form-control-file" id="exampleFormControlFile1"/>
                                              </div>
                                        </div>
                                          
                                    </form>
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
                                <div class="row justify-content-center">
                                    <button type="submit" onclick="location.href='verperfil_RH.html'" class="btn btn-primary">Guardar</button>
                                    <button  type="button" onclick="location.href='utilizadores_rh.html'" class="btn btn-light">Cancelar</button>
                                </div>
                            </div>
                           
                            
                            
                    </div>

           
       
    </div>
                        );
    }
}
export default criaruser; 