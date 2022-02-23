let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];
// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// let array = []
// for (const user of users) {
//     let addres = user.address
//     array.push(addres)
// }
// console.log(array)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
// Всі данні в одному блоці.
//     let main = document.createElement('div')
//     document.body.appendChild(main)
// for (const user of users) {
//     let userDiv = document.createElement('div')
//     userDiv.innerText = `${user.name} ${user.age} ${user.status} `
//      main.appendChild(userDiv)
// }
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам (div>div*4)
// let main = document.createElement('div')
//     document.body.appendChild(main)
// for (const user of users) {
// let userDiv = document.createElement('div')
//     main.append(userDiv)
//     for (const userKey in user) {
//     let userDives = document.createElement('div')
//     userDives.innerText= `${user[userKey]}`
//    userDiv.appendChild(userDives)
//     }
// }
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement,
// розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

// let main = document.createElement('div')
//     document.body.appendChild(main)
// for (const user of users) {
//     let userDiv = document.createElement('div')
//     main.append(userDiv)
//     for (const userKey in user) {
//         let div = document.createElement("div")
//         div.innerText = `${userKey} - ${user[userKey]}`
//         if (typeof (user[userKey]) === 'object') {
//             div.innerText = `${userKey} -`
//             for (const divKey in user[userKey]) {
//                 let li = document.createElement('li')
//                 li.innerText = `${divKey} - ${user[userKey][divKey]}`
//                 div.appendChild(li)
//             }
//         }
//         userDiv.appendChild(div)
//     }
// }


//
//
// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему
// контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li),
//     який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

// let contents = document.getElementById('content')
// let h2 = document.getElementsByTagName('h2')
//     let ul = document.createElement('ul')
//      contents.appendChild(ul)
// for (const textElement of h2) {
//     let li = document.createElement('li')
//     let text = textElement.innerText
//     li.innerText = `${text}`
//     ul.append(li)
// }

//
//
//


let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому
// блоці.
//     При цьому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
let idWrap = document.createElement('div')
idWrap.id = 'wrap'
document.body.appendChild(idWrap)
for (const rule of rules) {
let divBlock = document.createElement('div')
    idWrap.appendChild(divBlock)
    for (const blockKey in rule) {
        let title = document.createElement('h2')
        let body = document.createElement('p')
        if (blockKey === 'title') title.innerText = `${rule[blockKey]}`
        if (blockKey === 'body') body.innerText = `${rule[blockKey]}`
        divBlock.append(title,body)
    }
}
let asss = document.getElementsByTagName('h2')
let esss = document.getElementsByTagName('p')
console.log(esss)
for (const esss1 of esss) {
    if (esss1.innerText ==='') esss1.remove()
}
for (const asss1 of asss) {
    if (asss1.innerText ==='') asss1.remove()
}