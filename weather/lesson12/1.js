'use strict'
let dataApi,
    myData = [],
    labels = [
        '00:00',
        '03:00',
        '06:00',
        '09:00',
        '12:00',
        '15:00',
        '18:00',
        '21:00'],
    myChart


let draw = function (day) {
    myData = []


    axios.get('http://api.weatherapi.com/v1/forecast.json?key=e9fb9a35dc124ef4a44113239210712&q=Almaty&days=7&aqi=no&alerts=no')
        .then((res) => {
            dataApi = res
            let myCurData = res.data.forecast.forecastday



            for (let i = 0; i < myCurData[day].hour.length; i += 3) {
                myData.push(myCurData[day].hour[i].temp_c)
            }


            let data = {
                labels: labels,
                datasets: [{
                    label: 'Temperatures in Celcius',
                    backgroundColor: 'rgb(210,85,111)',
                    borderColor: 'rgb(255, 99, 132)',

                    data: myData
                }]

            };


            let config = {
                type: 'line',
                data: data,
                options: {}
            };
            myChart = new Chart(
                document.getElementById('chart'),
                config
            );


        })
        .catch((err)=>{
            console.log(err)
        })


}

draw(0)

let redraw = function (day) {
    myChart.destroy()
    draw(day)
}