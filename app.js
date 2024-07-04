let numeroSecreto = gerarNumeroAleatorio();

let tentativas = 1;

console.log(numeroSecreto);
//função para alterar a TAG e o Texto inicial
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female',{rate:1.2});
}
// Função para mostrar o texto inicial
function exibirMensagemInical() {
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');//'Nome da tag', 'texto que vai aparecer'
    exibirTextoNaTela('p', `Digite um número de 1 a 100`);
}

exibirMensagemInical();//Chama o Texto inical
// Função para verificar o chute
function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou.'); //Alterar a palavra tentativa.
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `'Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!'`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled'); //Desabilita o botâo Reinicar
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor.');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior.');
        }

        tentativas++

        limparCampo(); // Chamar a função limpa o campo do numero
    }
}
//Função para gerar o número aleatório
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 100 + 1);
}
// Função para limpa o campo do numero
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
//Função para reinicar o jogo
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInical();
    console.log(numeroSecreto);
    document.getElementById('reiniciar').setAttribute('disabled', true);
}