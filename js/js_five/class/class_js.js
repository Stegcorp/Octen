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
//
let arrow = (...arg)=>{
    max = arg[0];
    min = arg[0];
    for (const argument of arg) {

        if(max<=argument)max=argument;
        if(min>=argument)min=argument;
    }

    console.log('max=', max)
    return min
}
console.log(arrow(22,-9,54,9))