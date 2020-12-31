// Write your code here
class Breakfast {
  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}
class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad;
    this.drink = drink;
    this.soup = soup;
  }
}
class Dinner {
  constructor(salad, soup, entree, dessert) {
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    this._dessert = dessert;
  }
}
let dinner = new Dinner(salad, soup, entree, cheesecake);
