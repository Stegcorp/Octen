// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так,
// при клике на кнопку исчезал элемент с id="text".

// let divBlock = document.createElement('div');
// document.body.append(divBlock)
// divBlock.id = 'text';
// divBlock.style.width = '200px';
// divBlock.style.height = '200px';
// divBlock.style.background = 'gray';
// onclick =function (e) {
//     divBlock.style.display = 'none'
// }
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let knopka = document.createElement('button')
// knopka.innerText = 'touch me';
// document.body.append(knopka);
// knopka.onclick = function (e){
//     knopka.style.display='none'
// }
//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити
// про це користувача
// let input= document.createElement('input')
// let btn = document.createElement('button')
// let form = document.createElement('form')
// btn.innerText = 'enter'
// form.innerText = 'your age -  '
// input.name = 'num'
// form.append(input,btn)
// document.body.append(form)
// form.onsubmit = function (e){
//     e.preventDefault()
//     if(e.target.num.value <18) console.log('Алкоголь не продавати')
//     else {console.log('Все добре')}
// }

// - Создайте меню, которое раскрывается/сворачивается при клике
// //
// let active = document.getElementsByClassName('red')
// let elem = document.getElementById('sos')
// onclick = function (e){
//  elem.classList.toggle('action')
// }

// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
let base = document.createElement('div')
document.body.append(base)
let array = [
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem1', body:'lorem ipsum dolo sit ameti amor'},
    {title : 'lorem2', body:'lorem ipsum dolo sit ameti amor super'}
]
for (const arrayElement of array) {
    let div = document.createElement('div')
    let divAn = document.createElement('div')
    let divClose = document.createElement('div')
    let p = document.createElement('p')
    let btn = document.createElement('button')
    divAn.innerHTML = `<b>${arrayElement.title}</b>`
    p.innerText = arrayElement.body
    btn.innerText ='enter'
    divClose.append(p,btn)
    div.append(divAn,divClose)
    base.append(div)
    btn.onclick = function (e) {
        divClose.classList.toggle('red')
        divClose.classList.remove('action')
    }
    divAn.onclick = function (e) {
        divClose.classList.add('action')
        divClose.classList.remove('red')
    }
}
