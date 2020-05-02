const car = {
  model: "V-SZX",
  price: 1200,
  getInfo() {
    return (
      "El auto de modelo " + this.model + " tiene un precio de " + this.price
    );
  },
  getInfo2: (model, price) => {
    return "El auto de modelo " + model + " tiene un precio de " + price;
  },
  get getInfo3() {
    return (
      "El auto de modelo " + this.model + " tiene un precio de " + this.price
    );
  },

  set newPrice(nPrecio) {
    this.price = nPrecio;
  },
};

// console.log(car.getInfo());
// console.log(car.getInfo2(car.model, car.price));
// console.log(car.getInfo3);

// console.log(car.price);

car.newPrice = 1300;
// console.log(car.price);

const car2 = {
  model: "V-DZX",
  price: 1200,
};

/// Usando métodos en los objetos
const properties = Object.keys(car2);
const entries = Object.entries(car2);

const hasProperty = car2.hasOwnProperty("model");

const newCar2 = Object.assign({ color: "rojo" }, car2);
// console.log(newCar2, car2);
// console.log(hasProperty);
// console.log(properties);
// console.log(entries);

const { model, price } = car2;
// console.log(model, price);

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  getInfo() {
    return "Mi nombre es " + this.nombre + " y tengo " + this.edad + " años";
  }
  get getInfo2() {
    return "Mi nombre es " + this.nombre + " y tengo " + this.edad + " años";
  }
  set newAge(newAge) {
    this.edad = newAge;
  }
}

const persona = new Persona("Pedro", 23);
// console.log(persona.nombre);
// console.log(persona.edad);

const persona2 = new Persona("juan", 23);
// console.log(persona2.nombre);
// console.log(persona2.edad);
// console.log(persona2.getInfo());
// persona2.newAge = 40;
// console.log(persona2.edad);
