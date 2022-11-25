document.querySelector("#option1").addEventListener("click", function(){
    document.querySelector("#option1").classList.toggle("buttonB3toggle");
    document.querySelector("#option2").classList.remove("buttonB4toggle");
    document.querySelector("#option3").classList.remove("buttonB4toggle");
    document.querySelector("#option4").classList.remove("buttonB4toggle");
});

document.querySelector("#option2").addEventListener("click", function(){
    document.querySelector("#option2").classList.toggle("buttonB4toggle");
    document.querySelector("#option1").classList.remove("buttonB3toggle");
    document.querySelector("#option3").classList.remove("buttonB4toggle");
    document.querySelector("#option4").classList.remove("buttonB4toggle");
});

document.querySelector("#option3").addEventListener("click", function(){
    document.querySelector("#option3").classList.toggle("buttonB4toggle");
    document.querySelector("#option1").classList.remove("buttonB3toggle");
    document.querySelector("#option2").classList.remove("buttonB4toggle");
    document.querySelector("#option4").classList.remove("buttonB4toggle");
});

document.querySelector("#option4").addEventListener("click", function(){
    document.querySelector("#option4").classList.toggle("buttonB4toggle");
    document.querySelector("#option1").classList.remove("buttonB3toggle");
    document.querySelector("#option2").classList.remove("buttonB4toggle");
    document.querySelector("#option3").classList.remove("buttonB4toggle");
});