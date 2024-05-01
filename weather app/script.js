
const apiKey = "86d1a411b6f78d6fd2018e62e0127840";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

const searchbox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weathericon = document.querySelector("#weather-icon")

async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}` );
    let data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C" ;
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


    if(data.weather[0].main == "Clouds"){
        weathericon.src = "images/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        weathericon.src = "images/clear.png"
    }
    else if(data.weather[0].main == "Rain"){
        weathericon.src = "images/rain.png"
    }

    document.querySelector(".weather").style.display = "block "
}
searchBtn.addEventListener( "click",()=>{
    checkWeather(searchbox.value);

});