const apiKey = "212c6bcc54cae19a40e0bc9434c0e800";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }

    else {
        var data = await response.json();
    
        console.log(data);
    
        document.querySelector(".city").innerHTML = data.name;    
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";    
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";    
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"; 
        
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "./Images/cloudy.png";
        } 
        else if(data.weather[0].main == "Haze"){
            weatherIcon.src = "./Images/haze.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "./Images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "./Images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "./Images/mist.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "./Images/clear.png";
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "./Images/snow.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }


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
