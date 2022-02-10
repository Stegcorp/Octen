// - Дано натуральное число n. Выведите все числа от 1 до n.

// let num = +prompt('це число')
// let aroow = (num) => {
//     for (let i = 1; i < num + 1; i++) {
//         if (num === 1) console.log(num);
//         if (num > 1) console.log(i)
//     }
// }
// aroow(num)

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B,
// или в порядке убывания в противном случае.

// let a = +prompt('це число а')
// let b = +prompt('це число б')
//
// let abetca = (x, y) => {
//     if (x > y) {
//         for (let i = x; i >= y ; i--) {
//             console.log(i)
//         }
//     } else {
//         for (let i = x; i < y + 1; i++) {
//             console.log(i)
//         }
//     }
//
// }
// abetca(a, b)
//

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// let i = +prompt('enter i')
// let arr = [9, 8, 0, 4]
// let foo = (arr, i) => {
//     let array = [];
//     for (let j = 0; j < arr.length; j++) {
//         if (i === j) {
//                let lod = arr[j]
//             arr[j] = arr[j+1];
//             arr[j + 1] = lod;
//         }
//         array.push(arr[j]);
//     }
//     return array
// }
// console.log(foo(arr, i))

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
// let array = [0,1,2,3,4]
// let pushZero = (array) => {
//     let arr = [];
//     array.reverse()
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > 0) arr.unshift(array[i]);
//         if (array[i] === 0) arr.push(array[i])
//     }
//     return arr
// }
// console.log(pushZero(array))
