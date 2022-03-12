// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css,
// щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(response => response.json())
//     .then(responseData => {
//         console.log(responseData)
//         let post = document.getElementsByClassName('post')[0]
//         for (const respDatum of responseData) {
//             let dsi = document.createElement('div')
//             for (const dsiKey in respDatum) {
//                 let characteristic = document.createElement('div')
//                 characteristic.innerHTML = `<b>${dsiKey} - </b>` + respDatum[dsiKey]
//                 dsi.appendChild(characteristic)
//             }
//             dsi.classList.add('column')
//             console.log(respDatum)
//             post.append(dsi)
//         }
//     })
//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
fetch("https://jsonplaceholder.typicode.com/comments")
    .then(response => response.json())
    .then(responseData => {
        let post = document.getElementsByClassName('post')[0]
        for (const respDatum of responseData) {
                let block = document.createElement('div')
        let id = document.createElement('div')
                id.innerHTML =`<b>id</b> - ` + respDatum.id
        let name = document.createElement('div')
                name.innerHTML = `<b>name</b> - `+respDatum.name
        let email = document.createElement('div')
                email.innerHTML = `<b>email</b> - `+respDatum.email
        let body = document.createElement('div')
                body.innerHTML = `<b>body</b> - `+respDatum.body
                block.classList.add('comment')
                block.append(id,name,email,body)
                post.appendChild(block)
        }
    })
