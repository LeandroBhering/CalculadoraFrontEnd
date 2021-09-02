/*
function inserirOpr(operador) {
    var opr = document.getElementById('display').innerHTML
              document.getElementById('display').innerHTML += operador
}

function inserirNum (numero) {
    var num = document.getElementById('display').innerHTML 
              document.getElementById('display').innerHTML = num + numero
}

function limpar() {
    document.getElementById('display').innerHTML = ''
}

function apagar() {
    var conteudoDisplay = document.getElementById('display').innerHTML
        document.getElementById('display').innerHTML = conteudoDisplay.substring(0, conteudoDisplay.length -1)
}

function calcular() {
    var resultado = document.getElementById('display').innerHTML
        document.getElementById('display').innerHTML = eval(resultado)    
} 
*/

var display = document.getElementById('display')

function inserirNum(num) {
    display.innerHTML += num
}

function inserirOpr(opr) {

    display.innerHTML += opr

}

function limpar() {
    display.innerHTML = ''
}

function apagar() {
    
}

console.log(primeiroNum)
console.log(segundoNum)
