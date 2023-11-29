"use strict"

let cartas = document.querySelectorAll('.cartas')

//  Embaralhando as cartas
for(let i=0;i < cartas.length;i++){
    cartas[i].style.order = Math.floor(Math.random() * 11)
}

