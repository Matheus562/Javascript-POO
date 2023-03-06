class Account {
  #password; //# inibe que o atributo seja modificado
  #balance;
  constructor(user) {
    this.email = user.email;
    this.#password = user.password;
    this.#balance = 0;
  }

  //validação do email
  getBalance(email, password) {
    if (this.#authenticate(email, password)) {
      return this.#balance;
    } else {
      return null;
    }
  }
  #authenticate(email, password) {
    return this.email === email && this.#password === password;
  }
}
const user = {
  email: "matheus@email.com",
  password: "12345",
};
const myAccount = new Account(user);
console.log(myAccount);
console.log(myAccount.getBalance("matheus@email.com", "12345"));
