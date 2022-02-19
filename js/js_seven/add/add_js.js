// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//         lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//     catchPhrase: 'Multi-layered client-server neural-net',
//     bs: 'harness real-time e-markets'
// }
// }
// class Addres {
//     constructor(street,suite,city,zipcode,geo) {
//         this.street = street;
//         this.suite = suite;
//         this.city = city;
//         this.zipcode = zipcode;
//         this.geo = geo;
//     }
// }
// class Geo {
//     constructor(lat,lng) {
//         this.lat = lat;
//         this.lng = lng;
//     }
// }
// class Company {
//     constructor(nameCompani,catchPhrase,bs) {
//         this.name = nameCompani;
//         this.catchPhrase = catchPhrase;
//         this.bs = bs;
//     }
// }
// class User {
//
//     constructor(id, name, username,email,addres,phone,website,company) {
//
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.addres = addres;
//         this.phone = phone;
//         this.website = website;
//         this.company =company;
//
//     }
// }

// let use = new User(1,'Ivan','Petrus','petrus@gmail.com',new Addres('Franko str',
//     'Apt. 556','Lviv','92998-3874',new Geo('-37.3159','81.1496')),
//     '1-770-736-8031 x56442','hildegard.org',new Company('Romaguera-Crona',
//         'Multi-layered client-server neural-net','harness real-time e-markets'))
//
// console.log(use)
//============================================================================================
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//     action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
// function Attrs(titleOfAttr,actionOfAttr) {
//     this.titleOfAttr =titleOfAttr;
//     this.actionOfAttr =actionOfAttr;
// }
//
// let tag = prompt('Виберіть тег a,div,h1,span і введіть')
// function Tag (titleOfTag,action,titleOfAttr,actionOfAttr,titleOfAttr2,actionOfAttr2){
//     this.titleOfTag = titleOfTag;
//     this.action = action;
//     this.attrs = [new Attrs(titleOfAttr,actionOfAttr),new Attrs(titleOfAttr2,actionOfAttr2)]
//
// }
// let classConstr = ()=>{
//     let a = new Tag('a','Тег <a>  предназначен для создания ссылок',
//         'accesskey' , 'Активация ссылки с помощью комбинации клавиш',
//         'coords', 'Устанавливает координаты активной области.' )
//     let div = new Tag('div','Элемент <div> предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
//         'align','Задает выравнивание содержимого тега <div>.','title',
//         'Добавляет всплывающую подсказку к содержимому.')
//     let h1 = new Tag("h1",'тег <h1> представляет собой наиболее важный заголовок первого уровня',
//         'align','Определяет выравнивание заголовка.','none','none'
//     )
//     let span = new Tag('span','Тег <span> предназначен для определения строчных элементов документа.','accesskey',
//         'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.','dir',
//         'Задает направление и отображение текста — слева направо или справа налево.')
//     let array = [a,div,h1,span];
//     for (let tag1 of array) {
//         if (tag1.titleOfTag === tag) return tag1
//     }
//
//
// }
//
// console.log(classConstr())
