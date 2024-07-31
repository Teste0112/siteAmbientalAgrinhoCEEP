function consultaEndereco(){
    var cep = document.querySelector('#cep').value;

    if(cep.length !== 8){
        alert('CEP inválido');
        return;
    }

    var url = "https://viacep.com.br/ws/" + cep + "/json/";

    fetch(url).then(function(response){
        return response.json();
    }).then(function(data){
        if (data.erro) {
            alert('CEP não encontrado');
            return;
        }
        document.querySelector('#logradouro').value = data.logradouro;
        document.querySelector('#bairro').value = data.bairro;
        document.querySelector('#cidade').value = data.localidade;
        document.querySelector('#uf').value = data.uf;
    }).catch(function(error){
        console.error('Erro ao consultar o CEP:', error);
    });
}


function redirecionar(event){
    event.preventDefault();
    alert("Entraremos em contato em breve!!");
    window.location.href = "http://127.0.0.1:5500/index.html";
}