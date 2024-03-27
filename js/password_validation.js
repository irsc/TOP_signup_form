
let pass = document.getElementById("password");
let confirma = document.getElementById("confirm");
let errorSpan = document.getElementById("passwordSpan");
let button = document.getElementById("createAccount");


confirma.addEventListener("input",()=>{
    if(pass.value == confirma.value){
        errorSpan.classList.add("hidden");
    }else{
        errorSpan.classList.remove("hidden");
    }
})
