import { LightningElement } from 'lwc';

export default class Exemplo extends LightningElement {
    primeiroNome;
    sobrenome;
    email;
    website;
    empresa;
    receitaAnual;

    handleInputChange(event) {
        let field = event.target.name;
        let value = event.target.value;

        this[field] = value;
    }

    handleSalvar() {
        const dados = {
            primeiroNome: this.primeiroNome,
            sobrenome: this.sobrenome,
            email: this.email,
            website: this.website,
            empresa: this.empresa,
            receitaAnual: this.receitaAnual
        };

        console.log(dados);
    }
}
