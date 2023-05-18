const maiorValor = 1000
const menorValor = 1

var numeroSecreto = gerarValor()
console.log(numeroSecreto)

function gerarValor(){
    return parseInt(Math.random() * maiorValor + menorValor)
}

const elementoMaiorValor = document.querySelector("#maior-valor")
elementoMaiorValor.innerHTML = maiorValor

const elementoMenorValor = document.querySelector("#menor-valor")
elementoMenorValor.innerHTML = menorValor
