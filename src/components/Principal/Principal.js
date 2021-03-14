import React, {Component} from 'react';
import './assets/css/styles.css'
import Topo from '../Topo';
import Form from '../Form'
import Menu from '../Menu';
class Principal extends Component{
  constructor(props){
    super(props);
    this.state={
      menu:[]
    }
  }
  criarMenu(titulo){
    const cmenu = [...this.state.menu, titulo];
    var novoMenu={menu:cmenu}
    this.setState(novoMenu);
  }
  render(){
    return(
      <section>
            <Topo />
            <Menu Menu = {this.criarMenu.bind(this)}/>
            <Form Tabelas ={this.state.menu} />            
      </section>);
  }
}
export default Principal;