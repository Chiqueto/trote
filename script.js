
//Função para criar o objeto das equipes
function Equipe(nomeEquipe, pontKit, pontParc, pontFinal){
    //pontFinal = pontKit +  pontParc;
    
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
        let equipeAmarela = new Equipe(equipenome, pontos, 0 ,0)

        //Transformar o objeto em String  e salvar no LocalStorage
        localStorage.setItem('equipeAmarela', JSON.stringify(equipeAmarela))

        console.log(equipeAmarela)
    }else if(equipenome == 'Laranja'){
        let equipeLaranja = new Equipe(equipenome, pontos, 0 ,0)
        
        //Transformar o objeto em String  e salvar no LocalStorage
        localStorage.setItem('equipeLaranja', JSON.stringify(equipeLaranja))

        console.log(equipeLaranja)
    }else if(equipenome == 'Roxa'){
        let equipeRoxa = new Equipe(equipenome, pontos, 0 ,0)

        //Transformar o objeto em String  e salvar no LocalStorage
        localStorage.setItem('equipeRoxa', JSON.stringify(equipeRoxa))
        
        console.log(equipeRoxa)
    }else if(equipenome == 'Verde'){
        let equipeVerde = new Equipe(equipenome, pontos, 0 ,0)

        //Transformar o objeto em String  e salvar no LocalStorage
        localStorage.setItem('equipeVerde', JSON.stringify(equipeVerde))

        console.log(equipeVerde)
    }else if(equipenome == 'Vermelha'){
        let equipeVermelha = new Equipe(equipenome, pontos, 0 ,0)

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
        let equipeAmarelaObj = JSON.parse(equipeAmarelaString)
        equipeAmarelaObj.pontParc = pontoParcial
        equipeAmarelaObj.pontFinal = equipeAmarelaObj.pontini + equipeAmarelaObj.pontParc

        document.getElementById('total').innerHTML = ` <br> Equipe Amarela ${equipeAmarelaObj.pontFinal}`

        localStorage.setItem('equipeAmarelaObj', JSON.stringify(equipeAmarelaObj))

    }else if(equipenome == 'Laranja'){
        //Receber as Strings das equipes
        let equipeLaranjaString = localStorage.getItem('equipeLaranja')
        //Transformar em objeto dnv
        let equipeLaranjaObj = JSON.parse(equipeLaranjaString)
        equipeLaranjaObj.pontParc = pontoParcial
        equipeLaranjaObj.pontFinal = equipeLaranjaObj.pontini + equipeLaranjaObj.pontParc

        document.getElementById('total').innerHTML = ` <br> Equipe Laranja ${equipeLaranjaObj.pontFinal}`

        localStorage.setItem('equipeLaranjaObj', JSON.stringify(equipeLaranjaObj))

    }else if(equipenome == 'Roxa'){
        //Receber as Strings das equipes
        let equipeRoxaString = localStorage.getItem('equipeRoxa')
        //Transformar em objeto dnv
        let equipeRoxaObj = JSON.parse(equipeRoxaString)
        equipeRoxaObj.pontParc = pontoParcial
        equipeRoxaObj.pontFinal = equipeRoxaObj.pontini + equipeRoxaObj.pontParc

        document.getElementById('total').innerHTML = ` <br> Equipe Roxa ${equipeRoxaObj.pontFinal}`

        localStorage.setItem('equipeRoxaObj', JSON.stringify(equipeRoxaObj))

    }else if(equipenome == 'Verde'){
        //Receber as Strings das equipes
        let equipeVerdeString = localStorage.getItem('equipeVerde')
        //Transformar em objeto dnv
        let equipeVerdeObj = JSON.parse(equipeVerdeString)
        equipeVerdeObj.pontParc = pontoParcial
        equipeVerdeObj.pontFinal = equipeVerdeObj.pontini + equipeVerdeObj.pontParc

        document.getElementById('total').innerHTML = ` <br> Equipe Verde ${equipeVerdeObj.pontFinal}`

        localStorage.setItem('equipeVerdeObj', JSON.stringify(equipeVerdeObj))

    }else if(equipenome == 'Vermelha'){
        //Receber as Strings das equipes
        let equipeVermelhaString = localStorage.getItem('equipeVermelha')
        //Transformar em objeto dnv
        let equipeVermelhaObj = JSON.parse(equipeVermelhaString)
        equipeVermelhaObj.pontParc = pontoParcial
        equipeVermelhaObj.pontFinal = equipeVermelhaObj.pontini + equipeVermelhaObj.pontParc

        document.getElementById('total').innerHTML = ` <br> Equipe Vermelha ${equipeVermelhaObj.pontFinal}`

        localStorage.setItem('equipeVermelhaObj', JSON.stringify(equipeVermelhaObj))

    }else{
        alert('Selecione uma equipe')
    }

    document.getElementById('total').innerHTML += `<br>A pontuação adicional da Equipe ${equipenome} é: ${pontoParcial}`

}


