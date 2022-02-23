// Все робити за допомоги js.
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
//
// let divElement =document.createElement('div')
// divElement.classList.add('wrap','collapse','alpha','beta')
// divElement.style.background = 'gray'
// divElement.style.color = 'brown'
// divElement.style.fontSize = '20px'
// divElement.innerText = 'Okten'
// document.body.appendChild(divElement)
// let divclone = divElement.cloneNode(true)
// divclone.innerText = 'Okten School'
// document.body.appendChild(divclone)
// - Є масив:
  let array =  ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li
// та додає його до блоку .menu
// Завдання робити через цикли.
// for (const string of array) {
//     let lishka = document.createElement('li')
//     lishka.innerText = `${string}`
//     let menu = document.getElementsByClassName('menu')[0];
//     menu.append(lishka)
// }
for (const string of array) {
    let li = document.createElement('li');
    li.innerText =`${string}`;
    let menu = document.getElementsByClassName('menu')[0];
    console.log(menu)
    menu.append(li)
}
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
// for (const coursesElement of coursesAndDurationArray) {
//     let divBlock = document.createElement('div');
//     divBlock.innerText = `title - ${coursesElement.title} ,monthDuration - ${coursesElement.monthDuration}`
//     document.body.append(divBlock)
// }
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
// for (const coursesElement of coursesAndDurationArray) {
// let divItem = document.createElement('div');
// divItem.classList.add('item')
//     document.body.append(divItem)
//     let h1Title = document.createElement('h1')
//     h1Title.classList.add('heading')
//     h1Title.innerText = `title - ${coursesElement.title}`
//     let pMonth = document.createElement('p')
//     pMonth.classList.add('description')
//     pMonth.innerText = `monthDuration - ${coursesElement.monthDuration}`
//     divItem.append(h1Title,pMonth)
// }