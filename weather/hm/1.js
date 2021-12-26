'use strict'


let link = 'http://api.weatherapi.com/v1/forecast.json?key=e9fb9a35dc124ef4a44113239210712&q=Almaty&days=7&aqi=no&alerts=no',
    cities,
    weatherDay,
    requestWeather,
    currentCity = "Almaty",
    labels = [
        '00:00',
        '03:00',
        '06:00',
        '09:00',
        '12:00',
        '15:00',
        '18:00',
        '21:00'],
    myChart,
    textCity = document.getElementsByClassName('curcity')[0]

function getweatherDay(toChangeCity) {
    link = link.replace(currentCity, toChangeCity)
    currentCity = toChangeCity
    textCity.innerText = currentCity

    requestWeather = new Promise((resolve, reject) => {
        axios.get(link)
            .then((data) => {
                    resolve(data)
                }
            )
    })
}


let requestCity = new Promise(resolve => {
    axios.post('https://countriesnow.space/api/v0.1/countries/cities', {
        country: "Kazakhstan"
    }).then(res => {
        resolve(res)
    })
})//do not need reject because in axios already have reject



function getOtherWeather(toChangeCity,day){

    getweatherDay(toChangeCity,day)

    requestWeather.then((requestData) => {
        console.log('Weather Have been gotten')

        let CelciusPer3Hour = [];

        weatherDay = requestData.data.forecast.forecastday
        for (let i = 0; i < weatherDay[day].hour.length; i += 3) {
            CelciusPer3Hour.push(weatherDay[day].hour[i].temp_c)
        }

        let data = {
            labels: labels,
            datasets: [{
                label: 'Temperatures in Celcius',
                backgroundColor: 'rgb(210,85,111)',
                borderColor: 'rgb(255, 99, 132)',

                data: CelciusPer3Hour
            }]
        }
        let config = {
            type: 'line',
            data: data,
            options: {}
        };
        myChart = new Chart(
            document.getElementById('chart'),
            config
        );


    }).catch((e) => {
        console.log(e)
    })
}
getOtherWeather('Almaty',0)


requestCity.then(data => {
    cities = data.data.data
    let city = document.getElementById('city')
    console.log("Cities have been gotten")
    let input = document.querySelector('input')
    input.addEventListener('keyup', function (){
        city.innerText = ''
        for (let i = 0; i < cities.length; i++) {
            if(input.value === ""){
                break
            }
            let div = document.createElement('div')
            div.addEventListener('click', ()=>{

                myChart.destroy()
                getOtherWeather(div.innerText,0)
                console.log(div.innerText)
            })
            div.innerText = cities[i]
            if(cities[i].startsWith(input.value))
                city.prepend(div)
        }

    })
})




