/*
    This is your main stylesheet, you should use it only
    to include other styles into your web app.
*/
//include jquery into the bundle and store its contents into the $ variable
import $ from "jquery";
//include bootstrap npm library into the bundle
import 'bootstrap';
//include your own styles
import '../style/index.scss';

window.onload = function(){
 var cardFace = Math.floor(Math.random() * 13) + 1;
 var myElement = document.getElementById("cardFace");
 var cardTheIconU = document.getElementById("addClassU");
 var cardTheIconD = document.getElementById("addClassD");
 if(cardFace===1){
     myElement.innerHTML = 'A';
 }
 else if(cardFace===11){
     myElement.innerHTML = 'J';
 }
 else if(cardFace===12){
     myElement.innerHTML = 'Q';
 } 
  else if(cardFace===13){
     myElement.innerHTML = 'K';
 } 
 else {
    myElement.innerHTML = cardFace;
 }
 var cardIcon = Math.floor(Math.random() * 4) + 1;
if(cardIcon===1){
    cardTheIconU.classList.add("lozenge");
     cardTheIconD.classList.add("lozenge");
 } else if(cardIcon===2){
    cardTheIconU.classList.add("blackspadesuit");
    cardTheIconD.classList.add("blackspadesuit");
 } else if(cardIcon===3){
    cardTheIconU.classList.add("shamrock");
    cardTheIconD.classList.add("shamrock");
 }else if(cardIcon===4){
    cardTheIconU.classList.add("valentine");
    cardTheIconD.classList.add("valentine");
 }
 

 
 
 
 
 
 
 
};

