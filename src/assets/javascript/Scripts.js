var cont = 1;
document.querySelector("#add-campo").click(function (){
    cont++;
    document.querySelector("#form").append('<div class="grupo" id="campo'+ cont +'"><label>Tipo de serviço:</label>  <select name="select"> <option value="tipo1">tipo1</option><option value="tipo2" selected>tipo2</option><option value="tipo3">tipo3</option></select><label class="val"> Valor: R$</label> <input type="text" id="id_valor" class="preco"/> <button id="'+ cont +'" class="btn-apagar">X</button></div>');
});

document.querySelector( "form" ).on( "click", ".btn-apagar", function() {
   var button_id =  $( this ).attr( "id");
   document.querySelector( '#campo'+ button_id +'' ).remove();
  });

function iniciaModal(modalID){
    const modal = document.getElementById(modalID);
    modal.classList.add('mostrar');
    modal.addEventListener('click', (e) => {
        if(e.target.id == modalID || e.target.className == 'fechar'){
            modal.classList.remove('mostrar')
        }
    })
}

const botao = document.querySelector('.abrir');
botao.addEventListener('click', function(){
    iniciaModal('modal-pdf');
})

function arrasta(){
    var  checkbox = document.getElementById("check");
    var principal = document.getElementById("principal");

    if (checkbox.checked == true){
        principal.style.right = "0"
    }else{
        principal.style.right = "-300px"
    }
}