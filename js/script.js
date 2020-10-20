function getPizzaOrder(pizzaType,crustType,extraToppings,pizzaQuantity,delivery,pizzaSize) {
    this.pizzaType = pizzaType;
    this.crustType = crustType;
    this.extraToppings = extraToppings;
    this.pizzaQuantity = pizzaQuantity;
    this.delivery = delivery;
    this.pizzaSize = pizzaSize;
    this.sizePrice=0;
    this.crustPrice = 0;
    this.toppingPrice = 0;
    this.deliveryPrice = 0;
    this.price = 0;
};