// Simule um atraso de carregamento (apenas para fins de demonstração) para aparecer o GIf
setTimeout(function() {
    // Gradualmente aumente a opacidade para mostrar a imagem (entrada)
    var loaderContainer = document.querySelector('.loader-container');
    loaderContainer.style.opacity = '1';
    
    // Você pode adicionar seu código JavaScript para o conteúdo principal aqui
}, 500); // Tempo de entrada (0,9 segundos)

// Após um tempo definido, oculte a imagem com uma transição suave na saída
setTimeout(function() {
    var loaderContainer = document.querySelector('.loader-container');
    loaderContainer.style.opacity = '0'; // Gradualmente diminui a opacidade (saída)
    
    // Aguarde um pouco antes de remover o elemento de carregamento
    setTimeout(function() {
        loaderContainer.style.display = 'none';
    }, 500); // Tempo de saída (0,5 segundos) após a imagem ficar invisível
}, 1200); // Tempo de exibição da imagem (2 segundos)

// Importa o arquivo de banco de dados do Json
document.write('<script src="script/database.js"></script>');

// Cria um conjunto para armazenar os desafios gerados e uma variável para o desafio atual
const desafiosGerados = new Set();
let desafioAtual = null;

// Obtém a referência para o botão "Revelar Resposta" e o oculta por padrão
const revelarRespostaButton = document.getElementById('revelar-btn');
revelarRespostaButton.style.display = 'none';

// Função para revelar a resposta ao desafio atual
function revelarResposta() {
    if (desafioAtual) {
        const respostaElement = document.getElementById('resposta');
        respostaElement.textContent = `Resposta: ${desafioAtual.resposta}`;
        respostaElement.style.display = 'block';
    }   
    if (desafioAtual.respostas && desafioAtual.respostas[0] && desafioAtual.respostas[0].imagemRESPOSTA) {
        const respostaElement = document.getElementById('resposta');
        respostaElement.textContent = `Resposta:`;
        respostaElement.innerHTML += `<br>`;
        respostaElement.style.display = 'block';
        const imagemRespostaElement = document.createElement('img');
        imagemRespostaElement.src = desafioAtual.respostas[0].imagemRESPOSTA;
            
        // Define o tamanho da imagem (largura e altura)
        imagemRespostaElement.style.width = '100%'; // Defina a largura desejada, por exemplo, pixels ou %
        imagemRespostaElement.style.height = '100%'; // Defina a altura desejada, por exemplo, pixels ou %
        
        respostaElement.appendChild(imagemRespostaElement);
    } 
    revelarRespostaButton.style.display = 'none'; // Oculta o botão após revelar a resposta
}

// Adiciona um ouvinte de eventos para o botão "Revelar Resposta"
document.getElementById('revelar-btn').addEventListener('click', revelarResposta);

// Função para gerar um novo desafio
function gerarDesafio() {
    if (desafiosGerados.size === Object.keys(database).length) {
        alert("Todos os desafios já foram feitos. Atualize o banco de dados.");
        return;
    }

    let numeroAleatorio;
    do {
        numeroAleatorio = Math.floor(Math.random() * (Object.keys(database).length)) + 1;
    } while (desafiosGerados.has(numeroAleatorio));

    // Obtém o desafio atual a partir do banco de dados
    desafioAtual = database[numeroAleatorio];
    const desafioElement = document.getElementById('desafio');
    const respostaElement = document.getElementById('resposta');

    // Define a cor da borda com base na dificuldade do desafio
    let bordaCor = '';
    if (desafioAtual.dificuldade === "Fácil") {
        bordaCor = 'green';
    } else if (desafioAtual.dificuldade === "Médio") {
        bordaCor = 'yellow';
    } else if (desafioAtual.dificuldade === "Difícil") {
        bordaCor = 'red';
    }
    desafioElement.style.border = `2px solid ${bordaCor}`;
    desafioElement.textContent = `Desafio: ${desafioAtual.descricao}`;
    
    // Verifica se há uma imagem e exibe-a se estiver disponível
    if (desafioAtual.imagem) {
        desafioElement.innerHTML += `<img class="imagem-desafio" src="${desafioAtual.imagem}" alt="Imagem do Desafio">`;
    }

    // Verifica se há uma informação adicional e exibe-a se estiver disponível
    // if (desafioAtual.???) {
    //    desafioElement.innerHTML += `<p>????: ${desafioAtual.???}</p>`;
    // }

    respostaElement.style.display = 'none';

    desafiosGerados.add(numeroAleatorio);

    const historicoElement = document.getElementById('historico');
    historicoElement.innerHTML += `<p>Desafio ${numeroAleatorio}: ${desafioAtual.descricao}</p>`;

    // Torna o botão "Revelar Resposta" visível após gerar o desafio
    revelarRespostaButton.style.display = 'block';
}

// Adiciona um ouvinte de eventos para o botão "Gerar Desafio"
document.getElementById('gerar-btn').addEventListener('click', gerarDesafio);

// Chama a função para gerar o primeiro desafio ao carregar a página
gerarDesafio();