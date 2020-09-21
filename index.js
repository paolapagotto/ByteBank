import {Cliente} from './Cliente.js';
import {ContaCorrente} from './ContaCorrente.js';

const cliente1 = new Cliente('Ricardo', 11122233304);

const cliente2 = new Cliente('Alice', 88822233309);
//cliente2.cpf = 00000000; não permite alterar este atributo!
console.log(cliente2.cpf);

//alterando saldo de cliente COM CONSTRUTOR 
const contaCorrenteCliente1 = new ContaCorrente(cliente1, 1001);
const conta2 = new ContaCorrente(cliente2, 1002);


//criando métodos para classe
//sacar:
contaCorrenteCliente1.sacar(30);

//depositar:
contaCorrenteCliente1.depositar(1000);

//transferir:
contaCorrenteCliente1.transferir(200, conta2);

//const valorDepositado = contaCorrenteCliente1.depositar(50);
//const valorSacado = contaCorrenteCliente1.sacar(30);




