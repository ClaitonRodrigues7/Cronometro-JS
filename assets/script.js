function main(){
function criaHoraSegundos(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

const cronometro = document.querySelector('.crono');
const relogio = document.querySelector('.relogio');

//BOTÕES
const inicia = document.querySelector('.btn-inicia');
const pausa = document.querySelector('.btn-pausa');
const zera = document.querySelector('.btn-zera');

console.log(inicia);


inicia.addEventListener('click', function(event){
    relogio.classList.remove('pausado');
    clearInterval(time);
    iniciaRelogio();
});

pausa.addEventListener('click', function(event){
    relogio.classList.add('pausado');
    clearInterval(time);
});

zera.addEventListener('click', function(event){
    relogio.classList.remove('pausado');
    clearInterval(time);
    segundos = 0;
    relogio.innerHTML = '00:00:00'
});

let segundos = 0;
let time;

function iniciaRelogio (){
    time = setInterval(function(){
        segundos++;
        relogio.innerHTML = criaHoraSegundos(segundos);
    }, 1000)
}
}
main();