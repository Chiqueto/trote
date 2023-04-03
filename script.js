//Função para criar o objeto das equipes
function Equipe(nomeEquipe, pontKit=0, pontParc=0, pontFinal){
    pontFinal = pontKit +  pontParc;
    
    this.nome = nomeEquipe;
    this.pontini  = pontKit;
    this.pontparc = pontParc;
    this.pontFinal = pontFinal;
}

//cria as equipes
function criaobj(){
    let equipeAmarela = new Equipe('Amarela')
    let equipeLaranja = new Equipe('Laranja')
    let equipeRoxa = new Equipe('Roxa')
    let equipeVerde = new Equipe('Verde')
    let equipeVermelha = new Equipe('Vermelha')

    //armazenar as equipes no localstorage
    localStorage.setItem('equipeAmarela', JSON.stringify(equipeAmarela))
    localStorage.setItem('equipeLaranja', JSON.stringify(equipeLaranja))
    localStorage.setItem('equipeRoxa', JSON.stringify(equipeRoxa))
    localStorage.setItem('equipeVerde', JSON.stringify(equipeVerde))
    localStorage.setItem('equipeVermelha', JSON.stringify(equipeVermelha))

    document.querySelector('.nomeequipes').disabled = !document.querySelector('.nomeequipes').disabled
    document.querySelector('.textokits').disabled = !document.querySelector('.textokits').disabled
    document.querySelector('.btncalc').disabled = !document.querySelector('.btncalc').disabled
    document.getElementById('limpar').innerHTML = 'Equipes Criadas com sucesso!'

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

//calculadora dos pontos 
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


    //atribui o valor a equipe selecionada apenas
    if(equipenome == 'Amarela'){
        //Recupera as strings criados no onload
        let equipeAmarelaString = localStorage.getItem('equipeAmarela')
        //transforma em objeto dnv
        let equipeAmarela = JSON.parse(equipeAmarelaString)
        
        equipeAmarela.pontini = pontos

        //Transformar o objeto em String  e salvar no LocalStorage
        localStorage.setItem('equipeAmarela', JSON.stringify(equipeAmarela))
        console.log(equipeAmarela)

    }else if(equipenome == 'Laranja'){
        let equipeLaranjaString = localStorage.getItem('equipeLaranja')
        let equipeLaranja = JSON.parse(equipeLaranjaString)

        equipeLaranja.pontini = pontos
     
        localStorage.setItem('equipeLaranja', JSON.stringify(equipeLaranja))
        console.log(equipeLaranja)

    }else if(equipenome == 'Roxa'){
        let equipeRoxaString = localStorage.getItem('equipeRoxa')
        let equipeRoxa = JSON.parse(equipeRoxaString)

        equipeRoxa.pontini = pontos

        localStorage.setItem('equipeRoxa', JSON.stringify(equipeRoxa))     
        console.log(equipeRoxa)

    }else if(equipenome == 'Verde'){
        let equipeVerdeString = localStorage.getItem('equipeVerde')
        let equipeVerde = JSON.parse(equipeVerdeString)

        equipeVerde.pontini = pontos

        localStorage.setItem('equipeVerde', JSON.stringify(equipeVerde))
        console.log(equipeVerde)

    }else if(equipenome == 'Vermelha'){
        let equipeVermelhaString = localStorage.getItem('equipeVermelha')
        let equipeVermelha = JSON.parse(equipeVermelhaString)

        equipeVermelha.pontini = pontos

        localStorage.setItem('equipeVermelha', JSON.stringify(equipeVermelha))
        console.log(equipeVermelha)

    }else{
        alert("Selecione uma equipe")
    }

    res.innerHTML = `A pontuação da Equipe ${equipenome} é: ${pontos}`
}

function verificaChecagem(texto){
    //verfica se está checado ou não, se estiver habilita para inserir um valor
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

    //atribui o valor digitado na variavel
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
       
        //atribui o valor dos pontos parciais a equipe
        equipeAmarela.pontparc = pontoParcial

        //armazena novamente
        localStorage.setItem('equipeAmarela', JSON.stringify(equipeAmarela))

    }else if(equipenome == 'Laranja'){       
        let equipeLaranjaString = localStorage.getItem('equipeLaranja')       
        let equipeLaranja = JSON.parse(equipeLaranjaString)
        
        equipeLaranja.pontparc = pontoParcial
      
        localStorage.setItem('equipeLaranja', JSON.stringify(equipeLaranja))

    }else if(equipenome == 'Roxa'){      
        let equipeRoxaString = localStorage.getItem('equipeRoxa')       
        let equipeRoxa = JSON.parse(equipeRoxaString)

        equipeRoxa.pontparc = pontoParcial
       
        localStorage.setItem('equipeRoxa', JSON.stringify(equipeRoxa))

    }else if(equipenome == 'Verde'){      
        let equipeVerdeString = localStorage.getItem('equipeVerde')  
        let equipeVerde = JSON.parse(equipeVerdeString)
 
        equipeVerde.pontparc = pontoParcial

        localStorage.setItem('equipeVerdeObj', JSON.stringify(equipeVerde))

    }else if(equipenome == 'Vermelha'){
        let equipeVermelhaString = localStorage.getItem('equipeVermelha')        
        let equipeVermelha = JSON.parse(equipeVermelhaString)

        equipeVermelha.pontparc = pontoParcial

        localStorage.setItem('equipeVermelha', JSON.stringify(equipeVermelha))

    }else{
        alert('Selecione uma equipe')
    }

    document.getElementById('total').innerHTML += `<br>A pontuação adicional da Equipe ${equipenome} é: ${pontoParcial}`
}

function mostrar(){
    //recuperando os dados das equipes
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

    //definindo a pontuação final
    equipeAmarela.pontFinal = equipeAmarela.pontini + equipeAmarela.pontparc
    equipeLaranja.pontFinal = equipeLaranja.pontini + equipeLaranja.pontparc
    equipeRoxa.pontFinal = equipeRoxa.pontini + equipeRoxa.pontparc
    equipeVerde.pontFinal = equipeVerde.pontini + equipeVerde.pontparc
    equipeVermelha.pontFinal = equipeVermelha.pontini + equipeVermelha.pontparc

        //apresentando os resultados na tela
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