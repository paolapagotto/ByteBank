
//clientes do Banco
const cliente1Nome = 'Ricardo';
const cliente1CPF = 11122233304;
const cliente1Agencia = 1001;
const cliente1Saldo = 0;

const cliente2Nome = 'Alice';
const cliente2CPF = 55522233304;
const cliente2Agencia = 1001;
const cliente2Saldo = 0;

console.log(cliente2Nome);


//criação de classe para Cliente e suas propriedades
class Cliente {

    nome;
    cpf;
    agencia;
    saldo;

}

//instanciando a classe Cliente
const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = 'Ricardo';
cliente1.cpf = 11122233304;
cliente1.agencia = 1001;
cliente1.saldo = 0;

//comand cmd + alt = multiplos cursores
cliente2.nome = 'Alice';
cliente2.cpf = 55522233304;
cliente2.agencia = 1001;
cliente2.saldo = 0;

console.log(cliente1, cliente2);


