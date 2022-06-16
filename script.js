function vibrate(){
   if(!("vibrate" in navigator)){
     alert("Vibrate not supported!");
     return;
   }
   navigator.vibrate(5500);
 }