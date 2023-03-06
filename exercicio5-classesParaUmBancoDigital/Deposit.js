//Deposit:Deverá possuir um atributo para o valor e um atributo para a data de criação.
module.exports = class Deposit {
  constructor(value) {
    this.value = value;
    this.createdAt = new Date(); //Nova data, Date sem nenhum atributo, retorna a data atual
  }
};
