$(document).ready(function(){
    // Define APIs
    // Start building URLS
    // When City name is entered, url comes back. 
    console.log("Hello World");

    var APIkey = "9caef82cbea05a5c8889026ba089056e";
    var queryURL = 
        "https://api.openweathermap.org/data/2.5/forecast?q=Atlanta&appid=" + APIkey

        $.ajax({
            url: queryURL,
            method: 'GET'
          })
          .then(function (response) {
            console.log(response);
        
        $("#temperature").text(response.list["0"].main.temp)  
        console.log(response.list["0"].main.humidity)

        $("#humidity").text(response.list["0"].main.humidity)  
        console.log(response.list["0"].main.humidity)

        $("#windspeed").text(response.list["0"].wind.speed)  
        console.log(response.list["0"].main.humidity)

        $("#uvindex").text(response.list["0"].main.humidity)  
        console.log(response.list["0"].main.humidity)

            //create a function that has an element called
    })
      //create a function that has an element calle
    //select card element that you are appending it to

});
    // display unordered list at none until search has been made. 
    // save search to Local Storage and put it in a list 