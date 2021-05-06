// ---------------------------------------------------------------------------------------

// OLD LOCALSTORAGE

// let emotionEl = document.querySelector('#feeling');
// let weatherEl = document.querySelector('#weather');

// let emotion;
// let weather;
// let emotionHistory = [];
// let weatherHistory = [];

// emotionEl.onclick = function (event) {
//   event.preventDefault();
//   emotion = event.target.id;
//   emotionHistory.unshift(emotion);
//   localStorage.setItem('emotionHistory', JSON.stringify(emotionHistory));
// };

// weatherEl.onclick = function (event) {
//   event.preventDefault();
//   weather = event.target.id;
//   weatherHistory.unshift(weather);
//   localStorage.setItem('weatherHistory', JSON.stringify(weatherHistory))
// };

// ---------------------------------------------------------------------------------------

// NEW LOCAL STORAGE

$('#spotify-frame').css('visibility', 'hidden');
// document.querySelector('[="Play"]').click()
$('.feeling-button').prop("disabled",true);

$('.weather-button').on('click', function() {
  $('.feeling-button').prop("disabled",false);
    $('.hidden').empty();
    let weatherButton = $(this).text();
    let weatherEl = weatherButton;

    
    if (weatherEl == '❄️') {
        weatherEl = 'Snow';
    } else if (weatherEl == '☁️') {
        weatherEl = 'Cloud'
    } else if (weatherEl == '☔️') {
        weatherEl = 'Rain';
    } else {
        weatherEl = 'Sunny';
    }

    
    let weatherDaily = weatherEl;
    
    // Bandaid 
    const spanWeather = $('<div>').addClass('hidden');
    const weatherSpan = $('<span>').addClass('span-hidden').text(`${weatherEl}`);
    spanWeather.append(weatherSpan);
    $('.footer').append(spanWeather)
    $('.hidden').css('visibility', 'hidden');

    return(weatherDaily);
}); 


$('.feeling-button').on('click', function(weatherDaily) {
    let feelingEl =  $(this).text();
    let weatherEl = $('.span-hidden').text();
    
    // let feelingDiv = $('#feeling');
    // feelingDiv.style.display = 'none';
    // $('#feeling').css('visibility', 'hidden');
    
    let dailyMood = JSON.parse(localStorage.getItem("dailyMood")) || [];
    let moodEl = feelingEl;
    let today = moment().format('YYYY-MM-DD');
    let newMood = {
        date: today,
        mood: moodEl,
        weather: weatherEl
    };

    
    dailyMood.push(newMood);
    localStorage.setItem('dailyMood',JSON.stringify(dailyMood));
});


function onLoad() {

    if (localStorage.getItem("dailyMood") === null) {
        return;
    };

    let dailyMood = JSON.parse(localStorage.getItem("dailyMood") || []);
    dailyMood.forEach(function(user, index) {
        
        const tableRow = $('<tr>').addClass('card-body');
        const tdId = $('<td>').text(`${index+1}`);
        const tdDate = $('<td>').text(`${user.date}`);
        const tdMood = $('<td>').addClass('card-temp').text(`${user.mood}`);
        const tdWeather = $('<td>').addClass('card-wind').text(`${user.weather}`);

        tableRow.append(tdId, tdDate,tdMood, tdWeather);
        $('#mood-history').append(tableRow);
    });
}


onLoad();


$("#clear-data").on("click", clearData);
$("#go-back").on("click", goBack);

function goBack() {

    window.history.back();
    
}

function clearData() {
    localStorage.clear();
    location.reload();
}

