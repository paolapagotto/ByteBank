import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';

const cliente1 = new Cliente('Ricardo', 11122233304);

//alterando saldo de cliente COM CONSTRUTOR 
const contaCorrenteCliente1 = new ContaCorrente(cliente1, 1001);
console.log(contaCorrenteCliente1);

const contaPoupancaCliente1 = new ContaPoupanca(100, cliente1, 1001);
console.log(contaPoupancaCliente1);


