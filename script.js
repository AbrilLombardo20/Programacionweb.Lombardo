ScrollReveal().reveal('.inicio');
ScrollReveal().reveal('.modelodecaja', {delay:250});
ScrollReveal().reveal('.nuestrosvalores', {delay: 500}) ;
ScrollReveal().reveal('.nosotras', {delay:500});
ScrollReveal().reveal('.contacto', {delay:500});

let dias= 10
let horas=0
let minutos=0
let segundos=0
cargarsegundos();
//Se definen y ejecutan los segundos
function cargarsegundos(){
    let txtsegundos;
    if (segundos<0){
        segundos=59;
    }
    //MOstrar los segundos en pantalla
    if(segundos<10){
        txtsegundos=`0 ${segundos}`;
    }else{
        txtsegundos=segundos;
    }
    document.getElementById('segundos').innerHTML=txtsegundos;
    segundos --;
    cargarminutos(segundos);
    
}
//Cargar minutos
function cargarminutos(segundos){
    let txtminutos;
    if(segundos==-1 && minutos!=0){
        setTimeout(()=> {
            minutos --;
        }, 500)
    }
    else if (segundos==-1 && minutos==0){
        setTimeout(()=>{
        minutos=59; }, 500)
    }


//Mostrar minutos en pantalla
if (minutos<10){
        txtminutos=`0${minutos}`}
else {
    txtminutos=minutos
}
document.getElementById('minutos').innerHTML=txtminutos;
cargarhoras(segundos, minutos)
}

//Defino y ejecuto las horas
function cargarhoras(segundos, minutos){
    let txthoras;
    if (segundos==-1 && minutos==0 && horas!==0){
        setTimeout(()=>{
            horas--;
        }, 500)
    }
    else if(segundos== -1 && minutos==0 && horas==0){
        setTimeout(()=>{
            horas=24;
        },500)
    }
    //Mostrar horas en pantalla
    if (horas<10){
        txthoras=`0${horas}`;
    }
    else{
        txthoras=horas
    }
    document.getElementById('horas').innerHTML=txthoras;
}


//Ejecuto cada segundo:
setInterval(cargarsegundos, 1000)