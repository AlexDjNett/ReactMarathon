const pizzaMenu = {
  SIZE_S: {param: "SIZE_S", price: 60, calorie: 300},
  SIZE_M: {param: "SIZE_M", price: 90, calorie: 450},
  SIZE_L: {param: "SIZE_L", price: 110, calorie: 600},
  KIND_MEAT: {param: "KIND_MEAT", price: 55, calorie: 230}, 
  KIND_FISH: {param: "KIND_FISH", price: 70, calorie: 150},     
  KIND_CHEESE: {param: "KIND_CHEESE", price: 50, calorie: 200},    
  KIND_VEGETARIAN: {param: "KIND_VEGETARIAN", price: 35, calorie: 50},
  INGREDIENT_TOMATOES: {param: "INGREDIENT_TOMATOES", price: 15, calorie: 5},
  INGREDIENT_PEPPER: {param: "INGREDIENT_PEPPER", price: 18, calorie: 5},
  INGREDIENT_BACON: {param: "INGREDIENT_BACON", price: 25, calorie: 40},
  INGREDIENT_OLIVES: {param: "INGREDIENT_OLIVES", price: 20, calorie: 0}
};

class PizzaMaker { 
    constructor(size, type){
		this.size = size;
		this.type = type;
		this.ingredients = [];
	}

	addIngredient(ingredient){
        const check = this.ingredients.some((elem) =>  elem.param === ingredient.param);

		this.ingredients.push(ingredient);

		check
			? console.log('Such an ingredient already exists!')
			: console.log(`${ingredient.param} has been added`);
	}

	deleteIngredient(ingredient){
		const index = [];
		this.ingredients.forEach((el, idx) => {
			if (el.param === ingredient.param) {
				index.push(idx);
			}
		});

		if (index.length > 0) {
			this.ingredients.splice(index[0], 1);
		}
		console.log(`${ingredient.param} has been deleted`);
	}

	getIngredients(){
		return this.ingredients;
	}

	getSize() {	
		return this.size.param;
	}

	getKind() {
		return this.type.param;
	}

	calculatePrice() {
    const arr = Object.values(this).flat();
    console.log(arr);
		return arr.reduce((reducer, elem) => reducer + elem.price, 0);
	}

	calculateCalories() {
		const arr = Object.values(this).flat();
		return arr.reduce((reducer, elem) => reducer + elem.calorie, 0);
	}
}

const pizza = new PizzaMaker(pizzaMenu.SIZE_M, pizzaMenu.KIND_MEAT); 

console.log("Size:", pizza.getSize());

console.log("Kind:", pizza.getKind());

console.log("calculatePrice:", pizza.calculatePrice());

console.log("calculateCalories:", pizza.calculateCalories());

console.log("getIngredients:", pizza.getIngredients());

pizza.addIngredient(pizzaMenu.INGREDIENT_TOMATOES);

pizza.addIngredient(pizzaMenu.INGREDIENT_BACON);

console.log("getIngredients:", pizza.getIngredients());

pizza.deleteIngredient(pizzaMenu.INGREDIENT_TOMATOES);

console.log("getIngredients:", pizza.getIngredients());

console.log("calculatePrice:", pizza.calculatePrice());

console.log("calculateCalories:", pizza.calculateCalories());