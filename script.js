
//Função para criar o objeto das equipes
function Equipe(nomeEquipe, pontKit, pontParc, pontFinal){
    pontFinal = pontKit +  pontParc;
    
    this.nome = nomeEquipe;
    this.pontini  = pontKit;
    this.pontparc = pontParc;
    this.pontFinal = pontFinal;
}


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
    let pontoParcial = 0

    let equipenome = document.getElementById('equipes').value
   
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

    //CRIANDO OS OBJETOS DAS EQUIPES

    if(equipenome == 'Amarela'){

        let equipeAmarela = new Equipe(equipenome, pontos, pontoParcial)
        equipeAmarela.pontparc = pontoParcial

        //Transformar o objeto em String  e salvar no LocalStorage
        localStorage.setItem('equipeAmarela', JSON.stringify(equipeAmarela))

        console.log(equipeAmarela)
    }else if(equipenome == 'Laranja'){
        let equipeLaranja = new Equipe(equipenome, pontos, pontoParcial)
        equipeLaranja.pontparc = pontoParcial
        
        //Transformar o objeto em String  e salvar no LocalStorage
        localStorage.setItem('equipeLaranja', JSON.stringify(equipeLaranja))

        console.log(equipeLaranja)
    }else if(equipenome == 'Roxa'){
        let equipeRoxa = new Equipe(equipenome, pontos, pontoParcial)

        //Transformar o objeto em String  e salvar no LocalStorage
        localStorage.setItem('equipeRoxa', JSON.stringify(equipeRoxa))
        equipeRoxa.pontparc = pontoParcial
        
        console.log(equipeRoxa)
    }else if(equipenome == 'Verde'){
        let equipeVerde = new Equipe(equipenome, pontos, pontoParcial)
        equipeVerde.pontparc = pontoParcial

        //Transformar o objeto em String  e salvar no LocalStorage
        localStorage.setItem('equipeVerde', JSON.stringify(equipeVerde))

        console.log(equipeVerde)
    }else if(equipenome == 'Vermelha'){
        let equipeVermelha = new Equipe(equipenome, pontos, pontoParcial)
        equipeVermelha.pontparc = pontoParcial

        //Transformar o objeto em String  e salvar no LocalStorage
        localStorage.setItem('equipeVermelha', JSON.stringify(equipeVermelha))

        console.log(equipeVermelha)
    }else{
        alert("Selecione uma equipe")
    }

    res.innerHTML = `A pontuação da Equipe ${equipenome} é: ${pontos}`
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
    let equipenome = document.getElementById('equipes').value
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

    //RECUPERANDO OS OBJETOS NA PÁGINA DE ADICIONAL

    if(equipenome == 'Amarela'){
        //Receber as Strings das equipes
        let equipeAmarelaString = localStorage.getItem('equipeAmarela')
        //Transformar em objeto dnv
        let equipeAmarela = JSON.parse(equipeAmarelaString)
        equipeAmarela.pontparc = pontoParcial

        document.getElementById('total').innerHTML = ` <br> Equipe Amarela ${equipeAmarela.pontFinal}`

        localStorage.setItem('equipeAmarela', JSON.stringify(equipeAmarela))

    }else if(equipenome == 'Laranja'){
        //Receber as Strings das equipes
        let equipeLaranjaString = localStorage.getItem('equipeLaranja')
        //Transformar em objeto dnv
        let equipeLaranja = JSON.parse(equipeLaranjaString)
        equipeLaranja.pontparc = pontoParcial

        document.getElementById('total').innerHTML = ` <br> Equipe Laranja ${equipeLaranja.pontFinal}`

        localStorage.setItem('equipeLaranja', JSON.stringify(equipeLaranja))

    }else if(equipenome == 'Roxa'){
        //Receber as Strings das equipes
        let equipeRoxaString = localStorage.getItem('equipeRoxa')
        //Transformar em objeto dnv
        let equipeRoxa = JSON.parse(equipeRoxaString)
        equipeRoxa.pontparc = pontoParcial

        document.getElementById('total').innerHTML = ` <br> Equipe Roxa ${equipeRoxa.pontFinal}`

        localStorage.setItem('equipeRoxa', JSON.stringify(equipeRoxa))

    }else if(equipenome == 'Verde'){
        //Receber as Strings das equipes
        let equipeVerdeString = localStorage.getItem('equipeVerde')
        //Transformar em objeto dnv
        let equipeVerde = JSON.parse(equipeVerdeString)
        equipeVerde.pontparc = pontoParcial

        document.getElementById('total').innerHTML = ` <br> Equipe Verde ${equipeVerde.pontFinal}`

        localStorage.setItem('equipeVerdeObj', JSON.stringify(equipeVerde))

    }else if(equipenome == 'Vermelha'){
        //Receber as Strings das equipes
        let equipeVermelhaString = localStorage.getItem('equipeVermelha')
        //Transformar em objeto dnv
        let equipeVermelha = JSON.parse(equipeVermelhaString)
        equipeVermelha.pontparc = pontoParcial

        document.getElementById('total').innerHTML = ` <br> Equipe Vermelha ${equipeVermelha.pontFinal}`

        localStorage.setItem('equipeVermelha', JSON.stringify(equipeVermelha))

    }else{
        alert('Selecione uma equipe')
    }

    document.getElementById('total').innerHTML += `<br>A pontuação adicional da Equipe ${equipenome} é: ${pontoParcial}`

}


