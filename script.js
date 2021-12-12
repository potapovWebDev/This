'use strict'
function showThis (a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b;
    }
    console.log(sum())
}
showThis(2, 3)

// 1) обычная функция this: this = window, но если включен 'use strict' то undefined

const obj = {
    a: 1,
    b: 2,
    sum: function() {
        console.log(this);
    }
};

obj.sum();

// 2) Контекст(this) у методов обьекта - сам обьект

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`hello ${this.name}`);
    };
}

const maksim = new User('maksim', 23);

// 3) this в коснтрукторах и классах - это новый экземпляр обьекта

function sayName(surname) {
    console.log(this);
    console.log(this.name);
    console.log(this.name + surname);
}

const user = {
    name: 'John'
};

sayName.call(user, ' Potapov');
sayName.apply(user, [' Potapov']);

// ===============================================

function count(num) {
    return this*num;
}

const double = count.bind(2);

console.log(double(4));

// 4) ручная привязка this: call, apply и bind


const btn = document.querySelector('button');

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  

btn.addEventListener('click', function() {
    this.style.background = `red`;
});

const objTwo = {
    num: 6,
    sayNumber: function() {
        const say = () => {
            console.log(this.num); // выдаст num
        };

        say();
    }
};