class Cliente {

    nome;
    cpf;

}

class ContaCorrente {

    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
        }
    }
}



const cliente1 = new Cliente();

cliente1.nome = 'Ricardo';
cliente1.cpf = 11122233304;

const cliente2 = new Cliente();

cliente2.nome = 'Alice';
cliente2.cpf = 55522233304;

//alterando saldo de cliente
const contaCorrenteCliente1 = new ContaCorrente();
contaCorrenteCliente1.saldo = 0;
contaCorrenteCliente1.agencia = 1001;
console.log(contaCorrenteCliente1.saldo);
contaCorrenteCliente1.saldo = 100;
console.log(contaCorrenteCliente1.saldo);

//criando método para classe
contaCorrenteCliente1.sacar(30);
console.log(contaCorrenteCliente1.saldo);

console.log(cliente1, cliente2);


