import {Cliente} from './Cliente.js'
import {ContaCorrente} from './ContaCorrente.js'

const cliente1 = new Cliente();

cliente1.nome = 'Ricardo';
cliente1.cpf = 11122233304;

//alterando saldo de cliente
const contaCorrenteCliente1 = new ContaCorrente();
contaCorrenteCliente1.agencia = 1001;

//criando métodos para classe
//sacar:
contaCorrenteCliente1.sacar(30);

//depositar:
contaCorrenteCliente1.depositar(-20);

const valorDepositado = contaCorrenteCliente1.depositar(50);
const valorSacado = contaCorrenteCliente1.sacar(30);

console.log(contaCorrenteCliente1);


