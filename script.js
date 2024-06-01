const apiKey = "212c6bcc54cae19a40e0bc9434c0e800";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;    
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";    
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";    
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";    
}

searchBox.addEventListener("keyup", (e)=>{
    if(e.keyCode === 13){
        checkWeather(searchBox.value);
        searchBox.value = "";     
    }     
})

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);     
    searchBox.value = "";     
})
