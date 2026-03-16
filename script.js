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


nom.addEventListener('keyup',()=>validerInput(nom,errNom,"le nom est obligatoire !!"))
prenom.addEventListener('keyup',()=>validerInput(prenom,errPrenom,"le prenom est obligatoire !!"))
email.addEventListener('keyup',()=>validerInput(email,errEmail,"l'email est obligatoire !!"))
password.addEventListener('keyup',()=>validerInput(password,errPassword,"le password est obligatoire !!"))
date.addEventListener('change',()=>validerInput(date,errDate,"la date est obligatoire !!"))
ville.addEventListener('change',()=>validerInput(ville,errVille,"la ville est obligatoire !!"))
genre.forEach(g=>{
    g.addEventListener('change', validerGenre)
})
conditions.addEventListener('change', validerConditions)

// validation de genre
function validerGenre(){
    let selected = false;

    genre.forEach(g=>{
        if(g.checked){
            selected = true;
        }
    });

    if(!selected){
        errGenre.textContent = "le genre est obligatoire !!";
        errGenre.style.color = "red";
    }else{
        errGenre.textContent = "";
    }
}

// checkbox validaation
function validerConditions(){
    if(!conditions.checked){
        errCond.textContent = "les conditions sont obligatoires !!";
        errCond.style.color="red";
    }else{
        errCond.textContent="";
    }
}

// input validition
function validerInput(input,err,message){
    if(input.value.trim()===""){
        err.textContent = message;
        err.style.color="red";
    }
    else{
        err.textContent = "";
    }
}

// les donnees des utilisateurs
var btn_inscrire=document.getElementById("btn");
var table_tbody=document.getElementById("table_body");

var Utilisateurs=[]

btn_inscrire.addEventListener('click' , ajouter)

function ajouter(e){
    e.preventDefault();


    //  genre choisi
    let genreValue = "";

    genre.forEach(g=>{
        if(g.checked){
            genreValue = g.value;
        }
    });


    var user= {
       nom: nom.value,
        prenom: prenom.value,
        email: email.value,
        password: password.value,
        date: date.value,
        ville: ville.value,
        genre: genreValue,
        conditions: conditions.checked

    }
    Utilisateurs.push(user);

    affichage();

    form.reset();
    
}

// affichage du formulaire
function affichage(){
    table_tbody.innerHTML="";

  Utilisateurs.forEach(function(x){

        let table_ligne = `<tr>
            <td>${x.nom}</td>
            <td>${x.prenom}</td>
            <td>${x.email}</td>
            <td>${x.password}</td>
            <td>${x.date}</td>
            <td>${x.ville}</td>
            <td>${x.genre}</td>
        </tr>`;

        table_tbody.insertAdjacentHTML("beforeend",table_ligne);

    })
}




