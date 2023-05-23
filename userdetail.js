
let loader = document.querySelector('.fa-solid')
let imgcontainer = document.querySelector('.imgcontainer')
let textcontainer = document.querySelector('.textcontainer')



window.addEventListener('DOMContentLoaded', () => {

    fetch(`https://randomuser.me/api?id=${window.location.search.slice(4)}`)
        .then(res => res.json())
        .then(json => {
            loader.style.display = 'none'
            persondetail(json)
        })


    function persondetail(json) {
        let username = document.createElement('h1')
        let email = document.createElement('h2')
        let phone = document.createElement('h2')
        let age = document.createElement('h2')
        let dob = document.createElement('h2')
        let address = document.createElement('h2')
        let city = document.createElement('h2')
        let state = document.createElement('h2')
        let postcode = document.createElement('h2')
        let image = document.createElement('img')
        image.setAttribute('class', 'imgdetail')
        image.src = json.results[0].picture.medium

        imgcontainer.append(image)

        username.innerText = `Username:${json.results[0].name.title} ${json.results[0].name.first}${json.results[0].name.last}`
        email.innerText = `Email:${json.results[0].email}`
        email.innerText = `Email:${json.results[0].email}`
        phone.innerText = `Phone:${json.results[0].phone}`
        age.innerText = `Age:${json.results[0].dob.age}`
        dob.innerText = `DOB:${json.results[0].dob.date.slice(0, 9)}`
        address.innerText = `Address:${json.results[0].location.street.name},${json.results[0].location.street.number}`
        city.innerText = `City:${json.results[0].location.city}`
        state.innerText = `State:${json.results[0].location.state}`
        postcode.innerText = `Post code:${json.results[0].location.postcode}`

        textcontainer.append(username)
        textcontainer.append(email)
        textcontainer.append(phone)
        textcontainer.append(age)
        textcontainer.append(dob)
        textcontainer.append(address)
        textcontainer.append(city)
        textcontainer.append(state)
        textcontainer.append(postcode)
    }

})