document.getElementById('form-cadastro').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const name = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const senhaRepita = document.getElementById('campoDeConfirmeSenha').value;

    if(name && email && senha && senha === senhaRepita){
        alert('Bem vindo ' + name + ' \nPor favor clicar no botão Ok para continuar' )
        window.location.href = "http://127.0.0.1:5500/index.html";
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
});
