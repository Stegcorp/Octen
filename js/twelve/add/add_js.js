// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
// кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
// Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(responseData => {
        let main = document.getElementsByClassName('bobo')[0]
        for (const mainElement of responseData) {
            let divBlock = document.createElement('div')
            divBlock.classList.add('body')
            let wrap = document.createElement('div')
            let btn = document.createElement('button')
            btn.innerHTML = 'Post'
            wrap.classList.add('user')
            divBlock.append(wrap)
            for (const divBlockKey in mainElement) {
                let inBlick = document.createElement('div')
                inBlick.innerHTML = `<b>${divBlockKey} -</b>` + mainElement[divBlockKey]
                if (divBlockKey === 'address') {
                    inBlick.innerHTML = `<b>${divBlockKey} -</b>` + mainElement[divBlockKey].city
                }
                if (divBlockKey === 'company') {
                    inBlick.innerHTML = `<b>${divBlockKey} -</b>` + mainElement[divBlockKey].name
                }
                wrap.append(inBlick)
            }
            main.append(divBlock)
            btn.addEventListener('click', function (e) {
                fetch("https://jsonplaceholder.typicode.com/posts")
                    .then(response => response.json())
                    .then(responseData => {
                        let post = document.createElement('div')
                        post.classList.add('post')
                        for (const postElement of responseData) {
                            if (mainElement.id === postElement.userId) {
                                let but = document.createElement('button')
                                but.innerText = 'Comment'
                                let inPost = document.createElement('div')
                                inPost.classList.add('inPost')
                                let innerPost = document.createElement('div')
                                let userId = document.createElement('div')
                                userId.innerHTML = `<b>userId -</b>` + postElement.userId
                                let title = document.createElement('div')
                                title.innerHTML = `<b>title -</b>` + postElement.title
                                let bodys = document.createElement('div')
                                bodys.innerHTML = `<b>body -</b>` + postElement.body
                                let id = document.createElement('div')
                                id.innerHTML = `<b>id -</b>` + postElement.id
                                innerPost.append(userId,id, title, bodys)
                                inPost.append(innerPost)
                                but.onclick = function (e) {
                                    fetch("https://jsonplaceholder.typicode.com/comments")
                                        .then(response => response.json())
                                        .then(responseData => {
                                            let finish = document.createElement("div")
                                            finish.classList.add('post')
                                            for (const finish1 of responseData) {
                                                if(finish1.postId===postElement.id){
                                                let divAn = document.createElement('div')
                                                    divAn.classList.add('yellow')
                                                let postId = document.createElement('div')
                                                    postId.innerHTML = `<b>postId - </b>`+finish1.postId
                                                let name = document.createElement('div')
                                                    name.innerHTML = `<b>name - </b>`+finish1.name
                                                let email = document.createElement('div')
                                                    email.innerHTML = `<b>email - </b>`+finish1.email
                                                let bodyz = document.createElement('div')
                                                    bodyz.innerHTML = `<b>body - </b>`+finish1.body
                                                    divAn.append(postId,name,email,bodyz)
                                                    finish.appendChild(divAn)
                                                }
                                            }
                                            divBlock.append(finish)
                                        })
                                }
                                post.append(inPost, but)
                            }
                            divBlock.append(post)
                        }


                    })
            })
            wrap.appendChild(btn)

        }
    })
