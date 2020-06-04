"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Teste = /*#__PURE__*/function () {
  function Teste() {
    _classCallCheck(this, Teste);
  }

  _createClass(Teste, [{
    key: "filtrarParImpar",

    /**
     * Retorna os valores de um array conforme tipo passado com array FILTER
     * @param {array} arr 
     * @param {string} tipo
     * @returns {array} 
     */
    value: function filtrarParImpar(arr, tipo) {
      var arrRetorno = arr.filter(function (valor, chave) {
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

  }, {
    key: "retornarParImpar",
    value: function retornarParImpar(arr) {
      var strRetorno = '';
      arr.map(function (valor) {
        var tipo = '';

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

  }, {
    key: "somarValores",
    value: function somarValores() {
      var valor1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
      var valor2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;
      return valor1 + valor2;
    }
    /**
     * Soma N valores passados por parametro
     * @param  {...any} valores 
     */

  }, {
    key: "somarVariosValores",
    value: function somarVariosValores() {
      for (var _len = arguments.length, valores = new Array(_len), _key = 0; _key < _len; _key++) {
        valores[_key] = arguments[_key];
      }

      // return valores.reduce((total, proximo) => total + proximo);
      var totalSoma = valores.reduce(function (acumulador, valorAtual) {
        return acumulador += valorAtual;
      });
      return totalSoma;
    }
  }]);

  return Teste;
}();
