const Author = require("./author");

const john = new Author("John Doe");

const post = john.writePost("Titulo do post", "Lorem ipsum dolor sic...");

post.addComment("Paulo Pontes", "Muito bom!");
post.addComment("Rodrigo Duarte", "Interessante");

console.log(john);
console.log(post);
