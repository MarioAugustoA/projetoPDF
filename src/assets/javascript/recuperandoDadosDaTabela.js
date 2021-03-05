
class RecuperandoDados{
    constructor(){
        this.dados={};
    }

    buscar(){
        var form = document.querySelectorAll('.containercria');
        for(var i = 0; i < form.length; i++){ 
            var pegarTabelasIndividuais = form[i];
            var nomeDaTabela = pegarTabelasIndividuais.querySelector('.texto').textContent;
            var listaDeInputs = pegarTabelasIndividuais.querySelectorAll('input');
            var listaDaTabela = this.dados[nomeDaTabela] = []

            for(var count = 1; count < listaDeInputs.length; count++){
                var divPai =listaDeInputs[count].parentNode;
                var divAvo =  divPai.parentNode;
                var textoDaLabel = divAvo.querySelector('label').textContent;
                var textoDoInput = listaDeInputs[count].value;
                var lista = [textoDaLabel, textoDoInput];
                listaDaTabela.push(lista);
            }
        }
    }

}

export default RecuperandoDados;