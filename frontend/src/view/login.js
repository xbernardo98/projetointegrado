import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./imagens/logo.png"


import home_dev_2 from './home_2_dev';
import navbar from './navbar';

import './css/mains.css';
import './css/util.css';

class listComponent extends React.Component {
render()
{
return (

	<div class="limiter">
		<div class="container-login100">
			<div className="row">
				<div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
					<form class="login100-form validate-form">
						<img className="img4" src={logo} alt="logo" height="100" width="300" />

						<div class="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
							<input class="input100" type="text" name="email" placeholder="Email" />
							<span class="focus-input100-1"></span>
							<span class="focus-input100-2"></span>
						</div>

						<div class="wrap-input100 rs1 validate-input" data-validate="Password is required">
							<input class="input100" type="password" name="pass" placeholder="Password" />
							<span class="focus-input100-1"></span>
							<span class="focus-input100-2"></span>
						</div>

						<div class="container-login100-form-btn m-t-20">
							<button class="login100-form-btn">
								<Link to="/projetos">Entrar  Recursos Humanos</Link>
							</button>
						</div>
						<div class="text-center p-t-45 p-b-4">
							<span class="txt1">
								Esqueceu-se
						</span>

							<a href="#" class="txt2 hov1">
								Username / Password?
						</a>
						</div>


					</form>
				</div>

				<div className="container">
					<Route path="/navbar" component={navbar} />
				</div>
			</div>
		</div>
	</div>


);
}
}
export default listComponent;