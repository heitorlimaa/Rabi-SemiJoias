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

function validarCPF(cpf) {	
	cpf = cpf.replace(/[^\d]+/g,'');	
	if(cpf == '') return false;	
	// Elimina CPFs invalidos conhecidos	
	if (cpf.length != 11 || 
		cpf == "00000000000" || 
		cpf == "11111111111" || 
		cpf == "22222222222" || 
		cpf == "33333333333" || 
		cpf == "44444444444" || 
		cpf == "55555555555" || 
		cpf == "66666666666" || 
		cpf == "77777777777" || 
		cpf == "88888888888" || 
		cpf == "99999999999")
			return false;		
	// Valida 1o digito	
	add = 0;	
	for (i=0; i < 9; i ++)		
		add += parseInt(cpf.charAt(i)) * (10 - i);	
		rev = 11 - (add % 11);	
		if (rev == 10 || rev == 11)		
			rev = 0;	
		if (rev != parseInt(cpf.charAt(9)))		
			return false;		
	// Valida 2o digito	
	add = 0;	
	for (i = 0; i < 10; i ++)		
		add += parseInt(cpf.charAt(i)) * (11 - i);	
	rev = 11 - (add % 11);	
	if (rev == 10 || rev == 11)	
		rev = 0;	
	if (rev != parseInt(cpf.charAt(10)))
		return false;		
	return true;   
}
