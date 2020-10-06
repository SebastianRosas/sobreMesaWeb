var menumobile =  document.querySelector("#menumobile");

function abrirMenu (){
    if(menumobile.className == "menumobile") {
        menumobile.className = "menumobile visible";
    } else {
        menumobile.className = "menumobile";
    }
 }


