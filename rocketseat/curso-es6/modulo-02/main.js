import * as funcoes from './funcoes';
import multiplicar from './multiplicar';

console.log('Importando função {soma} de um módulo JS e passando os parâmetros (2,2):');
console.log(funcoes.soma(2,2));

console.log('Importando função {sub} de um módulo JS e passando os parâmetros (10,2):');
console.log(funcoes.sub(10,2));

console.log('Importando função default multiplicar de um módulo JS e passando os parâmetros (10,2):');
console.log(multiplicar(10,2));