import React, {Component} from 'react';


class Login extends Component {
    render(){ 
        return(
            <section>
            <div className="container">
            <div className="content">
                <img src="../../assets/images/Logo.png" alt="logo"/>
                <form >
                    <h1>Realize o login</h1>
                    <input  placeholder="E-mail"/>
                    <input className="senh" type="password" placeholder="Senha" />
                    <button type="submit">Entrar</button>
                    <a href="forgot"> Esqueci minha senha</a>
                </form>
                <a href="">Criar conta</a>
            </div>
            <div className="background"></div>
        </div>
        </section>
        );
    }
}
export default Login;