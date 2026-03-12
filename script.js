let form = document.getElementById("form");
let nom = document.getElementById("nom");
let prenom = document.getElementById("prenom");
let email = document.getElementById("email");
let password = document.getElementById("password");
let date = document.getElementById("date");
let ville = document.getElementById("ville");
let conditions = document.getElementById("conditions");
let genre = document.getElementsByName("genre");


let errNom = document.getElementById("errNom");
let errPrenom = document.getElementById("errPrenom");
let errEmail = document.getElementById("errEmail");
let errPassword = document.getElementById("errPassword");
let errDate = document.getElementById("errDate");
let errVille = document.getElementById("errVille");
let errGenre = document.getElementById("errGenre");
let errCond = document.getElementById("errCond");


function verifier(input, err){

    if(input.value.trim() == ""){
        err.innerHTML = "Champ obligatoire";
        input.style.border = "2px solid red";
    }
    else{
        err.innerHTML = "";
        input.style.border = "2px solid green";
    }

}

// nom
nom.addEventListener("blur", function(){
    verifier(nom,errNom);
});

// prenom
prenom.addEventListener("blur", function(){
    verifier(prenom,errPrenom);
});

// date
date.addEventListener("blur", function(){
    verifier(date,errDate);
});

// ville
ville.addEventListener("blur", function(){
    verifier(ville,errVille);
});

// email
email.addEventListener("blur", function(){
    let valeur = email.value.trim(); 

    if(valeur == ""){
        errEmail.innerHTML = "Email obligatoire";
        email.style.border = "2px solid red";
    }

    else if(valeur.indexOf("@") === -1 || valeur.indexOf(".") === -1){
        errEmail.innerHTML = "Email invalide";
        email.style.border = "2px solid red";
    }
    
    else{
        errEmail.innerHTML = "";
        email.style.border = "2px solid green";
    }
});

// password
password.addEventListener("blur", function(){

    if(password.value.length < 6){
        errPassword.innerHTML="Min 6 caractères";
        password.style.border="2px solid red";
    }
    else{
        errPassword.innerHTML="";
        password.style.border="2px solid green";
    }

});

// genre
function verifierGenre(){
    let choix = false;
    for(let i=0; i<genre.length; i++){
        if(genre[i].checked){
            choix = true;
        }
    }
    if(!choix){
        errGenre.innerHTML = "Choisir un genre";
    } else {
        errGenre.innerHTML = "";
    }
}


// conditions
conditions.addEventListener("change", function(){

    if(!conditions.checked){
        errCond.innerHTML="Accepter les conditions";
    }
    else{
        errCond.innerHTML="";
    }

});

// validation submit

form.addEventListener("submit", function(e){

    let valid = true;

    if(nom.value.trim() === ""){
        errNom.innerText = "Nom obligatoire !";
        nom.style.border = "2px solid red";
        valid = false;
    }else{errNom.innerText=""}

    if(prenom.value.trim() === ""){
        errPrenom.innerText = "Prénom obligatoire !";
        prenom.style.border = "2px solid red";
        valid = false;
    }else{errPrenom.innerText=""}

    if(email.value.trim() === ""){
        errEmail.innerText = "Email obligatoire !";
        email.style.border = "2px solid red";
        valid = false;
    }else{errEmail.innerText=""}

    if(password.value.trim() === ""){
        errPassword.innerText = "Mot de passe obligatoire !";
        password.style.border = "2px solid red";
        valid = false;
    }else{errPassword.innerText=""}

    // date
    if(date.value.trim() === ""){
        errDate.innerText = "Date obligatoire !";
        date.style.border = "2px solid red";
        valid = false;
    }else{
        errDate.innerText = "";
    }

    // genre
    let choix = false;
    for(let i=0; i<genre.length; i++){
        if(genre[i].checked){
            choix = true;
        }
    }

    if(!choix){
        errGenre.innerText = "Choisir un genre !";
        valid = false;
    } else { 
        errGenre.innerText = ""; 
    }

    // ville
    if(ville.value === ""){
        errVille.innerText = "Choisir une ville !";
        valid = false;
    } else { 
        errVille.innerText = ""; 
    }

    // conditions
    if(!conditions.checked){
        errCond.innerText = "Accepter les conditions !";
        valid = false;
    } else { 
        errCond.innerText = ""; 
    }

    if(!valid){
        e.preventDefault();
    }

    // console
    if(valid){
        console.log("Nom:", nom.value);
        console.log("Prénom:", prenom.value);
        console.log("Email:", email.value);
        console.log("Password:", password.value);
        console.log("Date:", date.value);
        console.log("Ville:", ville.value);
        console.log("Conditions acceptées:", conditions.checked);
    }

});