// Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called topics.
let cartoons = ["adventure time", "samurai jack", "archer", "futurama", "the simpsons", "the boondocks", "the incredibles", "fosters home for imaginary friends",
              "batman", "rugrats"];

// Your app should take the topics in this array and create buttons in your HTML.
cartoons.forEach(element => {
  console.log(element);

  // Get reference to existing tbody element, create new li and button elements
  let ul = $("ul");
  let li = $("<li>Hello");
  let button = $("<button>",
  {
      text: element,
      click: function () { 

        // When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=lf6U0Z6odKx17BGv7FlBn4YNEPUW7UTl&limit=10";

        //Makes a request to the server for specific data and returns that data
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {

          //Loops through each object in response object; goal is to target img url & rating
          response.data.forEach(element => {
            //create a element and add url.
            let url = $("<a>").attr("href", element.url);
            // Then create img element and attach previous element.
            let img = $("<img>").append(url);
            // attach img with url to main element
            $("main").append(img);

            console.log(element);
            
          });

            // let img =  $("<img>");
            // img.attr("src", response);


        });
        

        // When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

        // Under every gif, display its rating (PG, G, so on).
        
      }
  });
  ul.append(li).append(button).css({
    "display": "flex",
    "flex-direction": "row"
  });

});


// Try using a loop that appends a button for each string in the array.


// When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
// When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

// Under every gif, display its rating (PG, G, so on).


// This data is provided by the GIPHY API.
// Only once you get images displaying with button presses should you move on to the next step.


// Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page.







// $( document ).ready(function() {
    
// });
    
    
    
    // Example queryURL for Giphy API
    // var queryURL = "https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=lf6U0Z6odKx17BGv7FlBn4YNEPUW7UTl&limit=5";

    // $.ajax({
    //   url: queryURL,
    //   method: "GET"
    // }).then(function(response) {
    //     console.log(response);
    //     let body = $("body");
    //     body.append(response);
    // });