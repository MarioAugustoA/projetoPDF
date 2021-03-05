import DELETE from '../../assets/images/DELETE.svg'

class Criar{

    selecinarCima(key){
        var i = document.querySelectorAll(".containercria")[key];
        var inp = i.querySelector('.inp');
        var cima = inp.querySelector('.cima');
        return cima;
    }

    deletarCampo(e){
        var div_lixo = e.target.parentNode;
        var div_cria = div_lixo.parentNode;
        var div_esquerda = div_cria.parentNode;
        div_esquerda.remove();
    
    }

    criarCampos(key, valor){
        var div_esquerda = document.createElement("div");
        div_esquerda.classList.add('esquerda1');
        div_esquerda.key = key;
        div_esquerda.id = key;

        var div_cria = document.createElement("div");
        div_cria.classList.add('cria');

        var div_lixo = document.createElement("div");
        div_lixo.classList.add('lixo');

        var label = document.createElement("label");
        label.for = "user";
        label.textContent = valor;

        var input = document.createElement("input");
        input.classList.add('cliente');

        var img = document.createElement("img");
        img.src = DELETE;
        img.id = key;
        img.onclick = this.deletarCampo.bind(this);

        var cima = this.selecinarCima(key);

        div_lixo.appendChild(img);
        div_cria.appendChild(input);
        div_cria.appendChild(div_lixo);
        div_esquerda.appendChild(label);
        div_esquerda.appendChild(div_cria);
        cima.appendChild(div_esquerda);
    }
}

export default Criar;