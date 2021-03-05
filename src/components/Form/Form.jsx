import React, {Component} from 'react';
import DELETE from '../../assets/images/DELETE.svg'
import Criar from '../../assets/javascript/CriarInputs'
import RecuperandoDados from '../../assets/javascript/recuperandoDadosDaTabela'

class Form extends Component{

    actionForm(e){
        e.preventDefault();
        e.stopPropagation();   
    }
    
    criarInput(key, e){  
        var valor=e.target.value;
        if (e.key == "Enter"){
            var criar = new Criar();
            criar.criarCampos(key, valor);
            e.target.value = ''
        }
    }
    
    DeletarTabela(e){
        var pai = e.target.parentNode;
        var avo = pai.parentNode;
        var bis = avo.parentNode;
        var tatara = bis.parentNode;
        tatara.remove();
    }
    ExecutarCaptura(e){
        e.preventDefault();
        e.stopPropagation();
        var dados = new RecuperandoDados();
        dados.buscar();
        console.log('dados.dados: ',dados.dados);
    }
    render(){
        return(
            <form onSubmit={this.actionForm.bind(this)}>
            

                {this.props.Tabelas.map(
                
                    (tabela, index) =>{
                        return(
                    <div class="containercria"  key={index}>
                        <div class="content">
                            <div class="tituloc">
                                <div class="texto">
                                {tabela}
                                <br/>
                                </div>
                                <input type="text" id="id_valor" className="direita" placeholder="CRIAR CAMPOS" onKeyUp={ this.criarInput.bind(this,index) }/>
                                <div className="lixo"><img src={DELETE} alt="logo" onClick = {this.DeletarTabela.bind(this)}/></div>
                            </div>
                            <div class="inp">
                                <div class="cima"></div>
                            </div>
                        </div>
                    </div>
                        );
                    }
                )
                }

                
                <div class="container2">
                        <di class="content">
                            <div class="textx">
                                Adicione o tipo de serviço
                            </div>
                        </di>   
                        <div class="content" id="form">
                                
                                
                            </div>
                            <div class="contentbtn">
                                <div class="jogacentro"><button type="button" id="add-campo"> + </button></div>
                                
                            </div>
                </div>
                <div class="container">
                    <div class="content">
                            <div class="tituloc">
                                <div class="texto">
                                    Observações
                                </div>
                            </div>
                            <div class="box">
                                <textarea class="texto1" placeholder="Caso exista alguma informação digite aqui" name="servico" id="servico_id" ></textarea>
                            </div>
                    </div>
                </div>
                
                <div class="container3">
                    <div class="content">
                        <div class="botaoe">
                            <button type="button" class="abrir" onClick={this.ExecutarCaptura.bind(this)}> Gerar PDF </button>
                            
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}
export default Form;