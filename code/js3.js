let btnGo = document.querySelector(".buttonA2");
let timer = 30;

btnGo.addEventListener("click", function(e) {
    e.preventDefault();
    let clicked = true; 

    if(clicked == true){
        
        document.querySelector(".buttonA2").innerHTML = `Ademen...`;
        document.querySelector(".breath1").setAttribute("class", "breath1animation");      
    }

    let x = setInterval(function() {
        
        timer --;

        document.querySelector(".buttonA2").innerHTML = `Ademen: ${timer}`;
        
        
        if(timer == "0"){
            clearInterval(x);
            timer = 30;
            document.querySelector(".buttonA2").innerHTML = `Goed gedaan!`;
            document.querySelector(".smalllink").innerHTML = "Verder";
            document.querySelector(".breath1animation").setAttribute("class", "breath1");
            
        }
 
    }, 1000);
    
});