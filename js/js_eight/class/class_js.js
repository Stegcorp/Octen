// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
let main =document.getElementById('main_header')
main.classList.add('dec-2021-java')
// b) робить шириниу елементу ul 400px
let ulca =document.getElementsByTagName('ul')
ulca[0].style.width = '400px'
// c) робить шириниу всіх елементів з класом linkList шириною 50%
let link = document.getElementsByClassName('linkList')
for (const linkElement of link) {
    linkElement.style.width = '50%'
}
// d) отримує текст який зберігається в елементі з класом listElement2
let listtext = document.getElementsByClassName('listElement2');
let lextclass = listtext[0].innerText;
// e) отримує всі елементи li та змінює ім колір фону на сірий
let lishka =document.getElementsByTagName('li');
for (const lishkaElement of lishka) {
    lishkaElement.style.background = 'gray'
}
// f) отримує всі елементи 'a' та додає їм клас anchor
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3,
// змінює йому розмір тексту на 40 пікселів
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let alink = document.getElementsByTagName('a')
// for (const alinkElement of alink) {
//     alinkElement.classList.add('anchor')
//     if(alinkElement.innerText==='link3') alinkElement.style.fontSize = '40px'
//     alinkElement
//     alinkElement.classList.add(`element_${alinkElement.innerText}`)
// }
let allA3 = document.getElementsByTagName('a');
for (let allA3Element of allA3) {
    console.log(allA3Element)

    allA3Element.classList.add(`element_${allA3Element.innerText}`)
}
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
 // j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо
// текст елемнту = content 2 segment . Колір отримати з prompt()
// let promptColor = prompt('Color please')
// let promptColorTxt = prompt('Color text please')
// let sub =document.getElementsByClassName('sub-header')
// for (const subElement of sub) {
//  subElement.style.background = `${promptColor}`
//     if(subElement.innerText === 'content 2 segment') subElement.style.color = `${promptColorTxt}`
// }
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let contents = prompt('enter text')
// let content = document.getElementsByClassName('content_1')
// content[0].innerText= contents
// l) отримати елементи p та змінити їм padding на 20px
let pipi = document.getElementsByTagName('p');
for (const pipiElement of pipi) {
    pipiElement.style.padding ='20px';
}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let text2 = document.getElementsByClassName('text2');
console.log(text2[0].innerText = 'dec-2021')