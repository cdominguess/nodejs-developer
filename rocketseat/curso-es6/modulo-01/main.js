class Teste {
    /**
     * Retorna os valores de um array conforme tipo passado com array FILTER
     * @param {array} arr 
     * @param {string} tipo
     * @returns {array} 
     */
    filtrarParImpar(arr, tipo) {
        let arrRetorno = arr.filter((valor, chave) => {
            if (tipo === 'P') {
                return valor % 2 === 0;
            } else {
                return valor % 2 !== 0;
            }
        });

        return arrRetorno;
    }

    /**
     * Retorna o tipo para cada valor de um array com array MAP
     * @param {array} arr 
     * @returns {string} 
     */
    retornarParImpar(arr) {
        let strRetorno = '';

        arr.map((valor) => {
            let tipo = '';
            if (valor % 2 === 0) {
                tipo = 'PAR';
            } else {
                tipo = 'ÍMPAR';
            }
            strRetorno += "\n - O valor " + valor + " é " + tipo;
        });

        return strRetorno;
    }

    /**
     * Soma dois valores, tendo valores default na assinatura do método
     * @param {integer} valor1 
     * @param {integer} valor2 
     */
    somarValores(valor1 = 2, valor2 = 4) {
        return valor1 + valor2;
    }

    /**
     * Soma N valores passados por parametro
     * @param  {...any} valores 
     */
    somarVariosValores(...valores) {
        // return valores.reduce((total, proximo) => total + proximo);
        let totalSoma = valores.reduce(function (acumulador, valorAtual) {
            return acumulador += valorAtual;
        });

        return totalSoma;
    }


}