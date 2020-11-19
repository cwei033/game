// URL to API (query string always beings with question mark)
var api = "http://api.giphy.com/v1/gifs/search?"
// API code
var apiKey = "&api_key=fxitlX3IlNs8eJ8twliHVbLvTrxVZmic";
//search
var query = "&q=meme";


function setup() {
  noCanvas();
  //direct URL to gif
  var url = api + apiKey + query;
  //p5 function where you give URL from API and it gives back JSON, callback function
  loadJSON(url, gotData);
}

function gotData(giphy) {
  //runs through all called gif
  for (var i = 0; i < giphy.data.length; i++) {
    //creates HTML element of gif
    createImg(giphy.data[i].images.original.url);
  }
}

function draw() {
  // background(220);
}
