// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

// let arr  = ['hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false]
//
// let Arrey = arr
//
// function home (){
//     for (let i = 0; i < Arrey.length; i++) {
//         const element = Arrey[i];
//        console.log(element)
//         // alert(element)
//         document.write(element+' ')
//     }
// }
// home()
//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
// firstName='Stepan'
// middleName= 'Bogdanovich'
// lastName='Tsiupa'
//
// person= firstName+' '+middleName+' '+lastName
// console.log(person)

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

// let firstName = prompt('Імя')
// let middleName = prompt('По-Батькові')
// let age = prompt('Вік')
//
// console.log(`Вітаю ${firstName} ${middleName}. Тобі ${age} років`)

// -За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
//
// console.log(typeof (a))
// console.log(typeof (b))
// console.log(typeof (c))

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//     В однакових виразах не використовувати однакові оператори!!!
// 5 < 6 -> true
// 5 = 6 -> false
// 5 > 6 -> false
// 5 => 6 -> false
// 10 === 10 -> true
// 10 == 10 -> true
// 10 > 10 -> false
// 10 < 10 -> false
// 10 => 10 -> false
// 123 === '123' -> false
// 123 == '123' -> true

// - Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
// let str = "20";
// let a = 5;
// document.write(str + a + "<br/>"); //205- виводить стрінгу
// document.write(str - a + "<br/>");//15 - виводить number
// document.write(str * "2" + "<br/>");//40 - виводить number
// document.write(str / 2 + "<br/>");//10 - виводить number
