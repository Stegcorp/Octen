// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// let a = [2,17,13,6,22,31,45,66,100,-18]
//1. перебрати його циклом while
// let i =0;
// while (i<a.length){
//     console.log(a[i]);
//     i++;
// }
// let i =a.length-1;
// while (i>=0){
//     console.log(a[i]);
//     i--;
// }
// 2. перебрати його циклом for
// for (let i = 0; i < a.length; i++) {
//     console.log(a[i])
// }
// for (let i = a.length-1; i >=0; i--) {
//     console.log(a[i])
// }
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i =0;
// while (i<a.length){
//     if(i % 2===0){
//         console.log(a[i])
//     }
//     i++;
// }
// let i =a.length-1;
// while (i>=0){
//     if(i % 2===0){
//         console.log(a[i])
//     }
//     i--;
// }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let j = 1; j < a.length; j++) {
//     if(j % 2===0){
//         console.log(a[j])
//     }
// }
// for (let j = a.length-1; j >=1 ; j--) {
//     if(j % 2===0){
//         console.log(a[j])
//     }
// }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let a = [2,17,13,6,22,31,45,66,100,-18]
// let i =0;
// while (i<a.length){
//     if(a[i]%2===0){
//         console.log(a[i])
//     }
// i++
// }
//
// let i =a.length-1;
// while (i>=0){
//     if(a[i]%2===0){
//         console.log(a[i])
//     }
// i--
// }
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let j = 0; j < a.length; j++) {
//     if(a[j]%2===0){
//         console.log(a[j])
//     }
// }
// for (let j = a.length-1; j >=0; j--) {
//     if(a[j]%2===0){
//         console.log(a[j])
//     }
// }
// 7. замінити кожне число кратне 3 на слово "okten"

// for (let j = 0; j < a.length; j++) {
//     if(a[j]%3===0){
//        a[j]='okten'
//     }
// }
// for (let j = a.length-1; j >=0; j--) {
//     if(a[j]%3===0){
//        a[j]='okten'
//     }
// }
// console.log(a)
// 8. вивести масив в зворотньому порядку.
// const reversed = a.reverse();
// console.log(a)
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

