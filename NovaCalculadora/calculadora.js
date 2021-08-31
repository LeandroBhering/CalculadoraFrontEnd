

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
    var conteudoDisplay = getElementById('display').innerHTML
        document.getElementById('display').innerHTML = conteudoDisplay.substring(0, conteudoDisplay.length -1)
}