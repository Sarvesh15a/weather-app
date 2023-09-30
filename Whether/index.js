const apikey="e583dd28927ef223ec3d2c2e0899c7ea"
const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search input")
const searchBtn=document.querySelector(".search button")
const weatherIcon=document.querySelector(".weather-icon")
async function checkWeather(city){
    const responce=await fetch(url+city+`&appid=${apikey}`);
    if(responce.status==404){
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display="none"
    }
    else{
            
    var data=await responce.json();
    console.log(data);
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"Km/hr";
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
    
    if(data.weather[0].main == "Clear"){
        weatherIcon.src="icons8-summer-48.png";
    }
    
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src="icons8-torrential-rain-48.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src="icons8-partly-cloudy-day-48.png";
    }
    else if(data.weather[0].main == "Haze"){
        weatherIcon.src="icons8-partly-cloudy-day-48.png";
    }
    else if(data.weather[0].main == "Clouds"){
        weatherIcon.src="icons8-clouds-48.png";
    }

    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none"
    }

}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
