import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';


import ver_perfil from './ver_perfil'

import perfil from "./imagens/perfil.jpg";
import Logo from "./imagens/logo.svg";
import user from "./imagens/user.svg";

import './css/home_2_dev.css';

class home_2_dev extends React.Component {


    render() {
        return (
            <div class="container-fluid">

                < div class=" row " >
                    < div class=" col-sm-12 col-lg-12 col-md-12 col-xl-12 "  >
                    <nav class="navbar">
                        <a class="navbar-brand" href="home_dev.html"><Link to="/projetos"><img class="img1" src={Logo} /></Link></a>
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
                    </ div >


                    < div class=" conteudo col-sm-12 col-lg-12 col-md-12 col-xl-12 " >

                        < div class=" card " >
                            < div class=" title " >
                                < h2 > Criação de um Gestor de Equipas </ h2 >
                            </ div >

                        </ div >
                    </ div >

                    < div class=" conteudo col-sm-12 col-lg-6 col-md-12 col-xl-6 " >

                        < div class=" card " >
                            < div class=" conteudo_1 " >
                                < img class=" line " src=" imagens / line.svg "  />
                                < h5 > Membros da Equipa </ h5 >
                                < svg width=" 400 " >
                                    < line x1=" 400 " y1=" 0 "  />
                                </ svg >
                            </ div >
                            < div class=" conteudo_2 " >
                                < div class=" column " >
                                    < img class=" img_perfil " src=" imagens / photo.jpg "  />
                                    < p> João Souza </ p >
                                </ div >
                                < div class=" column " >
                                    < img class=" img_perfil " src=" imagens / perfil.jpg "  />
                                    < p > João Souza </ p >
                                </ div >
                            </ div >
                            < div class=" conteudo_2 " >
                                < div class=" column " >
                                    < img class=" img_perfil " src=" imagens / perfil.jpg "  />
                                    < p> João Souza </ p >
                                </ div >
                                < div class=" column " >
                                    < img class=" img_perfil " src=" imagens / photo.jpg "  />
                                    < p > João Souza </ p >
                                </ div >
                            </ div >


                        </ div >
                    </ div >

                    < div class=" conteudo col-sm-12 col-lg-6 col-md-12 col-xl-6 " >

                        < div class=" card " >
                            < div class=" conteudo_1 " >
                                < h5 > Descrição Projeto </ h5 >
                                < svg width=" 400 " >
                                    < line x1=" 400 " y1=" 0 "  />
                                </ svg >
                                < div class=" text " >
                                    < p > Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porttitor iaculis molestie. Em viverra id justo quis mattis. Etiam felis nisi, placerat mi mi, euismod convallis dolor. Cras mollis, risus nec eleifend ornare, lorem purus scelerisque nunc, sedgue arcu elit ac turpis. Cras id nunc tristique, pulvinar elit sit amet, dignissim erat. Nulla nunc nulla, vestibulum ut cursus sit amet, aliquam et nisl. Proin tempus erat eget libero vulputate rhoncus. Aliquam nec pharetra risus. Duis egestas nunc lectus, eu aliquet tellus imperdiet ut. Aliquam bibendum mi interdum feugiat vestibulum. Fusione vel consectetur lacus, e procure a urna. Integral ac urna et ante rutrum mollis.

                                    Ut lectus dolor, maximus vel sapien et, hendrerit laoreet velit. Aliquam iaculis cursus mi sed iaculis. Nunc commodo dui lectus, eget cursus mauris dapibus quis. Nulla sagittis nisi nec felis imperdiet dictum. Mauris sempre turpis augue, quis efficitur ipsum congue sit amet. Nunc bibendum luctus sem, id euismod lacus accumsan vitae. Proin dapibus sapien mi, quis fermentum sem faucibus ac. Pellentesque vitae orci id mi lacinia auctor ac at mi.
                                </ p >
                                </ div >
                            </ div >
                        </ div >
                    </ div >



                </ div >

            </div>
        );
    }
}
export default home_2_dev; 