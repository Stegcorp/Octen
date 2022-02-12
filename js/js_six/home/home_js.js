// - Знайти та вивести довижину настипних стрінгових значень
// // 'hello world', 'lorem ipsum', 'javascript is cool'
// let hello = 'hello world'
// let lorem = 'lorem ipsum'
// let java = 'javascript is cool'
// console.log(hello.length)
// console.log(lorem.length)
// console.log(java.length)
// // - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum' , 'javascript is cool'
// let toUpperCase = hello.toUpperCase()
// let toUpperCase1 = lorem.toUpperCase()
// let toUpperCase2 = java.toUpperCase()
// console.log(toUpperCase)
// // - Перевести до нижнього регістру настипні стрінгові значення
// // 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let toLowerCase = hello.toLowerCase()
// let toLowerCase1 = lorem.toLowerCase()
// let toLowerCase2 = java.toLowerCase()
// console.log(toLowerCase)
// // - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
// let str = ' dirty string   '
// let replaceAll = str.trim().replaceAll(' ', '');
// console.log(replaceAll);
// console.log(replaceAll.length)

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
// let str = 'Каждый охотник желает знать';
// let stringToarray = str.split(' ')
// console.log(stringToarray)
// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із
// зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
// let str = 'Каждый охотник желает знать';
// let delete_characters =(a,b)=>{
//     let arr = a.split(' ')
//     for (const arrElement of arr) {
//         if (arrElement.length===b)
//             return arrElement
//     }
// }
// document.write(delete_characters(str,6))
// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
// При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// let str = "HTML JavaScript PHP";
// let insert_dash = str.toUpperCase().replaceAll(' ', '-');
// console.log(insert_dash);
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з
// нижнього регістру у верхній.
// let text = 'ярик бачок потік'
// let yaruk =()=>text[0].toUpperCase()
// let textUp = text.replace(text[0],yaruk())
// console.log(textUp)
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let text = 'Напишіть функцію capitalize(str)'
// let capitalize = ()=>{
// let splitetext = text.split('')
//
//     for (let i = 0; i < splitetext.length; i++) {
//         if (splitetext[i]===' '){
//             splitetext[i+1]=splitetext[i+1].toUpperCase();
//     }
//         if(i===0) {
//             splitetext[i]= splitetext[i].toUpperCase()
//         }
//         text.replace(splitetext[0],splitetext[i])
//         text.replaceAll(splitetext[i+1],splitetext[i+1])}
//
//   return   splitetext.join('')
// }
// console.log(capitalize(text))

