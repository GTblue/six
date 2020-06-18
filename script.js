$(document).ready(function(){
    // Define APIs
    // Start building URLS
    // When City name is entered, url comes back. 

    var APIkey = "9caef82cbea05a5c8889026ba089056e";
    var queryURL = 
        "https://api.openweathermap.org/data/2.5/forecast?q=Atlanta&appid=" + APIkey

        $.ajax({
            url: queryURL,
            method: 'GET'
          })
          .then(function (response) {
            console.log(response);
        
        $("#city").text(response.city.name)  
        console.log(response.city.name)

        $("#temperature").text(response.list["0"].main.temp)  
        console.log(response.list["0"].main.temp)

        $("#humidity").text(response.list["0"].main.humidity)  
        console.log(response.list["0"].main.humidity)

        $("#windspeed").text(response.list["0"].wind.speed)  
        console.log(response.list["0"].wind.speed)

        $("#uvindex").text(response.list["0"].main)  
        console.log(response.list["0"].main)

        $("#temp1").text(response.list["1"].main.temp)  
        console.log(response.list["1"].main.temp)

        $("#humid1").text(response.list["1"].main.humidity)  
        console.log(response.list["1"].main.humidity)
        
        $("#temp2").text(response.list["2"].main.temp)  
        console.log(response.list["1"].main.temp)

        $("#humid2").text(response.list["2"].main.humidity)  
        console.log(response.list["2"].main.humidity)

        $("#temp3").text(response.list["3"].main.temp)  
        console.log(response.list["3"].main.temp)

        $("#humid3").text(response.list["3"].main.humidity)  
        console.log(response.list["3"].main.humidity)

        $("#temp4").text(response.list["4"].main.temp)  
        console.log(response.list["4"].main.temp)

        $("#humid4").text(response.list["4"].main.humidity)  
        console.log(response.list["4"].main.humidity)

        $("#temp5").text(response.list["5"].main.temp)  
        console.log(response.list["5"].main.temp)

        $("#humid5").text(response.list["5"].main.humidity)  
        console.log(response.list["5"].main.humidity)
            //create a function that has an element called
    })
      //create a function that has an element calle
    //select card element that you are appending it to

});
    // display unordered list at none until search has been made. 
    // save search to Local Storage and put it in a list 