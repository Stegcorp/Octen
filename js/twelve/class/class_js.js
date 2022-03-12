// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(responseData => {
        // console.log(responseData)
        let main = document.createElement('div')
        document.body.append(main)

        for (const xxx of responseData) {
            let xxy = document.createElement('div')
            xxy.classList.add('super')
            let id = document.createElement('div')
            let title = document.createElement('div')
            let body = document.createElement('div')
            id.innerHTML = `<b>id</b> - ` + xxx.id
            title.innerHTML = `<b>title</b> - ` + xxx.title
            body.innerHTML = `<b>body</b> - ` + xxx.body
            let btn = document.createElement('button')
            let btn1 = document.createElement('button')
            let post = document.createElement('div')
            btn.innerText = 'Enter'
            btn1.innerText = 'Exit'
            btn.onclick = function (e) {
                fetch("https://jsonplaceholder.typicode.com/comments")
                    .then(response => response.json())
                    .then(responseData => {
                            for (const respDatum of responseData) {
                                if (xxx.id === respDatum.id) {
                                    let block = document.createElement('div')
                                    let id = document.createElement('div')
                                    id.innerHTML = `<b>id</b> - ` + respDatum.id
                                    let name = document.createElement('div')
                                    name.innerHTML = `<b>name</b> - ` + respDatum.name
                                    let email = document.createElement('div')
                                    email.innerHTML = `<b>email</b> - ` + respDatum.email
                                    let body = document.createElement('div')
                                    body.innerHTML = `<b>body</b> - ` + respDatum.body
                                    block.classList.add('comment')
                                    block.classList.remove('show')
                                    block.append(id, name, email, body)
                                    post.appendChild(block)

                                }
                            }
                        }
                    )

            }
            btn1.onclick =function (e) {
                let blo = document.getElementsByClassName('comment')
                for (const bloElement of blo) {
                    bloElement.classList.add('show')
                }

            }

            xxy.append(id, title, body, btn,btn1, post)
            main.append(xxy)
        }
    })