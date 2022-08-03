
const param = {
	"url" : "https://api.openweathermap.org/data/2.5/",
	"appid" : "0deb180b8f03b3fc753ef037b4ca7b66"
}

const outcity=document.querySelector('.city');
const outtemp=document.querySelector('.temp');
const icon=document.querySelector('.weather-icon');
const desc=document.querySelector('.descript');

function showWeather(data) {
	outcity.innerHTML=data.name;
	outtemp.textContent=data.main.temp;
	icon.innerHTML=`<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt=""></img>`;	
	desc.textContent=data.weather[0].main;
}

function getWeather() {
	const cityId = document.querySelector('#city').value;
	fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
	.then(weather => {
		return weather.json()})
		.then(showWeather);
}

getWeather();
document.querySelector('#city').onchange = getWeather;

