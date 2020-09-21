import { Cliente } from './Cliente.js';
import { ContaCorrente } from './ContaCorrente.js';
import { ContaPoupanca } from './ContaPoupanca.js';
import { Conta } from './Conta.js'


const cliente1 = new Cliente('Ricardo', 11122233304);

//alterando saldo de cliente COM CONSTRUTOR 
const contaCorrenteCliente1 = new ContaCorrente(50, cliente1, 1001);
//console.log(contaCorrenteCliente1);

const contaPoupancaCliente1 = new ContaPoupanca(100, cliente1, 1001);
//console.log(contaPoupancaCliente1);

contaPoupancaCliente1.depositar(400);
contaPoupancaCliente1.sacar(100);
console.log(contaPoupancaCliente1);

contaCorrenteCliente1.depositar(450);
contaCorrenteCliente1.sacar(100);
console.log(contaCorrenteCliente1);


