import { Cliente } from './Cliente.js';

import { ContaCorrente } from './conta/ContaCorrente.js';
import { ContaPoupanca } from './conta/ContaPoupanca.js';
import { ContaSalario } from './conta/ContaSalario.js';

import { Gerente } from './funcionarios/Gerente.js'
import { Diretor } from './funcionarios/Diretor.js'
import { SistemaAutenticacao } from './SistemaAutenticacao.js'

//Funcionarios

const diretor = new Diretor('Rodrigo', 11111122201, 10000);
diretor.cadastrarSenha('123456');
const gerente = new Gerente('Mara', 99988877701, 5000);
gerente.cadastrarSenha('12a34b');
const estaLogado = SistemaAutenticacao.login(diretor, '123456');
console.log(estaLogado);





//Cliente

const cliente1 = new Cliente('Ricardo', 11122233304);

//alterando saldo de cliente COM CONSTRUTOR 
const contaCorrenteCliente1 = new ContaCorrente(50, cliente1, 1001);
//console.log(contaCorrenteCliente1);

const contaPoupancaCliente1 = new ContaPoupanca(100, cliente1, 1001);
//console.log(contaPoupancaCliente1);

const contaSalarioCliente1 = new ContaSalario(100, cliente1, 1001);
contaSalarioCliente1.sacar(10);
//console.log(contaSalarioCliente1);

contaPoupancaCliente1.depositar(400);
contaPoupancaCliente1.sacar(100);
//console.log(contaPoupancaCliente1);

contaCorrenteCliente1.depositar(450);
contaCorrenteCliente1.sacar(100);
//console.log(contaCorrenteCliente1);


