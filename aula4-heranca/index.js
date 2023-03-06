class Property {
  constructor(area, price) {
    this.area = area;
    this.price = price;
  }
  getPriceSquareMeter() {
    return this.price / this.area;
  }
}

class House extends Property {} //House herda Property

const land = new Property(200, 50000);
const someHouse = new House(120, 200000);

console.log(land);
console.log(someHouse);
console.log(someHouse.getPriceSquareMeter()); //Chama o metodo presente dentro de Property e retorna o valor de House calculado
console.log(someHouse instanceof Property); //verifica se someHouse é uma instancia de Property

class Apartment extends Property {
  constructor(number, area, price) {
    //this.area = area
    super(area, price); //super referencia o constructor de Property
    this.number = number;
  }
  getFloor() {
    return this.number.slice(0, -2); // retorna o andar do apartamento pegando toda string, exceto os dois ultimos caracteres
  }
}

const apt = new Apartment("201", 100, 2000000);
console.log(apt);
console.log(apt.getFloor());