function mostrar(){
    let equipeAmarelaObjString = localStorage.getItem('equipeAmarelaObj')
    let equipeAmarelaObj2 = JSON.parse(equipeAmarelaObjString)
    let equipeLaranjaObjString = localStorage.getItem('equipeLaranjaObj')
    let equipeLaranjaObj2 = JSON.parse(equipeLaranjaObjString)
    let equipeRoxaObjString = localStorage.getItem('equipeRoxaObj')
    let equipeRoxaObj2 = JSON.parse(equipeRoxaObjString)
    let equipeVerdeObjString = localStorage.getItem('equipeVerdeObj')
    let equipeVerdeObj2 = JSON.parse(equipeVerdeObjString)
    let equipeVermelhaObjString = localStorage.getItem('equipeVermelhaObj')
    let equipeVermelhaObj2 = JSON.parse(equipeVermelhaObjString)

    document.getElementById('NomeAmarela').innerHTML = `${equipeAmarelaObj2.nome}` 
    document.getElementById('NomeLaranja').innerHTML = `${equipeLaranjaObj2.nome}` 
    document.getElementById('NomeRoxa').innerHTML = `${equipeRoxaObj2.nome}` 
    document.getElementById('NomeVerde').innerHTML = `${equipeVerdeObj2.nome}` 
    document.getElementById('NomeVermelha').innerHTML = `${equipeVermelhaObj2.nome}` 

    document.getElementById('PontIniAmarela').innerHTML = `${equipeAmarelaObj2.pontini}` 
    document.getElementById('PontIniLaranja').innerHTML = `${equipeLaranjaObj2.pontini}` 
    document.getElementById('PontIniRoxa').innerHTML = `${equipeRoxaObj2.pontini}` 
    document.getElementById('PontIniVerde').innerHTML = `${equipeVerdeObj2.pontini}` 
    document.getElementById('PontIniVermelha').innerHTML = `${equipeVermelhaObj2.pontini}` 
    
    document.getElementById('PontParcLaranja').innerHTML = `${equipeLaranjaObj2.pontParc}` 
    document.getElementById('PontParcRoxa').innerHTML = `${equipeRoxaObj2.pontParc}` 
    document.getElementById('PontParcVerde').innerHTML = `${equipeVerdeObj2.pontParc}` 
    document.getElementById('PontParcAmarela').innerHTML = `${equipeAmarelaObj2.pontParc}` 
    document.getElementById('PontParcVermelha').innerHTML = `${equipeVermelhaObj2.pontParc}` 

    document.getElementById('PontFinalAmarela').innerHTML = `${equipeAmarelaObj2.pontFinal}` 
    document.getElementById('PontFinalLaranja').innerHTML = `${equipeLaranjaObj2.pontFinal}` 
    document.getElementById('PontFinalRoxa').innerHTML = `${equipeRoxaObj2.pontFinal}` 
    document.getElementById('PontFinalVerde').innerHTML = `${equipeVerdeObj2.pontFinal}` 
    document.getElementById('PontFinalVermelha').innerHTML = `${equipeVermelhaObj2.pontFinal}` 
}