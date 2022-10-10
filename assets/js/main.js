const form = document.getElementById('formulario');
let linhas = '';
const atividades = [];
const numeros = [];

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adcionaLinha();
    atualizaTabela();
});

function adcionaLinha() {
    const nomeContato = document.getElementById('nome__contato');
    const numeroContato = document.getElementById('numero__contato');

    if (atividades.includes(nomeContato.value)) {
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

function mask(o, f) {
    setTimeout(function () {
        var v = mphone(o.value);
        if (v != o.value) {
            o.value = v;
        }
    }, 1);
};

function mphone(v) {
    var r = v.replace(/\D/g, "");
    r = r.replace(/^0/, "");
    if (r.length > 10) {
        r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (r.length > 5) {
        r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (r.length > 2) {
        r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
        r = r.replace(/^(\d*)/, "($1");
    };
    return r;
};