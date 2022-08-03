'use strict';

(function(){
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".menu-bar");
  const links = document.querySelectorAll(".menu-bar li");
  
  hamburger.addEventListener('click', ()=>{
     //Animate Links
    //  console.log("hamm click")
      navLinks.classList.toggle("open");
      links.forEach(link => {
          link.classList.toggle("fade");
      });
    })
  //date formate
  let d = new Date();
  let month = d.toLocaleString("eu-US", { month: "short" });
  console.log("SAdasd",month)
  card_month.innerHTML = `${month}`;
  //Cache elements for use
  // var hamburger = document.getElementById('menu');
  var s = document.getElementById('search');
  var likes = document.getElementById('likesCounter');
  var submit = document.getElementById('submit');
  var likes = document.getElementById('parent');
  
  //Event Handlers
  var search = s.addEventListener('click', searchHandler);
  var submitVal = submit.addEventListener('click', onSubmit);
  var likesEvent = likes.addEventListener('click',likesHandler);
  
  //Handler Logic
  
  function searchHandler(e) {
    var sr = document.getElementById('search-bar');
    
    if(sr.style.display === 'none' && submit.style.display === 'none') {
      sr.style.display = 'block';
      submit.style.display = 'block';
    }
    
    else {
      sr.style.display = 'none';
      submit.style.display = 'none';
    } 
  }
  
  function onSubmit() {
    var inputVal = document.getElementById('search-bar').value;
    var arrList = [];  
    document.getElementById('search-bar').value = "";
  } 
  
  function likesHandler(e) {
    e.preventDefault();
    if(e.target.nodeName === "SPAN") {
      var currentNum = e.target.innerText;
      var currentId = e.target.id;
      likesIncrement(currentNum, currentId);
    }
  }
  
  function likesIncrement(currentNum, currentId) {
    currentNum = currentNum.replace(/,/g, "");
    currentNum = parseInt(currentNum);
    currentNum++;
    currentNum = String(currentNum);
    currentNum = numberWithCommas(currentNum);
    document.getElementById(currentId).innerText = currentNum;
  }
    
  function numberWithCommas(likes) {
    return likes.replace(/(.)(?=(.{3})+$)/g,"$1,");
  }

 }());


 function handleIcon(ids){
  var x = document.getElementById(`${ids}`);
  // var y = document.getElementById(`${ids}`).value;
  // var y = document.getElementById(`${ids}`);
  // var value = y.innerText;
  // console.log("value++", +value+1)

  // y.insertAdjacentText('afterbegin ', +value+1);
  // document.getElementById(`${ids}`).innerHTML ;
  // console.log("asdasd",y)
  if (x.style.color == "rgb(255, 255, 255)") {
    x.style.color = "red";
  } else {
    x.style.color = "#fff";
  }
  // if()
  //  document.getElementById(`${ids}`).style.color = "red";
  //  let x = document.getElementById(`${ids}`).value;
  //  console.log("xzxZXz",x)


  // document.getElementsByClassName("likes2").style.color = "red";  .style.color = "red";

 }



