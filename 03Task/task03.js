// Task 3.1
var areasIteam = document.querySelectorAll('.areas__item');

var clickHandler = function (event) {

    var target = this.querySelector('.area');
    if (event.target.className !== target.className) {
        return;
    }
    var circleElement = document.createElement('div');
    var colorInput = this.querySelector('.areas__item-color');
    var color = colorInput.value;
    circleElement.classList.add('circle');
    circleElement.style.top = event.offsetY + 'px';
    circleElement.style.left = event.offsetX + 'px';
    circleElement.style.backgroundColor = color;

    var selectBlock = this.querySelector('.selFigure');
    var figure = selectBlock.querySelector('input:checked');
    var heightFigure = selectBlock.querySelector('input[name="height"]');
    var widthFigure = selectBlock.querySelector('input[name="width"]');
    switch (figure.value) {
        case 'circle':
            circleElement.style.height = heightFigure.value + 'px';
            circleElement.style.width = heightFigure.value + 'px';
            break;
        case 'square':
            circleElement.style.height = heightFigure.value + 'px';
            circleElement.style.width = heightFigure.value + 'px';
            circleElement.style.borderRadius = 0;
            break;
        case 'rectangle':
            circleElement.style.height = heightFigure.value + 'px';
            circleElement.style.width = widthFigure.value + 'px';
            circleElement.style.borderRadius = 0;
            break;
        case 'oval':
            circleElement.style.height = heightFigure.value + 'px';
            circleElement.style.width = widthFigure.value + 'px';
            circleElement.style.borderRadius = 50 + '%';
            break;

    }
    target.appendChild(circleElement);

}
for (var i = 0; i < areasIteam.length; i++) {
    areasIteam[i].addEventListener('click', clickHandler);

}

// Task 3.2
const SIZES = [
    { name: 'small', price: 50, calories: 20 },
    { name: 'big', price: 100, calories: 40 }
];
const STUFFINGS = [
    { name: 'cheese', price: 10, calories: 20 },
    { name: 'salad', price: 20, calories: 5 },
    { name: 'potatoes', price: 15, calories: 10 }
];
const TOPPINGS = [
    { name: 'flavoring', price: 15, calories: 0 },
    { name: 'mayonnaise', price: 20, calories: 5 },
];

class Burger {
    toppings = [];
    constructor(size = SIZES[0], stuffing = STUFFINGS[0]) {
        this.size = size;
        this.stuffing = stuffing;
    }
    getSize() {
        return this.size;
    }
    getStuffing() {
        return this.stuffing;
    }
    addTopping(topping) {
        this.toppings.push(topping);
    }
    removeTopping(topping) {
        for (var i = 0; i < this.toppings.length; i++) {
            if (this.toppings[i] === topping) {
                this.toppings.splice(i, 1);
                i--;// бред при 1-м элементе, но работает
            }
        }
    }
    getToppings() {
        return this.toppings;
    }
    calculatePrice() {
        var summ = this.getSize().price + this.getStuffing().price;
        this.getToppings().forEach(element => {
            summ += element.price;
        });
        return summ;
    }
    calculateCalories() {
        var summ = this.getSize().calories + this.getStuffing().calories;
        for (var i = 0; i < this.toppings.length; i++) {
            summ += this.toppings[i].calories;
        }
        return summ;
    }
}

var burger1 = new Burger();
console.log(burger1);
console.log(burger1.getSize());
console.log(burger1.getStuffing());
burger1.addTopping(TOPPINGS[0]);
burger1.addTopping(TOPPINGS[0]);
console.log(burger1);
// burger1.removeTopping(TOPPINGS[0]);
// console.log(burger1);
console.log(burger1.getToppings());
console.log(burger1.calculatePrice());
console.log(burger1.calculateCalories());