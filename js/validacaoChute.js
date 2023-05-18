function validaChute(chute){
    const numero = +chute
    var valido = true

    if(valorIsNumeric(numero)){
        document.querySelector("#resultado").innerHTML = "Resultado inválido. Valor não numérico"
        valido = false
    }else if(chuteNaoEstaNoLimite(numero)){
        document.querySelector("#resultado").innerHTML = "Resultado inválido. Valor fora dos limites"
        valido = false
    }else if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h1> Você Acertou! </h1>,
            <h2> O numero sorteado era ${numero} </h2>
            <button id="btnJogarNovamente">Jogar novamente</button>
        `
    }else{
        if(numero > numeroSecreto){
            document.querySelector("#resultado").innerHTML = "O número falado é menor <i class='fa-solid fa-arrow-down'></i>"
        }else{
            document.querySelector("#resultado").innerHTML = "O número falado é maior <i class='fa-solid fa-arrow-up'></i>"
        }
    }
    
    return valido
}

function valorIsNumeric(chute){
    return Number.isNaN(chute)
}

function chuteNaoEstaNoLimite(chute){
    return chute > maiorValor || chute < menorValor ? true : false;
}