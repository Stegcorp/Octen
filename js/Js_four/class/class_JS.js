// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let min = (a, b, c,) => {
//     if ((a > c) && (b > c)) return c;
//     if ((b > a) && (c > a)) return a;
//     if ((c > b) && (a > b)) return b;
// }
// let miks = min(36,4,6)
// console.log(miks)
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let max = (a, b, c,) => {
//     if ((a < c) && (b < c)) return c;
//     if ((b < a) && (c < a)) return a;
//     if ((c < b) && (a < b)) return b;
// }
// let miks = max(36,224,6)
// console.log(miks)
// - створити функцію яка повертає найбільше число з масиву
// let mas = ()=>Math.max()
// let arr = [11,3,4,5,7,8,9]
// let shark = (array)=>{
//     let min = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if(min >= array[i]){
//             min = array[i];
//         }
//     }
//     return min
// }
// console.log(shark(arr))
// - створити функцію яка повертає найменьше число з масиву
// let masc = ()=>Math.min()
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// let array = [1,2,3,4,5]
// let sums = (array)=>{
//     let sum = 0
//     for (let i = 0; i < array.length; i++) {
//         sum+=array[i]
//     }
//     return sum
// }
//  let ask= sums(array)
// console.log(ask)
// Приклад [1,2,10]->13
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let array = [1,2,3,4,5]
// let aref = (array)=>{
//     let sum = 0
//     for (let i = 0; i < array.length; i++) {
//         sum+=array[i]
//     }
//     return sum/array.length
// }
// let plan = aref(array)
// console.log(plan)
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше,
// а виводить найбільше (Math використовувати заборонено);

// function maxnummin() {
//     maxnum = arguments[0];
//     minnum = arguments[0];
//     for (i of arguments) {
//         if (maxnum <= i) {
//             maxnum = i;
//         }
//         if (minnum >= i) {
//             minnum = i;
//         }
//     }
//     console.log('max =', maxnum);
//     return minnum;
// }
// console.log(maxnummin(44, 432, -3, 11, 0, -64, 636, 3, -26, 28, 45));
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100))
// та виводить його.
// let arr =[];
// let random = () => {
//     for (let i = 0; i < 10; i++) {
//            arr.push( Math.round(Math.random() * 100))
//     }
// }
// random()
// console.log(arr)
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit
// - аргумент, який характеризує кінцеве значення діапазону.
// let arr =[];
// let random = (x) => {
//     for (let i = 0; i < x; i++) {
//            arr.push( Math.round(Math.random() * x))
//     }
// }
// random(100)
// console.log(arr)
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let ars = [1,2,3]
// let reve = (x)=>{
//     let arr = [];
//     for (let i = x.length-1; i >=0; i--) {
//        arr.push(x[i])
//     }
//     return arr
// };
// console.log(reve(ars))
