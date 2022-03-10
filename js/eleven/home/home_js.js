// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage

// let form = document.createElement('form')
// let name = document.createElement('input')
// name.name = 'name'
// let age = document.createElement('input')
// age.name = 'age'
// age.type = 'number'
// let button = document.createElement('button')
// button.innerText = 'button'
// form.append(name,age,button)
// document.body.append(form)
// form.onsubmit = function (e){
//     e.preventDefault()
// localStorage.setItem('name',e.target.name.value)
// localStorage.setItem('age',e.target.age.value)
//
// }
// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
let form = document.createElement('form')
form.innerText = 'дані авто'
let input1 = document.createElement('input')
input1.name = 'model'
let input2 = document.createElement('input')
input2.name = 'tupe'
let input3 = document.createElement('input')
input3.name = 'volume'
let button = document.createElement('button')
form.append(input1,input2,input3,button)
button.innerText = 'start'
document.body.appendChild(form)
form.onsubmit = function (e) {
    e.preventDefault()
    let model = e.target.model.value
    let tupe = e.target.tupe.value
    let volume = e.target.volume.value
    let array = []
        array.push({model:model,tupe:tupe,volume:volume})
   console.log(array)
    localStorage.setItem('car',JSON.stringify(array))
}

