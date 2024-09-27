// 1ere étape : on va d'abord importer les donnée du html au css, que l'on veut manipuler , 
const form = document.querySelector('form'); // Sélectionne ton formulaire
const successMessage = document.getElementById('success-message'); // Sélectionne le message de réussite

//2 eme étape: on va mettre en place l'evenemnt qui va s'effectuer lorsque je clique sur submit (les informarions biensur doivent être correctement complété)

form.addEventListener('submit' , function(event){
    event.preventDefault();
    successMessage.style.display = 'block';
    

})


// deuxième consigne , on va écrire une fonction de validation :)




