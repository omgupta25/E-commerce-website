let card = document.getElementById("men");
let card2 = document.getElementById("martWomen");
let knowabout = document.querySelector(".about");

let join = document.querySelector(".contact");


let blog = document.querySelector(".mart2");

let mainPage = document.querySelector(".main");

let mid = document.querySelector(".letter"); 

let item = document.querySelector(".footer_item");

function home(){
  mainPage.style.display = "flex";
  card.style.display = "block";
  card2.style.display = "block";
  blog.style.display = "block";
  knowabout.style.display = "none";


  document.getElementById("blog").style.color = "black";
  document.getElementById("Home").style.color = "rgb(2, 173, 173)";
  document.getElementById("shop").style.color = "black";
  document.getElementById("about").style.color = "black";
  document.getElementById("contact").style.color = "black";
}

function shops(){
  mainPage.style.display = "none";
  card.style.display = "block";
  card2.style.display = "block";
  blog.style.display = "none";
  knowabout.style.display = "none";
  join.style.display = "none";

  document.getElementById("blog").style.color = "black";
  document.getElementById("Home").style.color = "black";
  document.getElementById("shop").style.color = "rgb(2, 173, 173)";
  document.getElementById("about").style.color = "black";
  document.getElementById("contact").style.color = "black";
}

function blogs(){
  mainPage.style.display = "none";
  card.style.display = "none";
  card2.style.display = "none"
  // card2.style.display = "none";
  blog.style.display = "block";
  // knowabout.style.display = "none";
  // join.style.display = "none";


  document.getElementById("blog").style.color = "rgb(2, 173, 173)";
  document.getElementById("Home").style.color = "black";
  document.getElementById("shop").style.color = "black";
  document.getElementById("about").style.color = "black";
  document.getElementById("contact").style.color = "black";
}

function abouts(){
  mainPage.style.display = "none";
  card.style.display = "none";
  card2.style.display = "none";
  blog.style.display = "none";
  knowabout.style.display="block";
  join.style.display = "none";


  document.getElementById("blog").style.color = "black";
  document.getElementById("Home").style.color = "black";
  document.getElementById("shop").style.color = "black";
  document.getElementById("about").style.color = "rgb(2, 173, 173)";
  document.getElementById("contact").style.color = "black";
}


function contacts(){
  mainPage.style.display = "none";
  card.style.display = "none";
  card2.style.display = "none";
  blog.style.display = "none";
  knowabout.style.display="none";
  join.style.display = "block";



  document.getElementById("blog").style.color = "black";
  document.getElementById("Home").style.color = "black";
  document.getElementById("shop").style.color = "black";
  document.getElementById("about").style.color = "black";
  document.getElementById("contact").style.color = "rgb(2, 173, 173)";
}

// cart

function show(img){
  let newImg = document.getElementById("newImg");
  console.log(img);
  newImg.src=img.src;

  mainPage.style.display = "none";
  card.style.display = "none";
  card2.style.display = "none";
  blog.style.display = "none";
  knowabout.style.display="none";
  join.style.display = "none";
  // letter.style.display = "none";
  // item.style,display = "none";


  document.querySelector(".cart").style.display="flex";
}


function addCart(){
  alert("Added to Cart");
  location.reload();
}
