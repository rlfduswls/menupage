
var totalnum=0;
function totalnums(){

  const numbuttons=document.querySelectorAll("#numbutton");

 totalnum = Array.from(numbuttons).reduce((total, numbutton) => {
    const count = parseInt(numbutton.dataset.count);
    return total + count;
  }, 0);
  document.getElementById("total").innerText = totalnum;
}


var countA=function(button){
  const numbutton=document.querySelector("#numbutton")
  const countElement =document.getElementById("result")
  const currentCount = parseInt(numbutton.dataset.count);

  if(currentCount>1){
    numbutton.dataset.count=currentCount-1;
    totalnum--;
  }
  
  document.getElementById("total").innerText=totalnum;
  countElement.innerText=numbutton.dataset.count;

}

function countB(button){
  const numbutton=document.querySelector("#numbutton")
  const countElement =document.getElementById("result")
  const currentCount = parseInt(numbutton.dataset.count);
  
  numbutton.dataset.count=currentCount+1;
  totalnum++;
  document.getElementById("total").innerText=totalnum;
 countElement.innerText=numbutton.dataset.count;
 
}

function resetcount(){
  count=1;
  document.getElementById("result").innerText=count;
  totalnum = 0;
  document.getElementById("total").innerText = totalnum;
  
}


var clicked=false;

function resetClicked() {
  clicked = false;

}

// 색상 변경 및 버튼 클릭 시 보이도록  
const numbutton=document.querySelector("#numbutton")
const menu=document.getElementById("menu");
 


function handleClick(e) {
  if (!clicked) {
    menu.style.backgroundColor = "#FFF6EA";
    totalnum++;
    btnvisible();
    document.getElementById("total").innerText = totalnum;
    clicked = true;
  }
}
menu.addEventListener("click", handleClick);

function btnvisible(){
  numbutton.setAttribute('class','active')
}

function cancelbtn(){
  numbutton.removeAttribute('class','active')
  menu.style.backgroundColor="white";
 
}

function cancel(){
  totalnums();
  cancelbtn();
  resetcount();
  
  document.getElementById("total").innerText=totalnum;
  resetClicked();

}

// var menuCount = {{ products|length }}; 
// var colors = ['#FFF6EA', ' #f8e3e3', '#E7F3FF','#f6e2d0']; 

// for (var i = 1; i <= menuCount; i++) {
//   var menucolor = document.getElementById('menu' + i);
//   var color = colors[(i - 1) % colors.length];
//   menucolor.style.backgroundColor = color;
// }


// var circleCount = {{ products|length }}; 
// var circlecolors = ['#FFEDD2', ' #FFBCBC', '#BCDFFF',' #FFD0A5']; 

// for (var i = 1; i <= circleCount; i++) {
//   var ccolor = document.getElementById('circle' + i);
//   var circlecolor = circlecolors[(i - 1) % circlecolors.length];
//   ccolor.style.backgroundColor = color;
// }
