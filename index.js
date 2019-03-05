var counter = 0;
store = {
    0 : 'start-map.png',
    1 : 'piñera.jpg',
    2 : 'bills.jpg',
    3 : 'territorio.gif',
    4 : 'historia.jpg',
    5 : 'santiago.jpg',
    6: 'copper.jpg',
    7: 'vino.jpg',
    8: 'torres.jpg',
    9: 'campos.jpg',
    10: 'lago.jpg',
    11: 'pascua.jpg',
    12: 'atacama.jpg',
    13: 'empanadas.jpg',
    14: 'asado.jpg',
    15: 'asado2.jpg'
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