var menu = {
  addDishToCourse: function(courseName, dishName, dishPrice) {
  	var dish = {
    	name: dishName,
    	price: dishPrice
  	};
  	this.courses[courseName].push(dish);
	},
  getRandomDish: function(courseName) {
    var dishes = this.courses[courseName];
    var randomNum = dishes.length * Math.random();
    return dishes[Math.floor(randomNum)];
  },
  generateRandomMeal: function() {
    var courses = ['appetizers', 'mains', 'desserts'];
    var meals = [];
    var names = [];
    var totalPrice = 0;
    for (const i in courses) {
    meals.push(this.getRandomDish(courses[i]));
    }
    for (const meal in meals) {
      totalPrice += meals[meal].price;
      names.push(meals[meal].name);
    }
    var firstChar = names[0][0].toUpperCase();
    names[0] = firstChar + names[0].slice(1);
    return `${names.join(', ')}. Total cost: ${totalPrice} dollars.`
  }
};

menu.courses = {
  appetizers: [],
	mains: [],
	desserts: [],
}

menu.addDishToCourse('appetizers', 'bruschetta', 8);
menu.addDishToCourse('appetizers', 'calamari', 12);
menu.addDishToCourse('appetizers', 'spinach dip', 9);
menu.addDishToCourse('appetizers', 'stuffed mushrooms', 11);

menu.addDishToCourse('mains', 'grilled salmon', 22);
menu.addDishToCourse('mains', 'chicken parmesan', 18);
menu.addDishToCourse('mains', 'beef tenderloin', 28);
menu.addDishToCourse('mains', 'vegetable lasagna', 16);

menu.addDishToCourse('desserts', 'tiramisu', 9);
menu.addDishToCourse('desserts', 'chocolate mousse', 7);
menu.addDishToCourse('desserts', 'apple pie', 8);
menu.addDishToCourse('desserts', 'crème brûlée', 10);

document.querySelector('body').innerHTML = menu.generateRandomMeal();