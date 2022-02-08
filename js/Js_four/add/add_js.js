//
// - створити функцію, яка якщо приймає один аргумент,
// просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

// let task = (...arg) => {
//     let arr =[];
//     if (arg.length === 1) return (arg);
//     if (arg.length > 1) {
//
//         for (const argElement of arg) {
//             arr.push(argElement)
//         }
//     }
//  return arr
// }
// console.log(task(33, 22))
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими
// індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]
// let sumArray = (x,y)=>{
//     let arfa = [];
//     for (let i = 0; i < x.length; i++) {
//         for (let j = 0; j < y.length; j++) {
//            if(i===j)  arfa.push( x[i]+y[j]);
//                    }
//     }
// return arfa
// }
// console.log(sumArray([1,2,3,4],[4,3,2,1]))
// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// let array =[{name: 'Dima', age: 13}, {model: 'Camry'}]
// let keys = (array)=>{
//     let key =[];
//     for (const keyElement of array) {
//         for (const keyElementKey in keyElement) {
//             key.push(keyElementKey)
//         }
//     }
//     return key
// }
// console.log(keys(array))
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
// let array = [{name: 'Dima', age: 13}, {model: 'Camry'}]  //===> [ Dima, 13, Camry ]
// let cam = (array) => {
//     let prop = [];
//     for (let i = 0; i < array.length; i++) {
//         const propElement = array[i];
//                 for (const propElementKey in propElement) {
//             prop.push(propElement[propElementKey]);
//         }
//     }
//     return prop
// }
// console.log(cam(array))
