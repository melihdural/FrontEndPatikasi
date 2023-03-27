let fullName = prompt("Lutfen Adinizi Giriniz: ")

let namePlaceholder = document.querySelector("#myName")
namePlaceholder.innerHTML = fullName

function showTime() {
    let d = new Date()
    let hour = d.getHours()
    let minute = d.getMinutes()
    let second = d.getSeconds()

    const days = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar']
    let day = days[d.getDay() - 1]

    let myClock = document.querySelector('#myClock')
    myClock.innerHTML = `
    ${!(hour < 10) ? hour : "0" + hour}:
    ${!(minute < 10) ? minute : "0" + minute}:
    ${!(second < 10) ? second : "0" + second} 
    ${day}` 
}

setInterval(showTime, 1000);