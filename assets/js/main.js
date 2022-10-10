const form = document.getElementById('formulario');
let linhas = '';
const atividades = [];
const numeros = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adcionaLinha();
    atualizaTabela();
});

function adcionaLinha() {
    const nomeContato = document.getElementById('nome__contato');
    const numeroContato = document.getElementById('numero__contato');

    if(atividades.includes(nomeContato.value)) {
        alert(`Atividade: ${nomeContato.value} já inserida`);
    }
    else {
        atividades.push(nomeContato.value);
        numeros.push(numeroContato.value);

        let linha = `<tr>`;
        linha += `<td>${nomeContato.value}</td>`;
        linha += `<td>${numeroContato.value}</td>`;
        linha += `</tr>`

        linhas += linha;
    };

    nomeContato.value = '';
    numeroContato.value = '';
};

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};