const  btnCadatro = document.getElementById('btn-cadastro');
const btnCadastro2 = document.getElementById('btn-cadastro2');
const modal = document.getElementById('modal-cadastro');
const form = document.getElementById('form');

btnCadatro.onclick = function() {
    modal.style.display = 'block';
}

btnCadastro2.onclick = function() {
    modal.style.display = 'block';
}

window.onclick = function(e) {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome: nome,
        email: email
    };
    document.getElementById('nome').value = "";
    document.getElementById('email').value = "";
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);
    modal.style.display = 'none';
});