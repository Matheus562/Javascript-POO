//Installment:Deve possuir atributos para: o valor da parcela, o número dela e sua situação (paga ou pendente)
module.exports = class Installment {
  constructor(value, number) {
    this.value = value;
    this.number = number;
    this.status = "pending";
  }
};
