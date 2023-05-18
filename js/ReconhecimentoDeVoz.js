window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'pt-br'
recognition.start()

const num = document.querySelector(".box")

recognition.addEventListener('result', onSpeack)
function onSpeack(e){
    const chute  = e.results[0][0].transcript
    
    var valido = validaChute(chute)

    num.innerText = chute
    
}
recognition.addEventListener('end', () => recognition.start())


document.body.addEventListener("click", e => {
    if(e.target.id == "btnJogarNovamente"){
        window.location.reload()
    }
})