
/**
 * Cria uma classe de objeto Pessoa no JS -------------------------------------------------------------------
 * @returns {Pessoa}
 */
function Pessoa() {
    /*
     * Atributos públicos da classe
     */
    this.nome = '';
    this.idade = 0;
    this.sexo = '';
    
    
    /*
     * Métodos privados da classe
     */
    var nadar = function() {
        return console.log('Eu também sei nadar;');   
    };
    
    
    /*
     * Métodos públicos da classe
     */
    this.andar = function(sabeNadar) {
        if (sabeNadar === true) {
            return nadar();
        }
        
        return console.log('Eu sei andar;');
    };
}


/**
 * Cria uma classe de objeto PessoaEncapsulada no JS --------------------------------------------------------
 * @returns {PessoaEncapsulada}
 */
function PessoaEncapsulada() {
    /*
     * Atributos públicos da classe
     */
    var nome = '';
    var idade = 0;
    var sexo = '';
    
    /*
     * Getters da classe
     */
    this.getNome = function() {
        return nome;
    };
    this.getIdade = function() {
        return idade;
    };
    this.getSexo = function() {
        return sexo;
    };
    
    /*
     * Setters da classe
     */
    this.setNome = function(pNome) {
        nome = pNome;
    };
    this.setIdade = function(pIdade) {
        idade = pIdade;
    };
    this.setSexo = function(pSexo) {
        sexo = pSexo;
    };
}


/**
 * Cria a classe de objeto Endereço -------------------------------------------------------------------------
 * @returns {Endereco}
 */
function Endereco() {
    var logradouro = '';
    var numero = '';
    var cidade = '';
}
Endereco.prototype.getLogradouro = function() {
    return logradouro;
};
Endereco.prototype.getNumero = function() {
    return numero;
};
Endereco.prototype.getCidade = function() {
    return cidade;
};
Endereco.prototype.setLogradouro = function(pLogradouro) {
    logradouro = pLogradouro;
};
Endereco.prototype.setNumero = function(pNumero) {
    numero = pNumero;
};
Endereco.prototype.setCidade = function(pCidade) {
    cidade = pCidade;
};


/**
 * Cria a classe de objeto PessoaPrototipo para usar como prototype -----------------------------------------
 * Este conceito serve para criar objetos "prototipos" que poder~ao ser herdados por outras functions e objetos
 * 
 * @returns {PessoaPrototipo}
 */
function PessoaPrototipo() {
    var nome = '';
    var idade = 0;
}
/*
 * Para herdar um objeto no JS:
 * - Cria-se o objeto aqui no caso Endereco ANTES do objeto que vai herdar, no caso PessoaPrototipo;
 * - Utiliza-se dos dois comandos abaixo: 
 *   - O primeiro diz que o prototipo base para o objeto PessoaPrototipo sera o Endereco;
 *   - O Segundo diz que o cnotrutor do objeto PessoaPrototipo devera ser ele mesmo.
 */
PessoaPrototipo.prototype = new Endereco();
PessoaPrototipo.prototype.constructor = PessoaPrototipo;

PessoaPrototipo.prototype.getNome = function() {
    return nome;
};
PessoaPrototipo.prototype.getIdade = function() {
    return idade;
};
PessoaPrototipo.prototype.setNome = function(pNome) {
    nome = pNome;
};
PessoaPrototipo.prototype.setIdade = function(pIdade) {
    idade = pIdade;
};


/**
 * Cria a classe de objeto novamente de Endereço ------------------------------------------------------------
 * @returns {Endereco1}
 */
function Endereco1() {
    this.logradouro1 = '';
    this.numero1 = '';
    this.cidade1 = '';
}


/**
 * Cria a classe de objeto novamente de Pessoa --------------------------------------------------------------
 * @returns {Pessoa1}
 */
function Pessoa1() {
    this.nome1 = '';
    this.idade1 = '';
}


/**
 * Classe abstrata que sera implementada em outras ----------------------------------------------------------
 * Os seus atributos e métodos devem ser criados via prototype, pois depois ao serem implementados serão chamados dessa maneira
 * 
 * @returns {Animal}
 */
function Animal() {
    throw 'Esta é uma classe abstrata, não pode ser instanciada!';
}
Animal.prototype.nome = '';
Animal.prototype.som = '';
Animal.prototype.emiteSom = function() {
    return console.log('O '+this.nome+' emite um '+this.som);
};


/**
 * Classe de objeto do Cachorro -----------------------------------------------------------------------------
 * @returns {Cachorro}
 */
function Cachorro() {
    this.nome = 'Cachorro';
    this.som = 'latido';
}


/**
 * Classe de objeto do Gato  --------------------------------------------------------------------------------
 * @returns {Gato}
 */
function Gato() {
    this.nome = 'Gato';
    this.som = 'miado';
}


var objPessoa = new Pessoa();
console.log('Tipo da instância de "Pessoa()":');
console.log(typeof objPessoa);

console.log('Objeto "Pessoa()":');
console.log(objPessoa);
objPessoa.andar();
objPessoa.andar(true);


console.log('--------------------------------------------------------------------------------');


var objPessoaEncapsulada = new PessoaEncapsulada();
console.log('Objeto "PessoaEncapsulada()":');
console.log(objPessoaEncapsulada);

// Seta atributos
objPessoaEncapsulada.setNome('Carlos Domingues');
objPessoaEncapsulada.setIdade(37);
objPessoaEncapsulada.setSexo('M');

// Imprime atributos
console.log('Dados preenchidos em "PessoaEncapsulada()":');
console.log(objPessoaEncapsulada.getNome());
console.log(objPessoaEncapsulada.getIdade());
console.log(objPessoaEncapsulada.getSexo());


console.log('--------------------------------------------------------------------------------');


var pessoaProtoHeranca = new PessoaPrototipo();
pessoaProtoHeranca.setNome('Carlos F. Domingues');
pessoaProtoHeranca.setIdade(37);
pessoaProtoHeranca.setLogradouro('Rua Tenente Caminha');
console.log('Entendendo o objeto com atributos em prototype e HERANÇA:');
console.log(pessoaProtoHeranca);
console.log(pessoaProtoHeranca.getNome(), pessoaProtoHeranca.getIdade(), pessoaProtoHeranca.getLogradouro());


console.log('--------------------------------------------------------------------------------');


// Instancio o objeto Pessoa
var pessoaHeranca2 = Object.create(new Endereco1());

// Defino que o contrutor dessa classe será uma instância dele mesmo
pessoaHeranca2.constructor = new Pessoa1();
console.log('HERANÇA de outra maneira:');
console.log(pessoaHeranca2);


console.log('--------------------------------------------------------------------------------');


// Para estender de uma classe abstrata: define o protótipo das classes com o objeto a ser estendido
Cachorro.prototype = Object.create(Animal.prototype);
Gato.prototype = Object.create(Animal.prototype);

console.log('Trabalhando com classes abstratas e extendendo a mesma:');
console.log(new Cachorro().emiteSom());
console.log(new Gato().emiteSom());
