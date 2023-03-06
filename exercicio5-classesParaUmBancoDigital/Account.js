/*Account:Deve possuir atributos para: o saldo, todos os depósitos realizados, todos os empréstimos, todas as transferências e para o dono da conta.O atributo do saldo deve ser privado 
e somente de leitura, ou seja, seu valor não pode ser reatribuído, somente podendo ser modificado através dos depósitos, empréstimos e transferências.Deve possuir um método para fazer um
 novo depósito, onde o valor do deposito será acrescentado ao saldo e a instância de Deposit ao atributos array de depósitos.Deve possuir um método para fazer um novo empréstimo, que deverá
  acrescentar o valor do empréstimo ao saldo e salvar a instância de Loan no atributo array de empréstimos.Deve possuir um método de fazer uma transferência, onde é verificado se a 
  transferência foi feita para o dono da conta ou pelo dono da conta para outro usuário. Se feito para o dono da conta, o valor dela deve ser acrescentado ao saldo. Se feito pelo dono da 
  conta para outro usuário, o valor dela deve ser descontado do saldo. Além disso, a transferência deve ser salva no atributo array de transferências.*/
module.exports = class Account {
  #balance; //saldo
  constructor(user) {
    this.owner = user; //usuário dono da conta
    this.#balance = 0;
    this.deposits = [];
    this.loans = [];
    this.transfers = [];
  }
  get balance() {
    return this.#balance;
  }

  //adcionando um novo deposito
  addDeposit(deposit) {
    this.#balance += deposit.value;
    this.deposits.push(deposit);
  }

  //adcionando um novo imprestimo
  addLoan(loan) {
    this.#balance += loan.value;
    this.loans.push(loan);
  }

  //adcionando uma transferencia
  addTransfer(transfer) {
    if (transfer.toUser.eamil === this.owner.email) {
      this.#balance += transfer.value;
      this.transfers.push(transfer);
    } else if (transfer.fromUser.email == this.owner.eamil) {
      this.#balance -= transfer.value;
      this.transfers.push(transfer);
    }
  }
};
