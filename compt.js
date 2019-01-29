
console.log('document'); 

function getConfirmation() { //créer une fonction de confirmation
    var retVal = confirm("Avez-vous plus de 18 ans ?");
    if( retVal === true ) {
        // var message = document.createElement('p');
        // message.setAttribute('class', 'message');
        // message.innerHTML = '';
        // document.body.appendChild(message);
        document.getElementById("cadena").style.display = "block"; // pour afficher le body
        return true;

    } else {
        var message = document.createElement('p');
        message.setAttribute('class', 'message');
        message.innerHTML = "Cette partie est réservé au plus de 18 ans !";
        document.body.appendChild(message);
        return false;
    }
}
getConfirmation();

var b_pseudo=false; var b_date=false; var b_email=false;

function envoyer(){
    console.log('Salut')
    if(b_pseudo==true && b_date==true && b_email==true){
        // document.getElementById('message').innerText = 'Envoi serveur';
        document.getElementById('inscription').submit();

    } else {
        alertconsole.log('message');
        document.getElementById('message').innerText = "Le formulaire n'est pas complet";
        
        }
}