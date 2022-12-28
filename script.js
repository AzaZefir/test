let key = '8a4459ad8b0ee1a02b8203a818310024';
let url = `https://api.openweathermap.org/data/2.5/onecall?lat=42.87&lon=74.59&exclude=minutely&lang=ru&units=metric&appid=${key}`;
let city = document.querySelector('#city');
let tempDegree = document.querySelector('#tempDegree');
let tempImg = document.querySelector('#tempImg');
let feelsLike = document.querySelector('#feelsLike');
let humidity = document.querySelector('#humidity');
let clouds = document.querySelector('#clouds');
let sunrise = document.querySelector('#sunrise');
let sunset = document.querySelector('#sunset');
let visibility = document.querySelector('#visibility');
let tempDescription = document.querySelector('#tempDescription');
let allWeather = document.querySelector('.all-weather');

fetch(url)
  .then((response) => response.json())
  // JSON.parse()
  .then((data) => {
    console.log(data);
    city.textContent = data.timezone;
    tempDegree.textContent = `${data.current.temp} °C`;
    let iconUrl = `http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`;
    tempImg.setAttribute('src', iconUrl);
    feelsLike.textContent = `по ощущениям ${data.current.feels_like}°C`;
    humidity.textContent = `влажность ${data.current.humidity}%`;
    clouds.textContent = `облачно ${data.current.clouds}%`;
    sunrise.textContent = `восход ${data.current.sunrise}`;
    sunset.textContent = `закат ${data.current.sunset}`;
    visibility.textContent = `видимость ${data.current.visibility}%`;
    tempDescription.textContent = `${data.current.weather[0].description}`;

    let i = 0;

    data.daily.forEach((element) => {
      let days = [
        'воскресенье',
        'понедельник',
        'вторник',
        'среда',
        'четверг',
        'пятница',
        'суббота',
        'воскресенье',
        'понедельник',
      ];

      let n = new Date().getDay()
      // let k = n.getDay()

      allWeather.insertAdjacentHTML('beforeend',
      `
      <div>
          <span>${days[n + i]}</span>
          <span>днем ${element.temp.day}°C</span>
          <span>вечером ${element.temp.eve}°C</span>
          <img src="http://openweathermap.org/img/wn/${element.weather[0].icon}.png" alt="" />
          <span>${element.weather[0].description}</span>
      </div>
      `
      )
      i++
    });
  });

  //? git - для просмотра всех команд
  //? 1. ругистрируемся в gitHub
  //? 2. скачиваем гит
  //? 3. создаем первый репозиторий
  //? 4. клонируем его в папку на рабочем столе - git clone ссылка на репозиторий
  //? 5. смотрим чтобы мы находились в папке назначения
  //? 6. git status для отображения статуса наших файлов
  //? 7. git add . добавляем файл после чегоон будет в статусе ожидания 
  //? 8. git commit -m '...' с помощью этой команды создаем комит, указваем что именно мы добавляем
  //? 9. git push позволяет окончатеоьно добавить файл в репозиторий, тут же необходимо прописать пороль и логин
  //? 10. далее если вы хотите работая в команде стянуть все изменения с репозитория 
        //? 10.1. также клонируете его - git clone ссылка на репозиторий
        //? 10.2. git pull чтобы стянуть все изменения
        //? 10.3. дальше повторяем  git add . git commit -m "..." git push

        //! при этом каждый раз убеждаемся что работаем с актуальным репозиторием т.е свежим иначе будет ошибка при слиянии 

