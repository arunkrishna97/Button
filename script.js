function vibrate(){
   if(!("vibrate" in navigator)){
     alert("Call Arun");
     return;
   }
   navigator.vibrate(5500);
    alert("Call Arun")
 }
