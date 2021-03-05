import React, {Component} from 'react'

class Observacoes extends Component{
    render(){
        return(
        <div className="container">
                <div className="content">
                    <div className="tituloc">
                        <div className="texto">
                            Observações
                        </div>
                    </div>
                    <div className="box">
                        <textarea className="texto1" placeholder="Caso exista alguma informação digite aqui" name="servico" id="servico_id" ></textarea>
                    </div>
                </div>
        </div>
        );
    }
}
export default Observacoes;