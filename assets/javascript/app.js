$(document).ready(function() {

var topics = [ "Greyhound", "Pug", "Bulldog", "Shih Tzu", "Shiba Inu", "Boxer Dog", "Corgie"];	//setup buttons for exisiting topics
var selection;
var toggleGif;

//create original buttons
var defaultBtns = function () {
	$("#categories").html("");
	for (var i=0; i < topics.length; i++) {
		var appendBtns = "<button class='catBtn' data-name=" + topics[i] + ">" + topics[i] + "</button>";
		$("#categories").append(appendBtns);
	}
}
defaultBtns();	//create all startup Buttons


//search box that adds item to a new button
//also - adds topic to the array
//also - adds new button to the categories area
$("#submit").click(function addNewTopic() {

	console.log(topics);
	selection = $(this).attr("data-name");

	if(topics.indexOf(newTopic) < 0) {
		var newTopic = $("#addTopic").val().trim();
		console.log(newTopic);
		var addTopic = "<button class='catBtn' data-name=" + newTopic + ">" + newTopic + "</button>";
		topics.push(newTopic);
		$("#categories").append(addTopic);
		$("#addTopic").val("");
		console.log(topics);
	} else {
		console.log("nope");
	}
});


//search Giphy when a button is clicked.
//display gifs in the #gifs ID.

function displayGifs() {
	
	selection = $(this).attr("data-name");
	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + selection + "&api_key=dc6zaTOxFJmzC&limit=12";

	$.ajax({
	  url: queryURL,
	  method: "GET"
	}).done(function(response) {
		console.log(response);
		var giphyArray = response.data;
		$("#gifs").empty();
		for (var i=0; i < giphyArray.length; i++) {
			toggleGif = response.data[i].images.fixed_height_still.url;
			var appendGif = "<div class='gif'>" + "<div class='rating'>Rating: " + response.data[i].rating + "</div><br>" + "<img src=" + toggleGif + ">" + "</div>";
	 		$("#gifs").append(appendGif);
		}	  
	});
};

//When GIF is clicked start animation.
// $(".gif").click(function() {

// 	if() {

// 	}

// 	toggleGif = response.data[i].images.fixed_height.url;
// 	$(this).empty();
// 	var appendGif = "<div class='rating'>Rating: " + response.data[i].rating + "</div><br>" + "<img src=" + toggleGif + ">";
// 	$(".gifs").append(appendGif);
// 	console.log("hey boiy");
// });

$(document).on("click", ".catBtn", displayGifs);

});


