const utils = new Utils();
const color = new Color();

let alreadyOpen = false
let isSideMenuIsOpen = false
let isPreferenceMenuIsOpen = false
const sideMenu = document.getElementById('side-menu') 
const content = document.getElementById('content')

const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const years = document.getElementById('years')
const month = document.getElementById('month')
const day = document.getElementById('day')
const dayName = document.getElementById('dayName')

const preferenceMenu = document.getElementById('preference_menu')

window.data = []


let setEventForSideMenu = () => {
    document.getElementById('open-side-menu').addEventListener('click', (e) => {
        if (isPreferenceMenuIsOpen) {
            preferenceMenu.style.display = 'none'
            preferenceMenu.style.width = '0%'
            isPreferenceMenuIsOpen = false
        }
        if (!alreadyOpen) sideMenu.classList.remove('side-menu-hidden-brut') 
        alreadyOpen = true
        if (isSideMenuIsOpen) {
            sideMenu.classList.add('side-menu-hidden-fluid')
            sideMenu.classList.remove('side-menu-show')
            content.classList.remove('content-none-mobile')
        } else {
            sideMenu.classList.remove('side-menu-hidden-fluid')
            sideMenu.classList.add('side-menu-show')
            content.classList.add('content-none-mobile')
        }
        isSideMenuIsOpen = !isSideMenuIsOpen
    })

    document.getElementById('content').addEventListener('click', (e) => {
        if (isSideMenuIsOpen) {
            sideMenu.classList.add('side-menu-hidden-fluid')
            sideMenu.classList.remove('side-menu-show')
            content.classList.remove('content-none-mobile')
            isSideMenuIsOpen = !isSideMenuIsOpen
        }
        if (isPreferenceMenuIsOpen) {
            preferenceMenu.style.display = 'none'
            preferenceMenu.style.width = '0%'
            isPreferenceMenuIsOpen = false
        }
    })
}

let generateMenuPreference = () => {
    let list = document.getElementById('bgcolor_list')
    for (let i in color.getAllColor())  {
        let el = color.getAllColor()[i]
        let li = document.createElement('li')
        li.setAttribute('color_id' , i)
        li.addEventListener('click', (e) => color.setCurrentColor(e.target.getAttribute('color_id')))
        li.classList.add('color-box')
        li.title = el['name']
        li.style.backgroundColor = el['primary']
        list.appendChild(li)
    }
}

let setHoursAndDate = () => {
    let date = new Date()
    hours.innerText = utils.pad(date.getHours(),2)
    dayName.innerText = utils.getDayCorrespondance(date.getDay())
    day.innerText = utils.pad(date.getDate(), 2)
    years.innerText = date.getFullYear()
    minutes.innerText = utils.pad(date.getMinutes(), 2)
    month.innerText = utils.getMonthCorrespondance(date.getMonth() + 1)

    setTimeout(setHoursAndDate, 5000)
}

let setUserPreference = () => {
    let avatar = document.getElementById('avatar')
    let firstname = document.getElementById('firstname')
    let lastname = document.getElementById('lastname')

    firstname.innerText = window.data['user'].firstname
    lastname.innerText = window.data['user'].lastname
    if (window.data['user'].avatar !== '') {
        avatar.img = window.data['user'].avatar
    }
}

let showPreference = (e) => {

    if (isSideMenuIsOpen && !isPreferenceMenuIsOpen) {
        sideMenu.classList.add('side-menu-hidden-fluid')
        sideMenu.classList.remove('side-menu-show')
        isSideMenuIsOpen = !isSideMenuIsOpen

        preferenceMenu.style.display = 'flex'
        preferenceMenu.style.width = '20%'

        isPreferenceMenuIsOpen = true

    }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

document.getElementById('preference').addEventListener('click', showPreference)

generateMenuPreference()
setEventForSideMenu()
setHoursAndDate()

fetch(utils.getFullPath() + '/data/user.json').then(res => res.json()).then(res => {
    window.data['user'] = res['user']
    setUserPreference()
})

