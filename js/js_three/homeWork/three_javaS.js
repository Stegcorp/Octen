// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let array =[2,4,6,8,0];
// console.log(array)
// let array2 = ['apple','tree','dog','pen','box'];
// console.log(array2)
// let array3 = [ 2,3,true,false,'water']
// console.log(array3)
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let array =[]
// array[0] ='apple'
// array[1] ='car'
// console.log(array)
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div> 'Блок' </div>`)
// }
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i = 0; i < 10; i++) {
//     document.write(`<div id = 'box'> ${i} Blok</div>`)
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// for (let i = 0; i < 10; i++) {
//     document.write(`<h1>${i} Blok</h1> `)
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//for (let i = 0; i < 10; i++) {
//     document.write(`<h1>${i} Blok</h1> `)
// }
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let array =[1,2,3,4,5,6,7,8,9,0];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i])
// }
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let array =['a','b','c','d','i','f','j','k','z','g'];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i])
// }
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let array =['a',true,'c',4,'i',false,'j','k',9,'g'];
// for (let i = 0; i < array.length; i++) {
//     console.log(array[i])
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let array =['a',true,'c',4,'i',false,'j','k',9,'g'];
// for (let i = 0; i < array.length; i++) {
//     if(typeof(array[i])==="boolean"){
//     console.log(array[i])}else {console.log('loser')}
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let array =['a',true,'c',4,'i',false,'j','k',9,'g'];
// for (let i = 0; i < array.length; i++) {
//     if(typeof(array[i])==="number"){
//         console.log(array[i])}else {console.log('loser')}
// }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//let array =['a',true,'c',4,'i',false,'j','k',9,'g'];
// for (let i = 0; i < array.length; i++) {
//     if(typeof(array[i])==="string"){
//     console.log(array[i])}else {console.log('loser')}
// }
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.

// let array = []
// array[0]=1
// array[1]=true
// array[2]='tree'
// array[3]=2
// array[4]=false
// array[5]='apple'
// array[6]=3
// array[7]='car'
// array[8]={'a':1,'b':2}
// array[9]=1
// for (let arrayElement of array) {
//     console.log(arrayElement)
// }
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i < 11; i++) {
//    console.log(i)
//     document.write(`${i}</br>`)
// }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i < 100; i++) {
//     console.log(i)
//     document.write(`${i}</br>`)
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i=i+2) {
//     console.log(i)
//     document.write(`${i}</br>`)
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 2; i < 100; i=i+2) {
//     console.log(i)
//     document.write(`${i}</br>`)
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//     for (let i = 1; i < 100; i=i+2) {
//     console.log(i)
//     document.write(`${i}</br>`)
// }