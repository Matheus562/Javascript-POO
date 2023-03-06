/*### Treinando a Criação de Classes

Crie, em arquivos separados, as seguintes classes utilizando javascript:

- **User**, que deverá possuir:
    - um atributo **fullname**, atribuível na instanciação
    - um atributo **email**, atribuível na instanciação
    - um atributo **password**, atribuível na instanciação
    - um método login, que tem como parâmetros um email e uma senha e deve comparar esses parâmetros com o email e a senha do usuário e mostrar uma mensagem no console dizendo se o login foi bem sucedido ou não
- **Product**, que deverá possuir:
    - um atributo **name**, atribuível na instanciação
    - um atributo **description**, atribuível na instanciação
    - um atributo **price**, atribuível na instanciação
    - um atributo **inStock**, inicializado sempre em 0
    - um método **addToStock**, que tem como parâmetro a quantidade a ser adicionada em estoque e deve somar essa quantidade à variável inStock
    - um método **calculateDiscount**, que tem como parâmetro a percentagem de desconto a ser aplicada e retorne o valor do preço com o desconto aplicado.*/

//Criar classes sempre usando PascalCase
class User {
  constructor(fullname, email, password) {
    this.fullname = fullname;
    this.email = email;
    this.password = password;
  }
  //verificação se o email e senha estão escritos corretamente
  login(email, password) {
    if (this.email === email && this.password === password) {
      console.log("Login realizado com sucesso!");
    } else {
      console.log("Email ou senha incorreto!");
    }
  }
}
const john = new User("John Doe", "john@email.com", "1234");

console.log(john);
john.login("john@email.com", "1234");
