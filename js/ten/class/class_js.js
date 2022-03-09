// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та
// виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//

// let btn = document.getElementsByTagName('button')
// btn[0].addEventListener('click',function (e) {
//         console.log(document.forms.nemo.inOne.value)
//         console.log(document.forms.nemo.password.value)
//         console.log(document.forms.kep.login.value)
//         console.log(document.forms.kep.password.value)
// });

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// let input1 = document.createElement('input')
// let input2 = document.createElement('input')
// let input3 = document.createElement('input')
// let button = document.createElement('button')
// button.innerText = 'Table'
// document.body.append(input1, input2, input3, button)
//
// button.addEventListener('click', function () {
//     let tr = input1.value;
//     let td = input2.value;
//     let textEnd = input3.value
//
//     function bildingTable(tr, td, intext) {
//         let table = document.createElement('table')
//         let divTable = document.createElement('div')
//         table.style.border = '1px solid red';
//         divTable.appendChild(table);
//         document.body.appendChild(divTable);
//         for (let i = 0; i < tr; i++) {
//             let tr = document.createElement('tr')
//             tr.style.border = '1px solid green'
//             for (let j = 0; j < td; j++) {
//                 let td = document.createElement('td')
//                 td.style.border = '1px solid blue'
//                 td.innerText = `${intext}`;
//                 table.appendChild(tr);
//                 tr.appendChild(td);
//             }
//
//         }
//     }
//     bildingTable(tr,td,textEnd)
// })

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//
// let array = ['apple', 'dog','duck']
// let input = document.createElement('input')
// let button = document.createElement('button')
// document.body.append(input,button)
// button.innerText = 'Перевірка'
// input.setAttribute('name','inPut')
// button.addEventListener('click',function (e){
//     for (const eElement of array) {
//         if(input.value === eElement) alert('Матюк')
//     }
// })
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
// let array = ['apple', 'dog','duck']
// let input = document.createElement('input')
// let button = document.createElement('button')
// document.body.append(input,button)
// button.innerText = 'Перевірка'
// input.setAttribute('name','inPut')
// button.addEventListener('click',function (e){
//         let string = input.value
//     for (const eElement of array) {
//         if(string.includes(eElement)) alert('Матюк')
//     }
// })