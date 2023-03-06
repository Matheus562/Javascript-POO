//Transfer:Deverá possuir atributos para: o usuário que enviou a transferência, o que recebeu a transferência, o valor e a data de criação.
module.exports = class Transfer {
  constructor(fromUser, toUser, value) {
    this.fromUser = fromUser;
    this.toUser = toUser;
    this.value = value;
    this.createdAt = new Date();
  }
};
