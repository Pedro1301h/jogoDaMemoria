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
        if(i == 0 || i == 1){
            cartas[i].style.background='beige'
            cartas[i].style.border='none'
            cartas[i].style.backgroundImage='url("imagens/css_scale.png")'
        }
        if(i == 2 || i == 3){
            cartas[i].style.border='none'
            cartas[i].style.background='beige'
            cartas[i].style.backgroundImage='url("imagens/html_scale.png")'
        }
        if(i == 4 || i == 5){
            cartas[i].style.border='none'
            cartas[i].style.background='beige'
            cartas[i].style.backgroundImage='url("imagens/js_scale.png")'
        }
        if(i == 6 || i == 7){
            cartas[i].style.border='none'
            cartas[i].style.background='beige'
            cartas[i].style.backgroundImage='url("imagens/php_scale.png")'
        }
        if(i == 8 || i == 9){
            cartas[i].style.border='none'
            cartas[i].style.background='beige'
            cartas[i].style.backgroundImage='url("imagens/java_scale.png")'
        }
        if(i == 10 || i == 11){
            cartas[i].style.border='none'
            cartas[i].style.background='beige'
            cartas[i].style.backgroundImage='url("imagens/react_scale.png")'
        }
    }

}

