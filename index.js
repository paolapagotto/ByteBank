import { Cliente } from './Cliente.js';
import { ContaCorrente } from './conta/ContaCorrente.js';
import { ContaPoupanca } from './conta/ContaPoupanca.js';
import { ContaSalario } from './conta/ContaSalario.js';


const cliente1 = new Cliente('Ricardo', 11122233304);

//alterando saldo de cliente COM CONSTRUTOR 
const contaCorrenteCliente1 = new ContaCorrente(50, cliente1, 1001);
//console.log(contaCorrenteCliente1);

const contaPoupancaCliente1 = new ContaPoupanca(100, cliente1, 1001);
//console.log(contaPoupancaCliente1);

const contaSalarioCliente1 = new ContaSalario(100, cliente1, 1001);
contaSalarioCliente1.sacar(10);
console.log(contaSalarioCliente1);



contaPoupancaCliente1.depositar(400);
contaPoupancaCliente1.sacar(100);
//console.log(contaPoupancaCliente1);

contaCorrenteCliente1.depositar(450);
contaCorrenteCliente1.sacar(100);
//console.log(contaCorrenteCliente1);


