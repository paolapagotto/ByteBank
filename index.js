class Cliente {

    nome;
    cpf;

}

class ContaCorrente {

    agencia;
    _saldo = 0;
    //#saldo = 0;

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            console.log(this._saldo);
        }
    }

    depositar(valor){
        if(valor > 0){
            this._saldo += valor
            console.log(this._saldo);
        }
    }
}
//campos privados: # ou _ private field



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

contaCorrenteCliente1.saldo += 100;
console.log(contaCorrenteCliente1.saldo);

//criando métodos para classe
//sacar:
contaCorrenteCliente1.sacar(30);
console.log(contaCorrenteCliente1.saldo);
//depositar:
contaCorrenteCliente1.depositar(-20);
console.log(contaCorrenteCliente1.saldo);

console.log(contaCorrenteCliente1);
console.log(cliente1, cliente2);


