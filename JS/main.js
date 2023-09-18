const form = document.getElementById('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    
    if (name && email && email.includes('@')) {
        alert('Formulário enviado com sucesso!');
        form.reset();
    } else {
        alert('Por favor, preencha o formulário corretamente.');
    }
});


const navButton = document.getElementById('navButton');

navButton.addEventListener('click', function () {
    window.history.back();
});


const geoButton = document.getElementById('geoButton');
const locationInfo = document.getElementById('locationInfo');

geoButton.addEventListener('click', function () {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            
            locationInfo.innerHTML = `Latitude: ${latitude}<br>Longitude: ${longitude}`;
        });
    } else {
        locationInfo.innerHTML = 'Geolocalização não suportada neste navegador.';
    }
});