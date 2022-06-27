var formValide = document.getElementById('Bouton_envoi');
var prenom = document.getElementById('prenom');
var missPrenom = document.getElementById('missPrenom');
var text_valid = /[A-Za-z]/;
console.log(formValide+prenom+missPrenom)

formValide.addEventListener('click', validation);


function validation(e)

{
    if (prenom.validity.valueMissing)

    {

        e.preventDefault();
        missPrenom.textContent = 'Prénom manquant';
        missPrenom.style.color = 'red';
        console.log(missPrenom+prenom);
    }


   if(text_valid.test(prenom.value) == false)

    {

    e.preventDefault();
    missPrenom.textContent = 'Format incorrect';
    missPrenom.style.color = 'orange';console.log(text_valid+prenom)
}

else{}

}
/*
var formValide = document.getElementById('Bouton_envoi');
var nom = document.getElementById('nom');
var missNom = document.getElementById('missNom');
var text_valid = /[A-Za-z]/;

formValide.addEventListener('click', validation);


function validation(e)

{
    if (nom.validity.valueMissing){
       
        e.preventDefault();
        missNom.textContent = 'Nom manquant';
        missNom.style.color = 'red';
    }


  else if(text_valid.test(nom.value) == false)

{
    
    e.preventDefault();
    missNom.textContent = 'Format incorrect';
    missNom.style.color = 'orange';
}

else{}

}

var formValide = document.getElementById('Bouton_envoi');
var chiffre = document.getElementById('chiffre');
var missChiffre = document.getElementById('missChiffre');
var text_valid = /^[0-9]*$/;

formValide.addEventListener('click', validation);


function validation(e)

{
    if (chiffre.validity.valueMissing){
       
        e.preventDefault();
        missChiffre.textContent = 'Code postal manquant';
        missChiffre.style.color = 'red';
    }


  else if(text_valid.test(chiffre.value) == false)

{
    
    e.preventDefault();
    missChiffre.textContent = 'Format incorrect';
    missChiffre.style.color = 'orange';
}

else{}

}

var formValide = document.getElementById('Bouton_envoi');
var adresse = document.getElementById('Adresse');
var missAdresse = document.getElementById('missAdresse');
var text_valid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

formValide.addEventListener('click', validation);


function validation(e)

{
    if (adresse.validity.valueMissing){
       
        e.preventDefault();
        missAdresse.textContent = 'Adresse manquante';
        missAdresse.style.color = 'red';
    }


  else if(text_valid.test(adresse.value) == false)

{
    
    e.preventDefault();
    missAdresse.textContent = 'Format incorrect';
    missAdresse.style.color = 'orange';
}

else{}

}

var formValide = document.getElementById('Bouton_envoi');
var ville = document.getElementById('ville');
var missVille = document.getElementById('missVille');
var text_valid = /[A-Za-z]/;

formValide.addEventListener('click', validation);


function validation(e)

{
    if (ville.validity.valueMissing){
       
        e.preventDefault();
        missVille.textContent = 'Ville manquante';
        missVille.style.color = 'red';
    }


  else if(text_valid.test(ville.value) == false)

{
    
    e.preventDefault();
    missVille.textContent = 'Format incorrect';
    missVille.style.color = 'orange';
}

else{}

}

var formValide = document.getElementById('Bouton_envoi');
var email = document.getElementById('email');
var missEmail = document.getElementById('missEmail');
var text_valid = /^[a-z0-9.-]+@[a-z0-9.-]{2,}.[a-z]{2,4}$/;

formValide.addEventListener('click', validation);


function validation(e)

{
    if (email.validity.valueMissing){
       
        e.preventDefault();
        missEmail.textContent = 'Email manquant';
        missEmail.style.color = 'red';
    }


  else if(text_valid.test(email.value) == false)

{
    
    e.preventDefault();
    missEmail.textContent = 'Format incorrect';
    missEmail.style.color = 'orange';
}

else{}

}*/