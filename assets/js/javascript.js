//create an array of strings, each one related to a topic that interests you. Save it to a variable called topics.
let cartoons = ["adventure time", "samurai jack", "archer", "futurama", "the simpsons", "the boondocks", "the incredibles", "fosters home for imaginary friends",
              "batman", "rugrats"];

let createButtons = () => {

  // Your app should take the topics in this array and create buttons in your HTML.
  cartoons.forEach(element => {

    // Get reference to existing ul element, create new li and button elements
    let ul = $("ul");
    let li = $("<li>Hello");
    let button = $("<button>", { 
      text: element, 
      value: element
    });
    addCSS(ul, li, button);
  });
}; //END - createButtons

//------------------------------------------------
let createSingleButton = (value) => {
  let ul = $("ul");
  let li = $("<li>Hello");
  let button = $("<button>", { 
    text: value, 
    value: value
  });
  addCSS(ul, li, button);
};

//------------------------------------------------

let addButton = () => {

  $("#addAnimal").on("click", function(event){
    // event.preventDefault() can be used to prevent an event's default behavior.
    // Here, it prevents the submit button from trying to submit a form when clicked
    event.preventDefault();

    let value = $("#animal-input").val();
    createSingleButton(value);
    buttonClick();
  });
}; //END - addButton

//------------------------------------------------

let addCSS = (ul, li, button) => {

  //add css styling to buttons
  ul.append(li).append(button).css({
    "display": "flex",
    "flex-direction": "row",
    "flex-wrap": "wrap"
  });
}; //END - addCSS

//------------------------------------------------
let buttonClick = () => {

  // launch onclick functionality into button variable
  $("button").on("click", function () {

    //This is my API key
    let APIKey = "lf6U0Z6odKx17BGv7FlBn4YNEPUW7UTl";

    //This is value of the button clicked (that is, the specific cartoon user wants)
    let q = $(this).val();

    // When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + q + "&api_key="+ APIKey + "&limit=10";

    //Makes a request to the server for specific data and returns that data
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {

      //Loops through each object in response object; goal is to target img url & rating
      response.data.forEach(element => {

        var element = element;
        
        //create img element and add attributes.
        var image = $("<img>").attr({
          "src": element.images.original_still.url,
          "alt": "gif",
          "data-still": element.images.original_still.url,
          "data-animate": element.images.original.url,
          "data-state": "still",
          "class": "gif"
        });
        //attach img element to main element
        $("main").append(image);
      });
    });
  });
}; //END - addOnClickFunctionality
//------------------------------------------------

//On click, detrmines state and either "pauses" or "play" gif
let gifClick = () => {
  $(".gif").on("click", function() {
    // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
    let state = $(this).attr("data-state");
    console.log(state);
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });
};




$(document).ready(function() {
  createButtons();
  buttonClick();
  gifClick();
  addButton();

  $(".gif").on("click", function() {
    console.log("You've clicked on image");
    // $("img").attr({
    //   "src": element.images.original.url,
    //   "alt": "gif",
    //   "class": "animated"
    // });

  });



});


// When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

// Under every gif, display its rating (PG, G, so on).

// Try using a loop that appends a button for each string in the array.


// When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page.
// When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing.

// Under every gif, display its rating (PG, G, so on).


// This data is provided by the GIPHY API.
// Only once you get images displaying with button presses should you move on to the next step.


// Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page.

