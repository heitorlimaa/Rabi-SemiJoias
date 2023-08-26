$(document).ready(function() {
    // Máscara para CPF
    $('input[name="cpf"]').inputmask("999.999.999-99");

    // Máscara para WhatsApp
    $('input[name="whatsapp"]').inputmask("(99) 99999-9999");

    // Máscara para Data de Nascimento
    $('input[name="data_nascimento"]').inputmask("99/99/9999");

    // Limitar CEP a 8 caracteres
    $('input[name="cep"]').inputmask("99999-999");
});

function buscaCep() {
    let cep = document.getElementById('txtCep').value;
    if(cep !== ""){
        let url = "https://brasilapi.com.br/api/cep/v1/" + cep;

        let req = new XMLHttpRequest();
        req.open("GET", url);
        req.send();

        //tratar a resposta da requisição
        req.onload = function() {
            if(req.status === 200){
                let endereco = JSON.parse(req.response);
                document.getElementById("txtRua").value = endereco.street;
                document.getElementById("txtBairro").value = endereco.neighborhood;
                document.getElementById("txtCity").value = endereco.city;
                document.getElementById("txtState").value = endereco.state;
            }

            else if(req.status === 404) {
                alert("CEP inválido!");
            }

            else{
                alert("Erro ao fazer a requisição");
            }
        }
    }
}

window.onload = function() {
    let txtCep = document.getElementById("txtCep");
    txtCep.addEventListener("blur", buscaCep);
}

// DIV PARA BLOQUEAR DUPLO CLIQUE NO SUBMIT
var formID = document.getElementById("formID");
var send = document.getElementById("send");

var onSendClick = function (event) {
    if (formID.checkValidity()) {
        event.target.parentNode.classList.add("disabled");
        event.target.removeEventListener("click", onSendClick);
    }
}

send.addEventListener("click", onSendClick);