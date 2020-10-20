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
getPizzaOrder.prototype.finalPrice = function () {
    if (this.pizzaSize === "small") {
        this.sizePrice = 400;
    } else if (this.pizzaSize === "medium") {
        this.sizePrice = 700;
    }else if (this.pizzaSize === "large") {
        this.sizePrice = 1500;
    };
    if (this.crustType === "stuffed") {
        this.crustPrice = 150;
    } else if (this.crustType === "thick") {
        this.crustPrice = 200;
    }else if (this.crustType === "Crispy") {
        this.crustPrice = 150;
    }else if (this.crustType === "gluten-free") {
        this.crustPrice = 200;
    };
    if (this.pizzaSize === "small") {
        this.toppingPrice = 100;
    }else if (this.pizzaSize === "medium") {
        this.toppingPrice = 150;
    }else if (this.pizzaSize === "large") {
        this.toppingPrice = 200;
    };
    this.price =(this.sizePrice +this.crustPrice + this.toppingPrice) * this.pizzaQuantity;
};