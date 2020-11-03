const utils = new Utils();

let alreadyOpen = false
let isSideMenuIsOpen = false
const sideMenu = document.getElementById('side-menu') 
const content = document.getElementById('content')

const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const years = document.getElementById('years')
const month = document.getElementById('month')
const day = document.getElementById('day')
const dayName = document.getElementById('dayName')

let setEventForSideMenu = () => {
    document.getElementById('open-side-menu').addEventListener('click', (e) => {
        if (!alreadyOpen) sideMenu.classList.remove('side-menu-hidden-brut') 
        alreadyOpen = true
        if (isSideMenuIsOpen) {
            sideMenu.classList.add('side-menu-hidden-fluid')
            sideMenu.classList.remove('side-menu-show')
        } else {
            sideMenu.classList.remove('side-menu-hidden-fluid')
            sideMenu.classList.add('side-menu-show')
        }
        isSideMenuIsOpen = !isSideMenuIsOpen
    })

    document.getElementById('content').addEventListener('click', (e) => {
        if (isSideMenuIsOpen) {
            sideMenu.classList.add('side-menu-hidden-fluid')
            sideMenu.classList.remove('side-menu-show')
            isSideMenuIsOpen = !isSideMenuIsOpen
        }
    })
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

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

setEventForSideMenu()
setHoursAndDate()
