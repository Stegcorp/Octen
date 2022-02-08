// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//  let plo =(a,b)=>a*b;
// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let circle = (r)=> Math.PI*Math.pow(r,2);
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let cylinder=(r,h)=>2*Math.PI*r*h;
// - створити функцію яка приймає масив та виводить кожен його елемент
// let array = ['a',2,5,true]
// function arr(){
//     for (const arrayElement of array) {
//           console.log(arrayElement)
//     }
// }
// arr(array)
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let parag =(...arg)=>{
//     document.write(`<p>${arg}</p>`)
// }
// parag('dsdasa')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//   let lishko =(...arg)=>{
//     document.write('<ul>')
//       document.write(`<li>${arg}</li>`)
//       document.write(`<li>${arg}</li>`)
//       document.write(`<li>${arg}</li>`)
//     document.write('</ul>')
//   }
//   lishko('dsadasd')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let lishko =(x,...arg)=>{
//     document.write('<ul>')
//     for (let i = 0; i < x; i++) {
//         document.write(`<li>${arg}</li>`)
//     }
//     document.write('</ul>')
//   }
//   lishko(4,'sdasdasd')
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
// та будує для них список
// let array = ['apple',102,false,'storm',true,33]
// let arr =(array)=>{
//     for (const arrayElement of array) {
//         document.write(`<li>${arrayElement}</li>`)
//     }
// }
// arr(array)
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age ,
// та виводить їх в документ. Для кожного об'єкту окремий блок.
// let array =[
//     {
//         id:1,
//         name:'Andron',
//         age:27
//     },
//     {
//         id: 2,
//         name: 'Vova',
//         age: 28
//     }
// ]
// let archuk =(array)=>{
//     for (let i = 0; i < array.length; i++) {
//         const arrayElement = array[i];
//         document.write(`<div style="border: 1px solid silver"> id:${arrayElement.id}</br>
// name:${arrayElement.name}</br>age:${arrayElement.age}</div>`)
//     }
// }
// archuk(array)