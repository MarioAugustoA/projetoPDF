import React, { Component } from 'react';
import LOGOIMG from '../../assets/images/LOGOIMG.svg'

class Topo extends Component{
    constructor(props){
        super(props)

    }
    arrasta(e){
        console.log('estou chamando a função');
        var principal = document.getElementById("principal");
        var direito = document.querySelectorAll(".direita");
       
        if (e.target.checked == true){
            principal.style.right = "0";
            for(var i=0; i<direito.length; i++){
                direito[i].classList.add('remove');
        }
           
        }else{
            principal.style.right = "-300px";
            for(var i=0; i<direito.length; i++){
                direito[i].classList.remove('remove');
        }
            
        }
    }

    render(){
        return(
            <>
            <header id="main-header">
                <div className="content">
                    <div className="logo">
                        <img src={LOGOIMG} alt="logo"/>
                    </div>
                    <div className="laterald">  
                        <div className="sele">
                            <select name="select">
                                <option value="azul">Azul</option>
                                <option value="cinza" selected>Cinza</option>
                                <option value="Preto">Preto</option>
                            </select>
                        </div>
                        <div className="menu">
                            <input type="checkbox" id="check" class="check" onClick={ this.arrasta.bind(this)}></input>
                            <label className="l" for="check" ></label>
                            <span className="s"></span>
                        </div>
                    </div>
                </div>
            </header>
            <nav className="men" id="principal">
                <ul >
                    <li><a href="">Eu</a></li>
                    <li><a href="">QUE</a></li> 
                    <li><a href="">VOU</a></li>
                    <li><a href="">Demitir<span>+</span></a></li>
                    <li><a href="">VOCÊS</a></li>
                </ul>
            </nav>
            </>
        );
    }
}
export default Topo;