

function Cadastro(){
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let nascimento = document.getElementById("nascimento").value;
    let telefone = document.getElementById("telefone").value;

    let lista = document.getElementById("Lista-de-Cadastro");

    let Pessoa ={
        id : lista.childElementCount,
        nome: nome,
        email: email,
        nascimento: nascimento,
        telefone: telefone

    }

    let Pessoas = [];

    Pessoas.push(Pessoa);

    if(nome !== "" && email !== "" && nascimento !== "" && telefone !== ""){
        lista.innerText = '';
        for (let i = 0; i < Pessoas.length; i++) {
            let tr = lista.insertRow();
           
            let td_id = tr.insertCell();
            let td_nome = tr.insertCell();
            let td_email = tr.insertCell();
            let td_nascimento = tr.insertCell();
            let td_telefone = tr.insertCell();

              
            td_id.innerText =  this.Pessoas[i].id;
            td_nome.innerText =  this.Pessoas[i].nome;
            td_email.innerText =  this.Pessoas[i].email;
            td_nascimento.innerText =  this.Pessoas[i].nascimento;
            td_telefone.innerText =  this.Pessoas[i].telefone;
        }
    }else{
        alert("Preencha todos os campos!");
    }
}
