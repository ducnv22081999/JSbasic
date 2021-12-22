class Dog {
  // Tạo các thuộc tính (property)
  constructor(name, color, type) {
    this.name = name;
    this.color = color;
    this.type = type;
  }

  // Thêm vào các phương thức (method)
  bark() {
    console.log(`${this.name} barks: Go Go Go`);
  }
}

let milu = new Dog("Milu", "Black", "Becgie");

milu.bark(); // Milu barks: Go Go Go
