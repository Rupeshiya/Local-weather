var datalat;
var dataloc;
var data;
$(document).ready(function(){

  function newloc(){
    var access_key = '6020d4716e3b0100ec06a06bfc496150';
    $.ajax({
      url: 'http://api.ipstack.com/'+ 'check' + '?' + 'access_key=' + access_key ,

    }).done(function(data){
      datalat = data.latitude;
      dataloc = data.longitude;
      $('.city').html(`
        <div class="rupeshiya">
        <h2> City:-${data.city}</h2>
        <h2> State:-${data.region_name}</h2>
        <h2> Country:-${data.country_name}</h2>
        <h2> Lattitude:-${data.latitude}</h2>
        <h2> Longitude:-${data.longitude}</h2>
        </div>

        `);
        $.ajax({
          url: 'https://api.openweathermap.org/data/2.5/weather?lat='+ data.latitude +'&lon='+ data.longitude + '&units=metric&appid=a70983ac0c0b720c22d918e86de9bd4f'
        }).done(function(temp){
          $('.temp').html(`
            <div class="rupeshiya">
            <h1>Tempareture:-${temp.main.temp}&deg; C</h1>
            <h1>Max-Temp:-${temp.main.temp_max}&deg; C</h1>
            <h1>Min-Temp:-${temp.main.temp_min}&deg; C</h1>
            <h1>Humidity:-${temp.main.humidity} </h1>
            <h1>Pressure:-${temp.main.pressure}</h1>
            <h1>Description:-${temp.weather[0].description}</h1>
            <h1>Main:-${temp.weather[0].main}</h1>
            </div>
            `);
            console.log(datalat);
            console.log(dataloc);
        });

        console.log(datalat);
        console.log(dataloc);
    });
    }
newloc();
//temp();

});
