document.getElementById("box1").addEventListener("click", display1);
function display1(event){
    
      if(event.target.id == "box1"){
        console.log("you click on Grandfather's area");
      }
      else
       if(event.target.id == "box2"){
        console.log("you click on father area");
      }
      else{
        console.log("you click on child area");
      }
} 