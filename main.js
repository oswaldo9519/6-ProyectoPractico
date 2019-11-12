function clickear() {
    
    alert('Bienvenido!');
    var nombre = prompt('Cual es tu Nombre?');

    if (nombre === 'oswaldo'){
       alert(`Bienvenido ${nombre}!`)

    } else {

        var body = document.querySelector('body');
        body.style.backgroundColor = 'black';
        body.style.color = 'black';
        body.innerText = 'ERROR';
        body.style.color = "red";
        body.style.textAlign = "center";
        body.style.fontSize = '15em';

    }

}


