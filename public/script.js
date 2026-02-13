const button = document.querySelector('#openCloseReserve')
const reserveTeam = document.querySelector('.reserve-team')

button.addEventListener('click', function() {
    reserveTeam.classList.toggle('show')
    console.log('werkt')
})