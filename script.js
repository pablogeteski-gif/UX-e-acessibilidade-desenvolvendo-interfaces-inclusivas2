
let lendo = false;
let tamanhoTexto = 16;

// Aumentar o texto
function aumentarTexto() {
    tamanhoTexto += 2;

    document.querySelector("main").style.fontSize =
        tamanhoTexto + "px";
}

// Diminuir o texto
function diminuirTexto() {
    if (tamanhoTexto > 10) {
        tamanhoTexto -= 2;
    }

    document.querySelector("main").style.fontSize =
        tamanhoTexto + "px";
}

// Finalizar leitura
function finalizarLeitura() {
    lendo = false;
}

// Ler página em voz alta
function lerEmVozAlta() {

    if (lendo === true) {

        // Se estiver pausado, continua
        if (speechSynthesis.paused === true) {

            speechSynthesis.resume();

        } else {

            // Se estiver lendo, pausa
            speechSynthesis.pause();

        }

        return;
    }

    let conteudo = document.querySelector("main");

    let texto = conteudo.innerText;

    let fala = new SpeechSynthesisUtterance(texto);

    fala.lang = "pt-BR";

    fala.onend = finalizarLeitura;

    fala.onerror = finalizarLeitura;

    // Cancela qualquer leitura anterior
    speechSynthesis.cancel();

    // Inicia a leitura
    speechSynthesis.speak(fala);

    lendo = true;
}
