

function Cadastro(){
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let nascimento = document.getElementById("nascimento").value;
    let telefone = document.getElementById("telefone").value;

    let lista = document.getElementById("Lista-de-Cadastro");

    let Pessoas ={
        nome: nome,
        email: email,
        nascimento: nascimento,
        telefone: telefone
    }
    
    if(nome !== "" && email !== "" && nascimento !== "" && telefone !== ""){
        for (let i = 0; i < Pessoas.length; i++) {
            let tr = lista.insertRow();
            
            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_email = tr.insertCell();
            let td_nascimento = tr.insertCell();
            let td_telefone = tr.insertCell();
        }
    }else{
        alert("Preencha todos os campos!");
    }
}
