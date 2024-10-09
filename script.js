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


// Redireciona para a página inicial após 10 segundos
/*setTimeout(function(){
    window.location.href = 'index.html';
}, 10000);
*/
// Carrega o script de serviço do Salesforce
    var initESW = function(gslbBaseURL) {
        embedded_svc.settings.displayHelpButton = true; // Mostrar o botão de ajuda
        embedded_svc.settings.language = 'pt-BR'; // Define o idioma para português do Brasil

        // Personalizações de Aparência e Comportamento
        embedded_svc.settings.defaultMinimizedText = 'Precisa de ajuda?'; // Texto quando o chat está minimizado
        embedded_svc.settings.disabledMinimizedText = 'Estamos Offline'; // Texto quando offline
        embedded_svc.settings.loadingText = 'Conectando ao agente...'; // Texto de carregamento

        embedded_svc.settings.enabledFeatures = ['LiveAgent'];
        embedded_svc.settings.entryFeature = 'LiveAgent';

        embedded_svc.init(
            'https://mindful-goat-fliaa4-dev-ed.trailblaze.my.salesforce.com',  // URL da sua organização Salesforce
            'https://mindful-goat-fliaa4-dev-ed.trailblaze.my.salesforce-sites.com/liveAgentSetupFlow', // URL do Live Agent
            gslbBaseURL,
            '00Daj00000DlRtJ',  // ID da sua organização
            'Agente_de_Chat',  // Nome da implantação do Live Agent
            {
                baseLiveAgentContentURL: 'https://c.la11-core1.sfdc-8tgtt5.salesforceliveagent.com/content', // URL do conteúdo do Live Agent
                deploymentId: '572aj000008ZtBV', // ID de implantação
                buttonId: '573aj000002LM1B',  // ID do botão de chat
                baseLiveAgentURL: 'https://d.la11-core1.sfdc-8tgtt5.salesforceliveagent.com/chat',  // URL do Live Agent
                eswLiveAgentDevName: 'Agente_de_Chat',  // Nome do Live Agent
                isOfflineSupportEnabled: true // Suporte offline habilitado
            }
        );
    };

    if (!window.embedded_svc) {
        var s = document.createElement('script');
        s.setAttribute('src', 'https://mindful-goat-fliaa4-dev-ed.trailblaze.my.salesforce.com/embeddedservice/5.0/esw.min.js');
        s.onload = function() {
            initESW(null);
        };
        document.body.appendChild(s);
    } else {
        initESW('https://service.force.com');
    }
