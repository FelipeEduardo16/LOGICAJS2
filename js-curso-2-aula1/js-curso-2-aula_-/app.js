let listaDeNumerosSorteados = []
let numeroLimite = 10;
// let titulo = document.querySelector('h1'); //
//titulo.innerHTML = 'jogo numero secreto!';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'escolha um numero entre 1 e 10';

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

exibirTextoNaTela('h1','jogo do numero secreto');
exibirTextoNaTela('p','escolha um numero entre 1 e 10');

let numeroSecreto = GerarAleatorio();
let tentativas = 1;



function verificarChute() {
   
    let input = document.querySelector('.container__input');
    numeroChutado = parseInt(input.value)
    

    if(numeroChutado > numeroSecreto){
   exibirTextoNaTela('h1','chute um numero menor!')
}

 else if(numeroChutado == numeroSecreto){
    let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
    let mensagemTentativas = `voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`
    exibirTextoNaTela('p',mensagemTentativas)
   exibirTextoNaTela('h1', 'parabens!')
   document.getElementById('reiniciar').removeAttribute('disabled');
   document.getElementById('botaoChute').setAttribute('disabled', true)
}

else {exibirTextoNaTela('h1','chute um numero maior!')}
    tentativas++;
    limparCampo();
}

function GerarAleatorio() {
      
 let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
 let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length

 if(quantidadeDeElementosNaLista == numeroLimite)
 {listaDeNumerosSorteados = []}

 if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
    return GerarAleatorio(); }
    else {
        console.log(listaDeNumerosSorteados)
        listaDeNumerosSorteados.push(numeroEscolhido)
        return numeroEscolhido;
    }
}

function limparCampo() {
    numeroChutado = document.querySelector('input');
    numeroChutado.value = ''; 
}


function novoJogo() {
    numeroSecreto = GerarAleatorio();
    tentativas = 1;
    exibirTextoNaTela('h1', 'tente de novo!')
    exibirTextoNaTela('p', 'escolha um numero entre 1 e 10')
    document.getElementById("reiniciar").setAttribute('disabled',true);
    document.getElementById('botaoChute').removeAttribute('disabled');
}