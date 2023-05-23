let malebtn = document.querySelector('.malebtn')
let femalebtn = document.querySelector('.femalebtn')
let container = document.querySelector('.section2')
let loader = document.querySelector('.fa-solid')
let input = document.querySelector('.input-box')
let viewbtn = document.querySelector('.viewbtn')
let allbtn = document.querySelector('.allbtn')
let notmatch = document.querySelector('.notmatch')

window.addEventListener('DOMContentLoaded', () => {
    let num = 32
    viewbtn.addEventListener("click", () => {
        num = 12
        datas()
    })
    datas()
    function datas() {
        fetch(`https://randomuser.me/api/?results=${num}`)
            .then(response => response.json())
            .then(userdata => {

                loader.style.display = 'none'

                filterUsers()
                allbtn.classList.add('active')


                malebtn.addEventListener('click', (e) => {
                    e.preventDefault()
                    
                    malebtn.classList.add('active')
                    femalebtn.classList.remove('active')
                    allbtn.classList.remove('active')

                    let listdiv = document.querySelectorAll(".listDiv")
                    remove(listdiv)

                    filterUsers()


                })

                femalebtn.addEventListener('click', (e) => {
                    e.preventDefault()

                    femalebtn.classList.add('active')
                    malebtn.classList.remove('active')
                    allbtn.classList.remove('active')

                    let listdiv = document.querySelectorAll(".listDiv")
                    remove(listdiv)

                    filterUsers()
                })

                allbtn.addEventListener('click', (e) => {
                    e.preventDefault()

                    allbtn.classList.add('active')
                    malebtn.classList.remove('active')
                    femalebtn.classList.remove('active')

                    let listdiv = document.querySelectorAll(".listDiv")
                    remove(listdiv)

                    filterUsers()

                })

                function remove(listdiv) {
                    for (let k = 0; k < listdiv.length; k++) {

                        listdiv[k].remove()
                    }
                }


                function filterUsers() {
                    let users = userdata.results
                    for (let i = 0; i < users.length; i++) {

                        if (malebtn.classList.contains('active')) {
                            if (users[i].gender == 'male') {
                                showdetails(users[i])

                            }
                        }
                        else if (femalebtn.classList.contains('active')) {
                            if (users[i].gender == 'female') {
                                showdetails(users[i])
                            }
                        }
                        else if (allbtn.classList.contains('active')) {
                            showdetails(users[i])
                        }
                        else {
                            showdetails(users[i])
                        }

                    }

                }

                function showdetails(appendData) {

                    let listDiv = document.createElement("div")
                    listDiv.setAttribute("class", "listDiv")

                    let a = document.createElement('a')
                    a.href = `userdetail.html?id=${appendData.id}`

                    let image = document.createElement("img")
                    image.setAttribute('class', 'userimg')
                    image.src = appendData.picture.medium

                    let span = document.createElement('span')
                    span.setAttribute('class', 'user-name')
                    span.innerText = `${appendData.name.first}${appendData.name.last}`

                    a.append(image)
                    listDiv.append(a)
                    listDiv.append(span)
                    container.append(listDiv)

                }

            })
            .catch(() => console.log("Network error"))
    }
})



input.addEventListener("keyup", () => {


    let lists = document.querySelectorAll(".user-name")

    for (let i = 0; i < lists.length; i++) {

        if (lists[i].innerHTML.toUpperCase().indexOf(input.value.toUpperCase()) != -1) {
            lists[i].parentElement.style.display = "block"

        }
        else {
            lists[i].parentElement.style.display = "none"
            viewbtn.style.display = 'none'


        }
    }


})

