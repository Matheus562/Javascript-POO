/*const book = {
  title: "Eragon",
  pages: 468,
  published: true,
  inStock: 20,
  tags: ["fantasy", "adventure", "medieval"],
  author: {
    name: "Christopher Paolini",
  },
  addOnStock(quantity) {
    this.inStock += quantity;
  },
  /*save: function () {
    //salva no banco de dados
  },
};*/

//função construtora
//PascalCase
function Book(title, pages, tags, author) {
  this.title = title;
  this.pages = pages;
  this.tags = tags;
  this.author = author;
  this.published = false; //todos os livros vão começar com uma condição inicial de não publicado
  this.inStock = 0; //estoque inicialmente zerado
  this.addOnStock = function addOnStock(quantity) {
    this.inStock += quantity;
  };
  this.save = function () {
    //salva no banco de dados
  };
}
const author = { name: "Christopher Paolini" };
const tags = ["fantasy", "adventure", "medieval"];

/*console.log(book);

book.addOnStock(50);

//console.log(book.inStock); precisa habilitar o save
book.save = function () {
  //salva no banco de dados
};
console.log(book);*/
const eragon = new Book("Eragon", 468, tags, author);
console.log(eragon);

eragon.addOnStock(20);

const eldest = new Book("Eldest", 644, tags, author);

console.log(eragon);
console.log(eldest);
