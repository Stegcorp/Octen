// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на
// сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//  До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

let form = document.getElementById('goods')
let goods = JSON.parse(localStorage.getItem('goods')) ||[]

form.onsubmit = function (e){
    e.preventDefault()

    goods.push({name:form.nameGoods.value,number:form.number.value,price:form.price.value,image:form.image.value})

localStorage.setItem('goods',JSON.stringify(goods))
console.log(goods)
}
