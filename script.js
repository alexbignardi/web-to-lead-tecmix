// Define o tempo inicial (em segundos)
let countdown = 10;

// Função que atualiza o contador a cada segundo
function startCountdown() {
    const countdownElement = document.getElementById('countdown');
    
    const interval = setInterval(function(){
        countdown--;  // Diminui o contador
        countdownElement.textContent = countdown;  // Atualiza o valor exibido

        // Quando o contador chega a 0, redireciona para a página inicial
        if (countdown === 0) {
            clearInterval(interval);
            window.location.href = 'index.html';
        }
    }, 1000);  // Atualiza a cada segundo (1000ms)
}

// Inicia o contador assim que a página é carregada
window.onload = startCountdown;
