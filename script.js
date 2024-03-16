const searchbutton = document.getElementById('searchbutton')
const inputbox = document.querySelector('#search')
const weather_img = document.querySelector('#image')
const temperature = document.querySelector(".temperature")
const weather = document.querySelector(".details")
const place = document.querySelector('.location')
const humidity  = document.querySelector('#humidity')
const wind = document.querySelector('#wind')

searchbutton.addEventListener('click',()=>{
    getweather(inputbox.value);
})

async function getweather(city){
    const apikey = '6832586e70dfdc36adb019256105a05f'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
    try{

        let response = await fetch(url)
        let response2 = await response.json()
        console.log(response2)
        place.innerHTML = `${response2.name}`
        temperature.innerHTML = `${Math.round(response2.main.temp - 273)}<sup>°C</sup>`
        weather.innerHTML = `${response2.weather[0].description}`
        wind.innerHTML = `${response2.wind.speed}Km/H`
        humidity.innerHTML = `${response2.main.humidity}%`
        if(response2.weather[0].main ==='Clouds'){
            weather_img.src = 'images/cloud.png'
        }
        else if(response2.weather[0].main ==='Clear'){
            weather_img.src = 'images/clear.png'
        }
        else if(response2.weather[0].main === 'Rain'){
            weather_img.src = 'images/rain.png'

        }
        else if(response2.weather[0].main ==='Mist'){
            weather_img.src = 'images/mist.png'
        }
        else{
            weather_img.src = 'images/snow.png'
        }
    }
    catch(error){
        weather_img.src = 'images/404.png'
        place.innerHTML= `city not found`
        weather.innerHTML=' '
        wind.innerHTML = ' '
        humidity.innerHTML = ' '
        temperature.innerHTML= ' '
    }

}