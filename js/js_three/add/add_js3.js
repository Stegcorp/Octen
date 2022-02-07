// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// let cat = [];
// for (let i = 2; i < 100; i++) {
//     if(i%2 ===0 ){
//         cat.push(i)
//     }
// }
//
// console.log(cat)
// for (let i = 1; i < 100; i++) {
//     if(i%2 ===1 ){
//         cat.push(i)
//     }
// }
// console.log(cat)
// for (let i = 0; i < 20; i++) {
//     cat.push( Math.floor( Math.random()*100))
//
// }
// console.log(cat)
//
// for (let i = 0; i < 20; i++) {
// cat.push(Math.floor(8 + Math.random() * (732 + 1 - 8)))
// }
// console.log(cat)

// 2. Вивести за допомогою console.log кожен третій елемен

// for (let i = 1; i < cat.length; i++) {
// if (i % 3 === 0){
// console.log(cat[i-1])}
// }
// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// for (let i = 1; i < cat.length; i++) {
//     if (i % 3 === 0  ){
//         if ( cat[i-1]%2===0){
//             console.log(cat[i-1])}
//         }
// }
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним
// та записати їх в новий масив
// let dog =[]
// for (let i = 1; i < cat.length; i++) {
//     if (i % 3 === 0  ){
//         if ( cat[i-1]%2===0){
//             dog.push(cat[i-1])}
//         }
// }
// console.log(dog)
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// let eXAMPLE =[ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] //"-> Має бути виведено 1, 9, 56"
//
// for (let i = 0; i < eXAMPLE.length; i++) {
//     if (eXAMPLE[i]%2===0){
//         console.log(eXAMPLE[i-1])
//     }
// }
//6. Є масив з числами
// let check=[100,250,50,168,120,345,188]
// // Які характеризують вартість окремої покупки.
// // Обрахувати середній чек.
//     let sum =0
// for (let i = 0; i < check.length; i++) {
//     const checkElement = check[i];
//     sum += check[i];
//     }
// console.log(sum/check.length)

// 7. Створити масив з рандомними значеннями,
// помножити всі його елементи на 5 та перемістити їх в інший масив.
// let aRray=[];
// let aRca=[];
// for (let i = 0; i < 20; i++) {
//     aRray.push( Math.floor( Math.random()*100))
//     aRca.push(aRray[i]*5)
//  }
//  console.log(aRray)
//  console.log(aRca)

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...).
// пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
// let exs =[ 1, true, 'cat', 5, 'dog', 9, false, 8, 67 ];
// let x = [];
// for (let i = 0; i < exs.length; i++) {
//     const catElement = exs[i];
//     if ( typeof (catElement) === "number" ){
//         x.push(catElement);
//     }
// }
// console.log(x)
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив

let usersWithCities = []
for (const user of usersWithId) {
    for (const city of citiesWithId) {
        if(user.id===city.user_id){
            user.address=city
        }
    }
}
usersWithCities.push(usersWithId)
console.log(usersWithCities)

// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]
//
//
//
//
//- Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи,
// значення яких є парними.
// let pi = [1,2,3,4,5,6,7,8,9,0]
// for (let i = 0; i < pi.length; i++) {
//    if (pi[i]%2===0){
//        console.log(pi[i])
//     }
// }
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
// За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let pi = [1,2,3,4,5,6,7,8,9,0];
// let po = [];
//
// for (let i = 0; i < pi.length; i++) {
//     const piElement = pi[i];
//     po.push(piElement)
// }
// console.log(po)
// console.log(pi)

// - Дано масив:
//  let book= [ 'a', 'b', 'c'] //. За допомогою циклу for зібрати всі букви в слово.
// let sum =''
// for (let i = 0; i < book.length; i++) {
//     const checkElement = book[i];
//     sum += book[i];
//     }
// console.log(sum)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// i=0
// while (i<book.length){
//     sum += book[i]
//     i++
// }
// console.log(sum)
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// for (const sumElement of book) {
//     sum+= sumElement
// }
// console.log(sum)