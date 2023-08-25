

const url = document.getElementsByClassName('urlText')

const topText = document.getElementsByClassName('top-text')

const bottomText = document.getElementsByClassName('bottom-text')

const btn = document.getElementById('btn')
//console.log(btn)
const memeimage = document.getElementById('memeimg')

btn.addEventListener("click", myFunction);

function myFunction() {

  memeimage.src = url[0].value;
   
  console.log(url[0].value);
  console.log(topText[0].value);
}