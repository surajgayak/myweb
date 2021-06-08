const hamberger=document.querySelector(".fa");
const list=document.querySelector(".list");
hamberger.addEventListener("click",()=>{
    hamberger.classList.replace("fa-times","fa-bars");

   if(list.style.visibility=="visible"){
       list.style.visibility="hidden";
       
   }
   else{
       
       list.style.visibility="visible";
       hamberger.classList.replace("fa-bars","fa-times");

   }
   function checkMediaQuery() {
    if (window.innerWidth > 768) {
      list.style.visibility="visible";
    }
  }
  window.addEventListener('resize', checkMediaQuery);
   
  
 
})

const see=documnet.querySelector(".infobtn");
see.addEventListener("click",()=>{
  
})








