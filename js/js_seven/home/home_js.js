// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// let array = [];
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }

//
// let user1 = new User(1,'Stepan','Ivanov','ste1@gmail.com',380631222891)
// let user2 = new User(2,'Ira','Baran','kuse@gmail.com',380631224491)
// let user3 = new User(3,'Katya','Skoropad','troe@gmail.com',380635524491)
// let user4 = new User(4,'Olya','Petruk','petruk@gmail.com',3806355244200)
// let user5 = new User(5,'Mukola','Soluga','solk@gmail.com',3809355244200)
// let user6 = new User(6,'Petro','Nagayovskiy','nagayovskiy@i.ua',3809912244220)
// let user7 = new User(7,'ivan','Geras','gerasob@meta.ua',3809912345675)
// let user8 = new User(8,'Olesya','Ternuk','ternu88k@i.ua',3809304628492)
// let user9 = new User(9,'Ivanka','Gosivska','gosi2vska@gmail.com',3806447384502)
// let user10 = new User(10,'Tanya','Godis','godis011@ukr.net',3809874529463)
// array.push(user1)
// array.push(user2)
// array.push(user3)
// array.push(user4)
// array.push(user5)
// array.push(user6)
// array.push(user7)
// array.push(user8)
// array.push(user9)
// array.push(user10)


// console.log(array)


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
// залишивши тільки об'єкти з парними id (filter)
// let filters = array.filter((id,index)=>array[index].id%2===0)
// console.log(filters)

//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sort = array.sort((a,b)=> a.id-b.id)
// console.log(sort)
// - створити класс для об'єктів Client з полями id, name, surname , email, phone,
// order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order
// по зростанню. (sort)
//
// class Client {
//
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let client1 =  new Client(1,'Sara','Conor','terminator@gmail.com',3809900000000,
//     ['aplle','book','milk'])
// let client11 = new Client(11,'Stepan','Ivanov','ste1@gmail.com',380631222891,
//     ['banana','cheese'])
// let client2 = new Client(2,'Ira','Baran','kuse@gmail.com',380631224491,
//     ['soup'])
// let client3 = new Client(3,'Katya','Skoropad','troe@gmail.com',380635524491,
//     ['fish','pasta','chips','shoes'])
// let client4 = new Client(4,'Olya','Petruk','petruk@gmail.com',3806355244200,
//     ['shitr','skirt','dress','cat','sugar'])
// let client5 = new Client(5,'Mukola','Soluga','solk@gmail.com',3809355244200,
//     ['milk','book','apple','plate','window'])
// let client6 = new Client(6,'Petro','Nagayovskiy','nagayovskiy@i.ua',3809912244220,
//     ['soup','sugar','orange'])
// let client7 = new Client(7,'ivan','Geras','gerasob@meta.ua',3809912345675,
//     ['tomato','juice','ananas'])
// let client8 = new Client(8,'Olesya','Ternuk','ternu88k@i.ua',3809304628492,
//     ['banana','hat','elephant','spider','dog','pig','tiger','lion'])
// let client9 = new Client(9,'Ivanka','Gosivska','gosi2vska@gmail.com',3806447384502,
//     ['newpaper','chocolate','coffee'])
// let client10 = new Client(10,'Tanya','Godis','godis011@ukr.net',3809874529463,
//     ['fish','pasta','chips','shoes'])
// array.push(client1)
// array.push(client2)
// array.push(client3)
// array.push(client4)
// array.push(client5)
// array.push(client6)
// array.push(client7)
// array.push(client8)
// array.push(client9)
// array.push(client10)
// array.push(client11)
// //
// let sort2 = array.sort((a,b)=>a.order.length-b.order.length)
// console.log(sort2)