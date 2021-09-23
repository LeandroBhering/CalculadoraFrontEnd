'use strict'

// Armazenando os elemento HTML em variaveis.
const display = document.getElementById('display')
const numeros = document.querySelectorAll('[id*=tecla]')
const operadores = document.querySelectorAll('[id*=operador]')

var novoNumero = true
var operador 
var numeroAnterior 

// Inserindo um evento (onclick="inserirNumero") nos elementos HTML
numeros.forEach(numero => numero.addEventListener('click', inserirNumero))
operadores.forEach(operador => operador.addEventListener('click',selecionarOperador))

//
const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent)

//
const atualizarDisplay = (texto) => {
    if (novoNumero){
        display.textContent = texto
        novoNumero = false
    }else{
        display.textContent += texto
    }
}

//
const selecionarOperador = (evento) => {
    if (!novoNumero){
        novoNumero = true
        operador = evento.target.textContent
        numeroAnterior = display.textContent
        console.log(numeroAnterior, operador)
    }
}


