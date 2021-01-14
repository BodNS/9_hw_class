//task1
class RangeValidator {
  constructor(from, to) {
    if (typeof from != "number") throw new Error("From not number");
    if (typeof to != "number") throw new Error("To not number");
    if (to <= from) throw new Error("Значение должно быть больше, чем from");
    this._from = from;
    this._to = to;
  }

  get from() {
    return this._from;
  }
  set from(value) {
    if (typeof value !== "number") throw new Error("Enter not number");
    this._from = value;
  }

  get to() {
    return this._to;
  }
  set to(value) {
    if (typeof value !== "number") throw new Error("Enter not number");
    if (value <= this._from)
      throw new Error("Значение должно быть больше, чем from");
    this._to = value;
  }

  getRange() {
    // массив с 2 числами диапазона
    return [...Array(2)].map(
      (e) =>
        (e = Math.floor(Math.random() * (this._to - this._from) + this._from))
    );
  }

  validate(value) {
    //входит ли число в диапазон
    return `Число${
      value >= this._from && value <= this._to ? "" : " не"
    } входит в диапазон`;
  }
}

r = new RangeValidator(2, 15);

//task2
class Painter {
  static count = 0;

  constructor(name, art) {
    this.name = name;
    this.art = art;
    Painter.count++;
  }

  get info() {
    return `${this.name} писал в стиле ${this.art}`;
  }
}

class Pictures extends Painter {
  static count = 0;
  constructor(pname, name, year) {
    super(name);
    this.pname = pname;
    this.year = year;
    Pictures.count++;
  }

  get info() {
    return `${this.name} написал ${this.pname} в ${this.year} году`;
  }
}

const p1 = new Painter("Vasnecov", "realizm");
const p3 = new Painter("Van Gog", "postimpressionizm");
const p2 = new Painter("Malevich", "avangardizm");

const pic1 = new Pictures("Alenushka", "Vasnecov1", 1881);
const pic3 = new Pictures("Irisi", "Van Gog", 1889);
const pic2 = new Pictures("Cherniy kvadrat", "Malevich", 1915);