function mostrar(){
    let equipeAmarelaString = localStorage.getItem('equipeAmarela')
    let equipeAmarela = JSON.parse(equipeAmarelaString)
    let equipeLaranjaString = localStorage.getItem('equipeLaranja')
    let equipeLaranja = JSON.parse(equipeLaranjaString)
    let equipeRoxaString = localStorage.getItem('equipeRoxa')
    let equipeRoxa = JSON.parse(equipeRoxaString)
    let equipeVerdeString = localStorage.getItem('equipeVerde')
    let equipeVerde = JSON.parse(equipeVerdeString)
    let equipeVermelhaString = localStorage.getItem('equipeVermelha')
    let equipeVermelha = JSON.parse(equipeVermelhaString)

    
        document.getElementById('NomeAmarela').innerHTML = `${equipeAmarela.nome}` 
        document.getElementById('NomeLaranja').innerHTML = `${equipeLaranja.nome}` 
        document.getElementById('NomeRoxa').innerHTML = `${equipeRoxa.nome}` 
        document.getElementById('NomeVerde').innerHTML = `${equipeVerde.nome}` 
        document.getElementById('NomeVermelha').innerHTML = `${equipeVermelha.nome}` 
    
        document.getElementById('PontIniAmarela').innerHTML = `${equipeAmarela.pontini}` 
        document.getElementById('PontIniLaranja').innerHTML = `${equipeLaranja.pontini}` 
        document.getElementById('PontIniRoxa').innerHTML = `${equipeRoxa.pontini}` 
        document.getElementById('PontIniVerde').innerHTML = `${equipeVerde.pontini}` 
        document.getElementById('PontIniVermelha').innerHTML = `${equipeVermelha.pontini}` 
        
        document.getElementById('PontParcAmarela').innerHTML = `${equipeAmarela.pontparc}` 
        document.getElementById('PontParcLaranja').innerHTML = `${equipeLaranja.pontparc}` 
        document.getElementById('PontParcRoxa').innerHTML = `${equipeRoxa.pontparc}` 
        document.getElementById('PontParcVerde').innerHTML = `${equipeVerde.pontparc}` 
        document.getElementById('PontParcVermelha').innerHTML = `${equipeVermelha.pontparc}` 
    
        document.getElementById('PontFinalAmarela').innerHTML = `${equipeAmarela.pontFinal}` 
        document.getElementById('PontFinalLaranja').innerHTML = `${equipeLaranja.pontFinal}` 
        document.getElementById('PontFinalRoxa').innerHTML = `${equipeRoxa.pontFinal}` 
        document.getElementById('PontFinalVerde').innerHTML = `${equipeVerde.pontFinal}` 
        document.getElementById('PontFinalVermelha').innerHTML = `${equipeVermelha.pontFinal}` 
    
}