var lista = [
{"descricao": "produto 1", "qtde": "10", "valor": "4.65"},
{"descricao": "produto 2", "qtde": "12", "valor": "1.67"},
{"descricao": "produto 3", "qtde": "3", "valor": "15.4"}
];

function getTotal(lista) {
	var total = 0;
	for (chave in lista) {
		total += lista[chave].qtde * lista[chave].valor;
	}

	return total;
}

/**
 * Recebe um array e monta a lista de produtos em HTML
 * @param {array}
 */
 function setLista(lista) {
 	var linhas = '';

 	for (chave in lista) {
 		linhas += '<tr>';
 		linhas += '<td>'+formatDesc(lista[chave].descricao)+'</td>';
 		linhas += '<td style="text-align: right;">'+lista[chave].qtde+'</td>';
 		linhas += '<td style="text-align: right;">'+formatValor(lista[chave].valor)+'</td>';
 		linhas += '<td style="text-align: center;">';
 		linhas += '<button class="btn-link" onclick="editarItem('+chave+');">Editar</button>|';
 		linhas += '<button class="btn-link" onclick="editarItem('+chave+', "S");">Excluir</button>';
 		linhas += '</td>';
 		linhas += '</tr>';
 	}

 	document.getElementById('list-table').innerHTML = linhas;
 }

/**
 * Adiciona um item ao topo da lista de produtos
 * @return {void}
 */
 function adicionarItem() {
 	var descricao = document.getElementById('descricao').value;	
 	var qtde = document.getElementById('qtde').value;	
 	var valor = document.getElementById('valor').value;

	// Usar unshift para adicionar o novo produto no início da lista
	lista.unshift({'descricao': descricao, 'qtde': qtde, 'valor': valor});

	// Por fim chama a função para renderizar a lista atualizada
	setLista(lista);
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
	var id = document.getElementById('id-atualizar').value;

	// Atualiza o produto na lista de objetos
	lista[id].descricao = document.getElementById('descricao').value;
	lista[id].qtde = document.getElementById('qtde').value;
	lista[id].valor = document.getElementById('valor').value;

	// Chama a função de exibir a lista de produtos, e reinicia o formulário
	setLista(lista);
	resetarForm();
}

/**
 * Cancela a edição de um produto
 * @return {void}
 */
function resetarForm() {
	// Oculta os botões de atualizar e exibe o botão de adicionar
	document.getElementById('btn-adicionar').style.display = 'inline';
	document.getElementById('btn-atualizar').style.display = 'none';

	// reseta o formulário
	document.getElementById('descricao').value = null;
	document.getElementById('qtde').value = null;
	document.getElementById('valor').value = null;
	document.getElementById('id-atualizar').value = null;
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

 setLista(lista);
 console.log(getTotal(lista));