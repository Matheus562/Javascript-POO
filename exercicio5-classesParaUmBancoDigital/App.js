const Deposit = require("./Deposit");
const Loan = require("./Loan");
const Transfer = require("./Transfer");
const User = require("./User");

/*App:Deve possuir um atributo estático privado para a lista dos usuários do app.Deve possuir um método estático para criar um novo usuário que só permite criar um usuário por email, 
ou seja, se o email já estiver sendo usado por outro usuário não deverá ser utilizado novamente.Deve possuir um método estático para encontrar um usuário a partir do seu email.Deve
 possuir métodos estáticos para realizar as operações de depósito, transferência e empréstimo. Elas devem ter como parâmetro as informações necessárias, como o email do usuário que está 
 realizando a operação e o valor.Deve possuir um método para alterar a taxa dos empréstimos.*/
module.exports = class App {
  static #users = [];

  //verifica se o email está cadastrado
  static findUser(email) {
    const user = this.#users.find((user) => user.email === email); //find executa uma callback para cada elemento do array até retornar true se encontrar o elemento desejado. Caso contrario undefined
    return user ?? null; //Se encontrar algo retorna como usuário, caso contrario retorna null
  }
  static createUser(email, fullname) {
    const userExists = App.findUser(email);
    //Se o usuário não existir, cria um novo
    if (!userExists) {
      this.#users.push(new User(email, fullname));
    }
  }
  static deposit(email, value) {
    const user = App.findUser(email);
    //Se o usuário existir
    if (user) {
      const newDeposit = new Deposit(value);
      user.account.addDeposit(newDeposit);
    }
  }

  static transfer(fromUserEmail, toUserEmail, value) {
    const fromUser = App.findUser(fromUserEmail);
    const toUser = App.findUser(toUserEmail);
    if (fromUser && toUser) {
      const newTransfer = new Transfer(fromUser, toUser, value);
      fromUser.account.addTransfer(newTransfer);
      toUser.account.addTransfer(newTransfer);
    }
  }
  static takeLoan(email, value, numberOfInstallments) {
    const user = App.findUser(email);
    if (user) {
      const newLoan = new Loan(value, numberOfInstallments);
      user.account.addLoan(newLoan);
    }
  }

  //Muda a taxa do emprestimo
  static changeLoanRate(newRatePercentage) {
    Loan.rate = newRatePercentage;
  }
};
