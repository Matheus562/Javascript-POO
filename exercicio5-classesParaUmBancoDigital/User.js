const Account = require("./Account");

//User:Deve possuir atributos para nome completo, email e conta.
module.exports = class User {
  constructor(email, fullname) {
    this.email = email;
    this.fullname = fullname;
    this.account = new Account(this);
  }
};
