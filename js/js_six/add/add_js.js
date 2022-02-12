// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
// let stre = 'наслаждение'
// let aa = stre.split(",",2)
// console.log(aa)
//
// let cutString = (str, n) => {
//     let array = str.split('')
//     for (let i = 0; i < array.length; i++) {
//         if (i % (n+1) === 0 ) {
//             array.splice(i, 0, ',')
//         }
//     }
//     array.shift()
//     let ss =  array.join('')
//         let arr =[]
//      arr.push(ss)
//     return arr
// }
// console.log(cutString(stre, 3))

// let f=(str, n ) => {
//     aa = []
//     for (let i = 0; i < str.length; i+=n) { // розвязок, хлопця з групи)
//         aa.push(str.substr(i,3))
//
//     }
//     return aa
// }
// document.write(f(stre,3))


// var str = "наслаждение";
// function* chunk(str, n) {
//     var padded = str.padEnd(Math.ceil(str.length / n) * n ); // знайшов в неті
//
//     for (var i = 0; i < padded.length / n; i++) {
//         yield padded.substring(i * n, (i + 1) * n);
//     }
// }
// console.log([...chunk(str, 3)]);


// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :
// данні до знака равлика(@),
// наявність равлика,
// крапку яка знаходиться не меньше ніж на 2 символ далі післяравлика,
// функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)

// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

// let mail = 'some.email@gmail.com'
// let f = ()=>{
//     let mimain = mail.toLowerCase()
//     // console.log(mimain)
//     let includes = mimain.includes('@')  //true
//     // console.log(includes)
//     let indexOf = mimain.indexOf('@') //true or false
//     // console.log(indexOf)
//     let lastindexOf = mimain.lastIndexOf('.') //true or false
//     // console.log(lastindexOf)
//     let slice = mimain.slice(indexOf+1,lastindexOf)
//     // console.log(slice)
//     if(includes===true && indexOf>0 && slice.length>0){
//                return  'електронна адреса - ВІРНО'
//     }else {return 'електронна адреса - введена НЕ ВІРНО'}
// }
// console.log(f(mail))
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте
// над
// протоколом, з регулярками будете потім бавитись.
//
// - є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];

// let sortuk = coursesArray.sort((a, b)=>{
//   return  b.modules.length-a.modules.length
// })
// console.log(sortuk)
// //
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
//
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
// let symb = "о",  str = "Астрономия это наука о небесных объектах";
//
// let count = (str,stringsearch)=>{
//     let split = str.split('');
//     let array =[];
//     for (let i = 0; i < split.length; i++) {
//         if (split[i] === stringsearch) array.push(split[i])
//     }
//         return array.length
// }
// console.log(count(str,symb))
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
// let str = "Сила тяжести приложена к центру масс тела";
// let cutString =(str,n)=>{
//     let splite = str.split(' ')
//     let arr =[];
//     for (let i = 0; i < splite.length; i++) {
//         if (i<n) arr.push(splite[i])
//
//     }
//     let ss =  arr.join(' ')
//         let array =[]
//      array.push(ss)
//     return array
// }
// console.log(cutString(str,5))
