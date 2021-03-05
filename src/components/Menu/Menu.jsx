import React, {Component} from 'react';



class Menu extends Component {
    constructor(props){
        super(props);
        this.tabela="";
    }

    criarTabela(e){
        this.tabela=e.target.value.toUpperCase();
        if (e.key == "Enter"){
            this.props.Menu(this.tabela);
            e.target.value='';
    }
    
    }

    render(){
        return(
        <div className="container2">
            <div className="content" id="form">
                <div className="grupo">
                       <input type="text" id="id_valor" className="direita" placeholder="CRIAR TABELA:" onKeyUp={ this.criarTabela.bind(this) }/>

                 </div>
             </div>
        </div>
        );
    }
}
export default Menu;