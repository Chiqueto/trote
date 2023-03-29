/*
let equipeLaranja = {nome:'laranja', pontos:calcpont(), pontosparciais:calcularAdicional(), pontuacaofinal}
let equipeRoxa = {nome:'roxa', pontos:calcpont(), pontosparciais:calcularAdicional(), pontuacaofinal}
let equipeVerde = {nome:'verde', pontos:calcpont(), pontosparciais:calcularAdicional(), pontuacaofinal}
let equipeVermelha = {nome:'vermelha', pontos:calcpont(), pontosparciais:calcularAdicional(), pontuacaofinal}
*/


function trocaSwitch(){
    //alert('vamos trocar o switch!')

    let html = document.documentElement

    if(html.classList.contains('light')){
        html.classList.remove('light')
    } else{
        html.classList.add('light')
    }
}

function calcpont(){
    let kits = Number(document.getElementById('kits').value)
    let pontos 
    let res = document.getElementById('res')

    let equipe = document.getElementById('equipes').value
   //alert(equipe)
    /*if(equipe == 'Amarela'){
        let equipeAmarela = new Object()
        equipeAmarela.nome = "Amarela"
        equipeAmarela.pontos = "pontos"
        equipeAmarela.pontoParcial = "pontoParcial"
        equipeAmarela.pontuacaoFinal = "pontuacaoFinal"

        alert(equipeAmarela)
    }*/

    if(kits == '' || kits < 0){
        alert('Por favor, digite um valor! Impossível calcular!')
        pontos = 'valor inválido!!!'
    }else if(kits >= 80){
        pontos = 5000
    }else if(kits < 80 && kits >= 64){
        pontos = 4000
    }else if(kits < 64 && kits >= 40){
        pontos = 2500
    }else if(kits < 40 && kits >= 16){
        pontos = 1000
    }else if(kits < 16 && kits >= 0){
        pontos = 0
    }

    res.innerHTML = `A pontuação da equipe é: ${pontos}`
}

function verificaChecagem(texto){
    if(texto == 'padrao'){
        document.getElementById('qtdePadrao').disabled = !document.getElementById('qtdePadrao').disabled 
    }
    if(texto == 'kit'){
        document.getElementById('qtdeKit').disabled = !document.getElementById('qtdeKit').disabled 
    }
    if(texto == 'suplemento'){
        document.getElementById('qtdeSuplemento').disabled = !document.getElementById('qtdeSuplemento').disabled 
    }
    if(texto == 'arroz'){
        document.getElementById('qtdeArroz').disabled = !document.getElementById('qtdeArroz').disabled 
    }
    if(texto == 'feijao'){
        document.getElementById('qtdeFeijao').disabled = !document.getElementById('qtdeFeijao').disabled 
    }
    if(texto == 'macarrao'){
        document.getElementById('qtdeMacarrao').disabled = !document.getElementById('qtdeMacarrao').disabled 
    }
    if(texto == 'oleo'){
        document.getElementById('qtdeOleo').disabled = !document.getElementById('qtdeOleo').disabled 
    }
}

function calcularAdicional(){
    let pontoParcial = 0
    if(document.getElementById('padrao').checked){
        pontoParcial = pontoParcial + document.getElementById('qtdePadrao').value * 50
    }
    if(document.getElementById('kit').checked){
        pontoParcial = pontoParcial + document.getElementById('qtdeKit').value * 25
    }
    if(document.getElementById('suplemento').checked){
        pontoParcial = pontoParcial + document.getElementById('qtdeSuplemento').value * 10
    }
    if(document.getElementById('arroz').checked){
        pontoParcial = pontoParcial + document.getElementById('qtdeArroz').value * 5
    }
    if(document.getElementById('feijao').checked){
        pontoParcial = pontoParcial + document.getElementById('qtdeFeijao').value * 2
    }
    if(document.getElementById('macarrao').checked){
        pontoParcial = pontoParcial + document.getElementById('qtdeMacarrao').value * 0.5
    }
    if(document.getElementById('oleo').checked){
        pontoParcial = pontoParcial + document.getElementById('qtdeOleo').value * 1
    }
    document.getElementById('total').innerHTML = `A pontuação adicional é: ${pontoParcial}`

}