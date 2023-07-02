const headerA=document.querySelector("#headerA");
const headerB=document.querySelector("#headerB");
headerA.addEventListener("click",(e)=>{
    headerA.style.backgroundColor="#FFBCBC";
    headerB.style.backgroundColor="#E6E6E6";;
   })

   headerB.addEventListener("click",(e)=>{
    headerB.style.backgroundColor="#FFBCBC";
    headerA.style.backgroundColor="#E6E6E6";;
   })   

   var target = document.querySelectorAll('#btn_open');
   var btnPopClose = document.querySelectorAll('.pop_wrap .btn_close');
   var targetID;
   
   for(var i = 0; i < target.length; i++){
     target[i].addEventListener('click', function(){
       targetID = this.getAttribute('href');
       document.querySelector(targetID).style.display = 'block';
     });
   }
   
   for(var j = 0; j < target.length; j++){
     btnPopClose[j].addEventListener('click', function(){
       this.parentNode.parentNode.style.display = 'none';
     });
   }
   