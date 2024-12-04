let titulo = document.querySelector('title')
titulo.innerHTML = 'botoes'

let fraseInicial = document.querySelector('h1')
fraseInicial.innerHTML = 'é hora do desafio!'

function verificarConsole() {
    console.log('console verificado!')
}


function alertJS() {
    alert('eu amo JS!')
}

function perguntarCidade() {
    
  let cidade = prompt('me fale um nome de uma cidade no brasil ')

    alert(`estive em ${cidade} e lembrei de você :)`)
}

function somar() {
   let primeiroNum = prompt('me fale um numero')
   let segundoNum = prompt('me fale outro numero')
   primeiroNum = parseInt(primeiroNum);
   segundoNum = parseInt(segundoNum)
   let resultado = primeiroNum + segundoNum
   alert(`a soma desses numeros é ${resultado}`)
}