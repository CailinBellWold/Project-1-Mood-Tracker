var ApiKey = "c68nPrb4NwGEUnzP044FJ97Bl3RqTXi7";

var angryBtn = document.querySelector("#angry");
var sadBtn = document.querySelector("#sad");
var calmBtn = document.querySelector("#calm");
var happyBtn = document.querySelector("#happy");

// function to generate Angry GIF 

angryBtn.addEventListener('click',function (){
    
    var url = 'https://api.giphy.com/v1/gifs/search?api_key=c68nPrb4NwGEUnzP044FJ97Bl3RqTXi7&limit=30&rating=g&q=angry';
     
   

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (content) {
    
    console.log(content.data);

   

  for (var i = 0; i < content.data.length; i++) {

    
    var img = document.querySelector("#content");
    var randomNum = Math.floor(Math.random() * content.data.length); 
    img.src = content.data[randomNum].images.downsized.url
    img.alt = content.data[randomNum].title

    
  };

 

  
  });

  

});

// function to generate happy GIF 
happyBtn.addEventListener('click',function (){
  
  var url = 'https://api.giphy.com/v1/gifs/search?api_key=c68nPrb4NwGEUnzP044FJ97Bl3RqTXi7&limit=30&rating=g&q=happy';
   
 

fetch(url)
.then(function (response) {
  return response.json();
})
.then(function (content) {
  
  console.log(content.data);

 

for (var i = 0; i < content.data.length; i++) {

  var img = document.querySelector("#content");
    var randomNum = Math.floor(Math.random() * content.data.length); 
    img.src = content.data[randomNum].images.downsized.url
    img.alt = content.data[randomNum].title
  

  
};




});



});


// function to generate calm GIF 
calmBtn.addEventListener('click',function (){
 
  var url = 'https://api.giphy.com/v1/gifs/search?api_key=c68nPrb4NwGEUnzP044FJ97Bl3RqTXi7&limit=30&rating=g&q=calm';
   
 

fetch(url)
.then(function (response) {
  return response.json();
})
.then(function (content) {
  
  console.log(content.data);

 

for (var i = 0; i < content.data.length; i++) {

  var img = document.querySelector("#content");
  var randomNum = Math.floor(Math.random() * content.data.length); 
  img.src = content.data[randomNum].images.downsized.url
  img.alt = content.data[randomNum].title

  
};




});



});