// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
// let valid = (n)=> {
//     let normal = n
//     .replaceAll('..', ' ')
//     .replaceAll('---', ' ')
//     .replaceAll('__', ' ')
//     return normal
// }
// console.log(valid(n3))

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let array = ()=> {
//     let arr =[]
//     Math.floor(Math.random() * 100)
//     for (let i = 0; i < 20; i++) {
//        arr.push(Math.floor(Math.random() * 100))
//     }
//     return arr
// }
// console.log(array())
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// Відсортувати його за допомоги sort
// console.log( array().sort())
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
// відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// console.log(array().filter(value => value%2===0))
// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) .
// за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// console.log(array().map(value => value = `${value}`))
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
// let nums = [11,21,3];
// let sortNums = (x,direction)=>{
//     if (direction === 'descending') x.sort(function (a,b){ return b-a})
//     if (direction === 'ascending') x.sort(function (a,b){ return a-b})
//     return x
// }
// console.log(sortNums(nums,'descending'))
//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// let sortArray = coursesAndDurationArray.sort((a, b)=>b.monthDuration-a.monthDuration)
// console.log(sortArray)
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let filterArray = coursesAndDurationArray.filter(value => value.monthDuration>5)
// console.log(filterArray)