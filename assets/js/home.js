let maxclick = 100;
const button_start = document.getElementById('button_start');
const button_next = document.getElementById('button_next');

function CountClicks(){
    if(maxclick > 0) 
        maxclick--,
        helpMe();
    else 
        showImage();
}

function helpMe(){
    try {
        const instructions = 'Crea un elemento <img> con esta direccion relativa ../img/haciaejercicio1.png';
        console.log(instructions);
    } catch (error) {
        console.log('help!!! home.js');
    }
}
button_start.addEventListener('click', () => {
    const showImage = () =>{
      const image_container = document.getElementById('container-img');
      image_container.style.display = "block";
    }
    showImage();
   });
   

button_next.addEventListener('click', () => {
    window.location.href = 'ejercicio1.html';
  });