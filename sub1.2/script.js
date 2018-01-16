//1

document.getElementById("afiseaza").addEventListener('click', numberClicks);
var numberClicks = 0;
var nrImagini = document.getElementsByTagName("img").length; //numara imaginile
var imagini = document.getElementsByTagName("img"); // vector imagini
function numberClicks(){
    numberClicks = parseInt(numberClicks)+1;
    //console.log(numberClicks);
   // console.log('lala');

//console.log(numberClicks);
//var nrImagini = document.getElementsByTagName("img").length; //numara imaginile
//console.log(nrImagini);
//var imagini = document.getElementsByTagName("img"); // vector imagini


var imgNode = document.createElement("img");
var imgAppend = parseInt(numberClicks) % parseInt(nrImagini);
imgNode.src = imagini[imgAppend].src;
document.getElementById("galerie").appendChild(imgNode);

}




//2


var setIntervalImagini = setInterval(function(){
    
    var imagineSterg = document.getElementById("galerie");
    if(document.getElementById("galerie").childElementCount >0)
        imagineSterg.removeChild(imagineSterg.childNodes[0]);
    console.log(document.getElementById("galerie").childElementCount + ' dsds');
    if(document.getElementById("galerie").childElementCount == 0)
    {
        clearInterval(setIntervalImagini);
        console.log("galeria e goala pusca");
    }
},10000);
