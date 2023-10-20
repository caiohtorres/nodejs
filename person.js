class Person {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return "Meu nome eh " + this.name;
  }
}

module.exports = {
  Person,
};
