/**
 * Recebe um array e monta a lista de produtos em HTML
 * @param {array} lista
 */
function setLista(lista) {
    var linhas = '';
    var total = 0;
    var chave;

    for (chave in lista) {
        linhas += '<tr>';
        linhas += '<td>' + formatDesc(lista[chave].descricao) + '</td>';

        linhas += '<td style="text-align: right;">' + lista[chave].qtde + '</td>';
        linhas += '<td style="text-align: right;">' + formatValor(lista[chave].valor) + '</td>';
        linhas += '<td style="text-align: center;">';
        linhas += '<button class="btn-link" onclick="editarItem(' + chave + ');">Editar</button>|';
        linhas += '<button class="btn-link" onclick="excluirItem(' + chave + ');">Excluir</button>';
        linhas += '</td>';
        linhas += '</tr>';

        // Calcula o total dos itens
        total += lista[chave].qtde * lista[chave].valor;
    }

    // Salva a lista no banco de dados local do navegador
    setListaStorage(lista);

    document.getElementById('list-table').innerHTML = linhas;
    document.getElementById('valor-total').innerHTML = formatValor(total);

}

/**
 * Adiciona um item ao topo da lista de produtos
 * @return {void}
 */
function adicionarItem() {
    if (validarForm()) {
        var descricao = document.getElementById('descricao').value;
        var qtde = document.getElementById('qtde').value;
        var valor = document.getElementById('valor').value;

        // Usar unshift para adicionar o novo produto no início da lista
        lista.unshift({'descricao': descricao, 'qtde': qtde, 'valor': valor});

        // Limpa os campos do formulário
        resetarForm();

        // Por fim chama a função para renderizar a lista atualizada
        setLista(lista);
    }
}

/**
 * Popula ou cancela o formulário para edição de produto
 * @param  {integer} id
 * @return {void}
 */
function editarItem(id) {
    // Oculta o botão de adicionar e exibe os botões de atualizar
    document.getElementById('btn-adicionar').style.display = 'none';
    document.getElementById('btn-atualizar').style.display = 'inline';

    // Popula o formulário
    var item = lista[id];
    document.getElementById('descricao').value = item.descricao;
    document.getElementById('qtde').value = item.qtde;
    document.getElementById('valor').value = item.valor;
    document.getElementById('id-atualizar').value = id;
}

/**
 * Efetua a atualização de um produto
 * @return {void}
 */
function atualizarItem() {

    if (validarForm()) {
        var id = document.getElementById('id-atualizar').value;

        // Atualiza o produto na lista de objetos
        lista[id].descricao = document.getElementById('descricao').value;
        lista[id].qtde = document.getElementById('qtde').value;
        lista[id].valor = document.getElementById('valor').value;

        // Chama a função de exibir a lista de produtos, e reinicia o formulário
        setLista(lista);
        resetarForm();
    }
}

/**
 * Remove um item da lista de produtos
 * @return {void}
 */
function excluirItem(id) {
    if (confirm('Você tem certeza que deseja excluir este item?')) {
        lista.splice(id, 1);
        setLista(lista);
    }
}

/**
 * Zera a lista de produtos
 * @return {void}
 */
function excluirLista(id) {
    if (confirm('Você tem certeza que deseja excluir os itens do carrinho?')) {
        lista = [];
        setLista(lista);
    }
}

/**
 * Cancela a edição de um produto
 * @return {void}
 */
function resetarForm() {
    // Oculta os botões de atualizar e exibe o botão de adicionar
    document.getElementById('btn-adicionar').style.display = 'inline';
    document.getElementById('btn-atualizar').style.display = 'none';
    document.getElementById('erros').style.display = 'none';

    // reseta o formulário
    document.getElementById('descricao').value = null;
    document.getElementById('qtde').value = null;
    document.getElementById('valor').value = null;
    document.getElementById('id-atualizar').value = null;
}

function validarForm() {
    var descricao = document.getElementById('descricao').value;
    var qtde = document.getElementById('qtde').value;
    var valor = document.getElementById('valor').value;

    var erros = '';

    if (descricao === '') {
        erros += '<p>Preencha o campo Descrição.</p>';
    }

    if (qtde === '') {
        erros += '<p>Preencha o campo Quantidade.</p>';
    } else if (qtde != parseInt(qtde)) {
        erros += '<p>O campo Quantidade deve conter somente números.</p>';
    }

    if (valor === '') {
        erros += '<p>Preencha o campo Valor.</p>';
    } else if (valor != parseFloat(valor)) {
        erros += '<p>O campo Valor deve conter somente números.</p>';
    }

    if (erros !== "") {
        document.getElementById('erros').style.display = 'block';
        document.getElementById('erros').innerHTML = '<h4>Corrija os erros antes de prosseguir:</h4>' + erros;

        return false;
    } else {
        document.getElementById('erros').style.display = 'none';
        return true;
    }
}

/**
 * Formata a descrição
 * @param  {string} valor
 * @return {string}
 */
function formatDesc(valor) {
    var strAux = valor.toLowerCase();
    var str = valor.charAt(0).toUpperCase() + strAux.slice(1);

    return str;
}

/**
 * Formata o valor
 * @param  {string} valor
 * @return {string}
 */
function formatValor(valor) {
    return 'R$' + parseFloat(valor).toFixed(2).replace('.', ',') + '';
}

/**
 * Salva a lista no banco de dados local do navegador
 * @param  {string} lista
 * @return {void}
 */
function setListaStorage(lista) {
    var strDados = JSON.stringify(lista);
    localStorage.setItem('lista', strDados);
}

function getListaStorage() {
    var dados = localStorage.getItem('lista');

    if (dados) {
        lista = JSON.parse(dados);
        setLista(lista);
    }

}

/*
 * Chama a funcção que busca a lista do banco local
 */
getListaStorage();