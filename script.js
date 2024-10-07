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
    embedded_svc.settings.displayHelpButton = true; // Ou false
    embedded_svc.settings.language = ''; // Por exemplo, 'en' ou 'en-US'

    // Configurações de chat
    //embedded_svc.settings.defaultMinimizedText = '...'; // Texto padrão minimizado
    //embedded_svc.settings.disabledMinimizedText = '...'; // Texto de agente offline
    //embedded_svc.settings.loadingText = ''; // Texto de carregamento
    //embedded_svc.settings.storageDomain = 'yourdomain.com'; // Define o domínio de armazenamento

    embedded_svc.settings.enabledFeatures = ['LiveAgent'];
    embedded_svc.settings.entryFeature = 'LiveAgent';

    embedded_svc.init(
        'https://mindful-goat-fliaa4-dev-ed.trailblaze.my.salesforce.com', // URL da organização Salesforce
        'https://mindful-goat-fliaa4-dev-ed.trailblaze.my.salesforce-sites.com/liveAgentSetupFlow', // URL do setup do LiveAgent
        gslbBaseURL,
        '00Daj00000DlRtJ', // ID da organização
        'Agente_de_Chat', // Nome do LiveAgent
        {
            baseLiveAgentContentURL: 'https://c.la11-core1.sfdc-8tgtt5.salesforceliveagent.com/content',
            deploymentId: '572aj000008ZtBV', // ID do deployment
            buttonId: '573aj000002LM1B', // ID do botão do chat
            baseLiveAgentURL: 'https://d.la11-core1.sfdc-8tgtt5.salesforceliveagent.com/chat',
            eswLiveAgentDevName: 'Agente_de_Chat',
            isOfflineSupportEnabled: true
        }
    );
};

// Verifica se o script do Salesforce já está carregado, caso contrário, o carrega
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
