import { Cliente } from './Cliente.js';

//Classe Abstrata
export class Conta {

    constructor(saldoInicial, cliente, agencia){
        
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
        console.log(this.constructor);
        if(this.constructor == Conta){
            throw new Error('Não instanciar um objeto do tipo Conta, pois esta é uma classe abstrata.');
        }
    }
    
    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor 
        }
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    sacar(valor){
        throw new Error('O método Sacar da Conta é abstrato')
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    }

    depositar(valor){
        if(valor > 0){
            this._saldo += valor
            return valor;
        }
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}