function updateTemp(city = 'Paris') {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=8a3e42ca713bbe8ea99643ff246b2d00&units=metric&lang=fr"

    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.send()

    request.onload = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
           if (request.status === 200) {
               let cityTemp = request.response.main.temp;
               let cityName = request.response.name;
               document.querySelector('#temperature_label').textContent = cityTemp;
               document.querySelector('#ville').textContent = cityName;
           }
       }
    };
}

updateTemp();

document.querySelector('#changer').addEventListener('click', () => {
    updateTemp(prompt("Entrez le nom de la ville"));
});