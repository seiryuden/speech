var counter = 0;
store = {
    0 : 'start-map.png',
    1 : 'piñera.jpg',
    2 : 'bills.jpg',
    3 : 'territorio.gif',
    4 : 'historia.jpg',
    5 : 'santiago.jpg',
    6: 'copper.jpg',
    7: 'mina.jpg',
    8: 'vino.jpg',
    9: 'viña.jpg',
    10: 'torres.jpg',
    11: 'campos.jpg',
    12: 'lago.jpg',
    13: 'pascua.jpg',
    14: 'atacama.jpg',
    15: 'empanadas.jpg',
    16: 'asado.jpg',
    17: 'asado2.jpg',
    18: 'owari'
}


function next(){
    $(".img-next").click(function(event){
        counter++;
        document.body.style.backgroundImage = `url(${store[counter]})`;
    })
}

function back(){
    $(".img-back").click(function(event){
        counter--;
        document.body.style.backgroundImage = `url(${store[counter]})`;
})
}

function handler(){
    next();
    back();
}

$(handler);