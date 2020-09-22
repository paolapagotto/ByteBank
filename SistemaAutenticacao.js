/* 
ser autenticavel significa ter a propriedade "senha"

duck typing => ducky type
*/

export class SistemaAutenticacao {
    static login(autenticavel, senha){
        return autenticavel.autenticar(senha);
    }
}