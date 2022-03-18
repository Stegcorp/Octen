// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
//
//
// document.onclick = function(e) {
//     console.log(e.target.className);
//     console.log(e.target.id);
//     console.log(e.target.clientHeight);
//     console.log(e.target.clientWidth);
// }

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
//


// -- взять массив пользователей
let usersWithAddress = [
    {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как
// вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
let array = [];
let form = document.getElementById('shans')
let chbx1 = document.getElementById('falsed')
let chbx2 = document.getElementById('age')
let chbx3 = document.getElementById('kyiv')
let result = document.getElementById('results')
let filter = usersWithAddress.filter(value => !value.status);
let filter1 = usersWithAddress.filter(value => value.age > 29);
let filter2 = usersWithAddress.filter(value => value.address.city === 'Kyiv');

chbx1.onclick = function (e) {
    result.innerText = ''
    // let filter = usersWithAddress.filter(value => !value.status);
    if (chbx1.checked) {
        array.push(filter)
    }else {
        result.innerText = ''
    }
    myFunction()
}
chbx2.onclick = function (e) {
    result.innerText = ''
    myFunction()
    if (chbx2.checked && chbx1.checked) {
        let filterwok = array.filter(value => value.age > 29);
        array.push(filterwok)
    }else {
        array.push(filter1)
    }
}
chbx3.onclick = function (e) {
    result.innerText = ''
    myFunction()
    if (chbx3.checked && chbx2.checked && chbx1.checked) {
        let filter2 = array.filter(value => value.address.city === 'Kyiv');
        array.push(filter2)
    }else {
        array.push(filter2)
    }
}

function myFunction() {
    for (const arrayElement of array) {
        for (const arrayElementKey in arrayElement) {
            let div = document.createElement("div")
            div.innerText = `name  - ${arrayElement[arrayElementKey].name} age - ${arrayElement[arrayElementKey].age} status - ${arrayElement[arrayElementKey].status} city - ${arrayElement[arrayElementKey].address.city}`
            div.style.border = '1px solid blue'
            result.append(div)
        }
    }
}
console.log(array)


// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .
// Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед",
// вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь
// элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему,
//     лежащему с ним на одном уровне
//
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//
//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
// const form = document.createElement('form');
// form.setAttribute('name', 'formChBoxes')
// document.body.appendChild(form);
//
// let chBox0 = document.createElement('input');
// chBox0.type = 'checkbox'
// chBox0.id = 'chBox0'
// let label0 = document.createElement('label');
// label0.htmlFor = 'chBox0';
// label0.innerText = 'all: ';
// label0.style.display = 'block';
// label0.appendChild(chBox0);
//
// let chBox1 = document.createElement('input');
// chBox1.type = 'checkbox'
// chBox1.id = 'chBox1'
// let label1 = document.createElement('label');
// label1.htmlFor = 'chBox1';
// label1.innerText = 'status false: ';
// label1.style.display = 'block';
// label1.appendChild(chBox1);
//
// let chBox2 = document.createElement('input');
// chBox2.type = 'checkbox'
// chBox2.id = 'chBox2'
// let label2 = document.createElement('label');
// label2.htmlFor = 'chBox2';
// label2.innerText = 'age 29+: ';
// label2.style.display = 'block';
// label2.appendChild(chBox2);
//
// let chBox3 = document.createElement('input');
// chBox3.type = 'checkbox'
// chBox3.id = 'chBox3'
// let label3 = document.createElement('label');
// label3.htmlFor = 'chBox3';
// label3.innerText = 'city Kyiv: ';
// label3.style.display = 'block';
// label3.appendChild(chBox3);
//
// document.forms.formChBoxes.onsubmit = e => e.preventDefault()
// document.forms.formChBoxes.append(label0, label1, label2, label3,);
//
// let divMain = document.createElement('div');
// document.body.appendChild(divMain);
//
// form.onclick = _ => {
//     let users = usersWithAddress;
//
//     if (chBox1.checked) {
//         users = users.filter(v => !v.status);
//     }
//     if (chBox2.checked) {
//         users = users.filter(v => v.age >= 29);
//     }
//     if (chBox3.checked) {
//         users = users.filter(v => v.address.city === 'Kyiv');
//     }
//
//     while (divMain.firstElementChild) {
//         divMain.removeChild(divMain.firstChild);
//     }
//
//     users.forEach(item => {
//         let div = document.createElement('div');
//         div.style.border = '1px solid silver'
//         div.innerText = `id: ${item.id}, name: ${item.name}, age: ${item.age}, status: ${item.status}, address:
//         city: ${item.address.city}, street: ${item.address.street}, number: ${item.address.number}.`
//         divMain.appendChild(div);
//     });
// };