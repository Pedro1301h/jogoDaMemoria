"use strict"

let cartas = document.querySelectorAll('.cartas')

//  Embaralhando as cartas
for(let i=0;i < cartas.length;i++){
    cartas[i].style.order = Math.floor(Math.random() * cartas.length)
}


















//Girando as cartas

for(let i = 0; i < cartas.length; i++){
    cartas[i].addEventListener('click',clicar)

    function clicar(){

        console.log(cartas[i].getAttribute('class'))

        if(cartas[i].getAttribute('class') == 'cartas comb1'){
            cartas[i].style.background='white'
            cartas[i].style.border='none'
            cartas[i].style.backgroundImage='url("imagens/css_scale.png")'
        }
        if(cartas[i].getAttribute('class') == 'cartas comb2'){
            cartas[i].style.background='white'
            cartas[i].style.border='none'
            cartas[i].style.backgroundImage='url("imagens/html_scale.png")'
        }
        if(cartas[i].getAttribute('class') == 'cartas comb3'){
            cartas[i].style.background='beige'
            cartas[i].style.border='none'
            cartas[i].style.backgroundImage='url("imagens/js_scale.png")'
        }
        if(cartas[i].getAttribute('class') == 'cartas comb4'){
            cartas[i].style.background='beige'
            cartas[i].style.border='none'
            cartas[i].style.backgroundImage='url("imagens/php_scale.png")'
        }
        if(cartas[i].getAttribute('class') == 'cartas comb5'){
            cartas[i].style.background='beige'
            cartas[i].style.border='none'
            cartas[i].style.backgroundImage='url("imagens/java_scale.png")'
        }
        if(cartas[i].getAttribute('class') == 'cartas comb6'){
            cartas[i].style.background='beige'
            cartas[i].style.border='none'
            cartas[i].style.backgroundImage='url("imagens/react_scale.png")'
        }
    }

}

