const Installment = require("./Installment");

/*Loan:Deverá possuir um atributo estático privado para a taxa de juros e que possuir um getter estático para ler o atributo privado e um setter estático para definir uma nova taxa de 
juros a partir de uma porcentagem.Deverá possuir os atributos para o valor do empréstimo e para a data de criação.Também deverá possuir um atributo para as parcelas do empréstimo, 
sendo que o construtor deve ter como parâmetro o número de parcelas e então deve calcular as parcelas (instâncias de Installments) e armazená-las nesse atributo.*/
module.exports = class Loan {
  static #rate = 1.05; //taxa de juros

  constructor(value, installments) {
    this.value = value;
    this.installments = [];
    for (let i = 1; i <= installments; i++) {
      this.installments.push(
        new Installment((value * Loan.#rate) / installments, i)
      );
    }
    this.createdAt = new Date();
  }

  //Lê o atributo privado
  static get rate() {
    return Loan.#rate;
  }

  //altera a taxa de juros
  static set rate(newRatePercentage) {
    Loan.#rate = 1 + newRatePercentage / 100;
  }
};
