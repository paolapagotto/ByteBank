import {Cliente} from './Cliente.js';
import {ContaCorrente} from './ContaCorrente.js';

const cliente1 = new Cliente();

cliente1.nome = 'Ricardo';
cliente1.cpf = 11122233304;

const cliente2 = new Cliente();

cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

//alterando saldo de cliente
const contaCorrenteCliente1 = new ContaCorrente();
contaCorrenteCliente1.agencia = 1001;
contaCorrenteCliente1.cliente = cliente1.nome; 
console.log(contaCorrenteCliente1.cliente);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;

//criando métodos para classe
//sacar:
contaCorrenteCliente1.sacar(30);

//depositar:
contaCorrenteCliente1.depositar(1000);

//transferir:
contaCorrenteCliente1.transferir(200, conta2);
console.log(conta2);

//const valorDepositado = contaCorrenteCliente1.depositar(50);
//const valorSacado = contaCorrenteCliente1.sacar(30);

console.log(conta2.saldo);

console.log(conta2.cliente);

console.log(contaCorrenteCliente1);


