import { LightningElement } from 'lwc';

export default class CalculoImc extends LightningElement {
    nome;
    peso;
    altura;
    imc;

    handleChangeNome(event) {
        this.nome = event.target.value;
    }

    handleChangePeso(event) {
        this.peso = event.target.value;
    }

    handleChangeAltura(event) {
        this.altura = event.target.value;
    }

    handleClick() {
        const imc = (this.peso / (altura * altura)).toFixed(2);
        this.imc = imc;
    }
}
