let emotionEl = document.querySelector('#feeling');
let weatherEl = document.querySelector('#weather');

let emotion;
let weather;
let emotionHistory = [];
let weatherHistory = [];

emotionEl.onclick = function (event) {
  event.preventDefault();
  emotion = event.target.id;
  emotionHistory.unshift(emotion);
  localStorage.setItem('emotionHistory', JSON.stringify(emotionHistory));
};

weatherEl.onclick = function (event) {
  event.preventDefault();
  weather = event.target.id;
  weatherHistory.unshift(weather);
  localStorage.setItem('weatherHistory', JSON.stringify(weatherHistory))
};
