// - Створити функцію конструктор яка дозволяє створювати об'єкти car,
// з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна.
// додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в
// поточний об'єкт car

// function Car(model, producer, yearStart, maxSpeed, motor) {
//     this.model = model;
//     this.producer = producer;
//     this.yearStart = yearStart;
//     this.maxSpeed = maxSpeed;
//     this.motor = motor;
//     this.drive = function () {
//         return `їдемо зі швидкістю ${this.maxSpeed} на годину`
//     };
//     this.info = function () {
//         return `Moдель - ${this.model},
//                 Виробник - ${this.producer},
//                 Рік випуску - ${this.yearStart},
//                 Максимальна швидкість - ${this.maxSpeed},
//                 Обє'м двигуна - ${this.motor}`
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         return this.maxSpeed = newSpeed
//     }
//     this.changeYear = function (newValue) {
//         return this.yearStart = newValue
//     }
//     this.addDriver = function (driver) {
//         return this.driver = driver
//     }
// }
//
// let car1 = new Car('Megane', 'Renault', 2010, 190, 1.5)
// console.log(car1)
// console.log(car1.drive())
// console.log(car1.info())
// console.log(car1.increaseMaxSpeed(210))
// console.log(car1.changeYear(2012))
// console.log(car1.addDriver('Stepan'))
// console.log(car1)

//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний
// об'єкт car
//
// class Car{
//     constructor(model, producer, yearStart, maxSpeed, motor) {
//         this.model = model;
//         this.producer = producer;
//         this.yearStart = yearStart;
//         this.maxSpeed = maxSpeed;
//         this.motor = motor;
//     }
//     drive  () {
//         return `їдемо зі швидкістю ${this.maxSpeed} на годину`
//     };
//     info  () {
//         return `Moдель - ${this.model},
//                 Виробник - ${this.producer},
//                 Рік випуску - ${this.yearStart},
//                 Максимальна швидкість - ${this.maxSpeed},
//                 Обє'м двигуна - ${this.motor}`
//     };
//     increaseMaxSpeed  (newSpeed) {
//         return this.maxSpeed = newSpeed
//     }
//     changeYear  (newValue) {
//         return this.yearStart = newValue
//     }
//     addDriver  (driver) {
//         return this.driver = driver
//     }
//
// }
// let car1 = new Car('Megane', 'Renault', 2010, 190, 1.5)
// console.log(car1.drive())
// console.log(car1.info())
// console.log(car1.increaseMaxSpeed(210))
// console.log(car1.changeYear(2012))
// console.log(car1.addDriver({driver:'Stepan',age: 28}))
// console.log(car1)
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10
// попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// let ball = []
// class Cinderella {
//       constructor(name, age, size) {
//         this.name = name;
//         this.age = age;
//         this.size = size;
//     }
// }
// let popelushka1 = new Cinderella('Zoya',21,38)
// let popelushka2 = new Cinderella('Zoriana',20,39)
// let popelushka3 = new Cinderella('Ivanka',23,40)
// let popelushka4 = new Cinderella('Tanya',22,36)
// let popelushka5 = new Cinderella('Olya',26,37)
// let popelushka6 = new Cinderella('Katya',19,38)
// let popelushka7 = new Cinderella('Viktoriya',29,37)
// let popelushka8 = new Cinderella('Mariya',28,39)
// let popelushka9 = new Cinderella('Kristina',25,35)
// let popelushka10 = new Cinderella('Natali',27,37)
// ball.push(popelushka1)
// ball.push(popelushka2)
// ball.push(popelushka3)
// ball.push(popelushka4)
// ball.push(popelushka5)
// ball.push(popelushka6)
// ball.push(popelushka7)
// ball.push(popelushka8)
// ball.push(popelushka9)
// ball.push(popelushka10)
//
// class Prince extends Cinderella{
//      constructor(name,age,shoe) {
//          super(name,age);
//          this.shoe = shoe
//      }
//
// }
// let prince = new Prince('Artur',28,36)
// console.log(prince)
// console.log(ball)
// for (const princeElement of ball) {
//     if (princeElement.size ===prince.shoe)console.log(`Попелюшка ${princeElement.name} повинна бути з Принцом`)
// }
// let find = ball.find(ball=>ball.size===prince.shoe)
// console.log(find)
