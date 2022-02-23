// написати рекурсивну функцію, яка збирає всі назви класів з файлу rules.html в
// окремий масив. масив вивести в консоль
    let array = []
function classes(enterElement) {
    // console.log(enterElement);
    let ars =enterElement.getAttribute('class')
if (enterElement.getAttribute('class')) array.push(ars)
    let children = enterElement.children;
    for (const child of children) {
        classes(child)
    }
}
classes(document.body)

let arr = []
for (const arrayElement of array) {
 let aa =  arrayElement.split(' ')
    for (const aaElement of aa) {
        arr.push(aaElement)
    }
}
console.log(arr)