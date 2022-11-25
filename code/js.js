document.querySelector("#inputmail").addEventListener("keyup", function(){
    let email = this.value;
    let at = email.indexOf("@");
    let point = email.indexOf(".");

    if(at < 1){
        document.querySelector("#error").innerHTML = "Vul een geldig e-mailadres in.";

    } else {
        document.querySelector("#error").innerHTML = "";
    }

    if(point == -1){
        document.querySelector("#error").innerHTML = "Vul een geldig e-mailadres in.";
    } 

});
