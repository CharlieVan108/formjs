const form = document.getElementById('formulaire');
const prenom = document.getElementById('prenom');
const nom = document.getElementById('nom');
const email = document.getElementById('email');
const message = document.getElementById('message');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const prenomValue = prenom.value.trim();

if(prenomValue === "") {
        console.log("erreur")
    }else{
        console.log("succes")
    }

    if(prenomValue.length < 2 || prenomValue.length > 10) {
        console.log("erreur")
    }else{
        console.log("succes")
    }

  

    const nomValue = nom.value.trim();

    if(nomValue === "") {
        console.log("erreur")
    }else{
        console.log("succes")
    }

    if(nomValue.length < 2 || nomValue.length > 10) {
        console.log("erreur")
    }else{
        console.log("succes")
    }


    const emailValue = email.value.trim();

    if(emailValue === "") {
        console.log("erreur")
    }else{
        console.log("succes")
    }

    if(emailValue.length < 2 || emailValue.length > 30) {
        console.log("erreur")
    }else{
        console.log("succes")
    }



    const messageValue = message.value.trim();

    if(messageValue === "") {
        console.log("erreur")
    }else{
        console.log("succes")
    }

    if(messageValue.length < 2 || messageValue.length > 400) {
        console.log("erreur")
    }else{
        console.log("succes")
    }

    console.log("Formulaire envoyé")

})




