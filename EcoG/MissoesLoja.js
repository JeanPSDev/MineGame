let pontos = 0; // Variável para a pontuação
let xp = 0; // Variável para a experiência
let nivel = 0; // Variável para o nível
const nivelSpan = document.getElementById("nivelAtual");

function Missao1() {
    const fileInput = document.getElementById("fileInput");
    const resultado = document.getElementById("resultado");
    const pontosSpan = document.getElementById("pontos");
    const xpSpan = document.getElementById("xp");

    const nomeArquivo = fileInput.value;

    if (nomeArquivo.toLowerCase().includes("imagem1.png")) {
        resultado.textContent = "Parabens Missão concluida!";
        pontos += 35; // Adicionar 10 pontos
        xp += 50; // Adicionar 15 XP
        pontosSpan.textContent = pontos;
        xpSpan.textContent = xp;
        document.getElementById("Missao1_Mostra").style.display = "none";
        // Chamar a função verificarNivel após atualizar a XP
        verificarNivel();
    } else {
        resultado.textContent = "Verificamos que a missão não foi concluída, tente novamente";
    }
}

function Missao2() {
    const fileInput = document.getElementById("fileInput2");
    const resultado = document.getElementById("resultado2");
    const pontosSpan = document.getElementById("pontos");
    const xpSpan = document.getElementById("xp");

    const nomeArquivo = fileInput.value;

    if (nomeArquivo.toLowerCase().includes("imagem2.png")) {
        resultado.textContent = "Parabens Missão concluida!";
        pontos += 5; // Adicionar 10 pontos
        xp += 5; // Adicionar 15 XP
        pontosSpan.textContent = pontos;
        xpSpan.textContent = xp;
        document.getElementById("Missao3_Mostra").style.display = "block";
        document.getElementById("Missao2_Mostra").style.display = "none";
        // Chamar a função verificarNivel após atualizar a XP
        verificarNivel();
    } 
    else {
        resultado.textContent = "Verificamos que a missão não foi concluída, tente novamente";
    }
}

function Missao3() {
    const pontosSpan = document.getElementById("pontos");
    const xpSpan = document.getElementById("xp");
    const resultado3 = document.getElementById("resultado3");

    // Verificar as respostas
    const resposta1 = document.querySelector('input[name="resposta1"]:checked');
    const resposta2 = document.querySelector('input[name="resposta2"]:checked');
    const resposta3 = document.querySelector('input[name="resposta3"]:checked');

    if (resposta1 && resposta2 && resposta3) {
        if (resposta1.value === "sim" && resposta2.value === "sim" && resposta3.value === "sim") {
            resultado3.textContent = "Todas as respostas estão corretas! Você ganhou pontos e XP.";
            // Aqui você pode adicionar a lógica para conceder pontos e XP
            pontos += 2; // Adicionar 10 pontos
            xp += 3; // Adicionar 15 XP
            pontosSpan.textContent = pontos;
            xpSpan.textContent = xp;
            document.getElementById("Missao3_Mostra").style.display = "none";
        // Chamar a função verificarNivel após atualizar a XP
        verificarNivel();
        } 
        else {
            resultado3.textContent = "Alguma resposta está incorreta. Continue tentando!";
        }
    } 
    else {
        resultado3.textContent = "Por favor, responda todas as perguntas.";
    }
}




function verificarNivel() {
    while (xp >= 100) {
        nivel++;
        xp -= 100; // Reduzir a XP para o próximo nível
        nivelSpan.textContent = nivel;
    }
}





function resetarTudo() {
    const resultado = document.getElementById("resultado");
    const pontosSpan = document.getElementById("pontos");
    const xpSpan = document.getElementById("xp");
    const nivelSpan = document.getElementById("nivelAtual");

    pontos = 0;
    xp = 0;
    nivel = 0;

    resultado.textContent = "Tudo foi resetado!";
    pontosSpan.textContent = pontos;
    xpSpan.textContent = xp;
    nivelSpan.textContent = nivel;
}





document.getElementById("mostrarModal-missoes").addEventListener("click", function() {
    document.getElementById("meuModal-missoes").style.display = "block";
});

document.getElementById("fecharModal-missoes").addEventListener("click", function() {
    document.getElementById("meuModal-missoes").style.display = "none";
});

document.getElementById("mostrarModal-loja").addEventListener("click", function() {
    document.getElementById("meuModal-loja").style.display = "block";
});

document.getElementById("fecharModal-loja").addEventListener("click", function() {
    document.getElementById("meuModal-loja").style.display = "none";
});

document.getElementById("mostrarModal-Ranking").addEventListener("click", function() {
    document.getElementById("meuModal-Ranking").style.display = "block";
});

document.getElementById("fecharModal-Ranking").addEventListener("click", function() {
    document.getElementById("meuModal-Ranking").style.display = "none";
});

document.getElementById("mostrarModal-Mercados").addEventListener("click", function() {
    document.getElementById("meuModal-Mercados").style.display = "block";
});

document.getElementById("fecharModal-Mercados").addEventListener("click", function() {
    document.getElementById("meuModal-Mercados").style.display = "none";
});

document.getElementById("mostrarModal-Finalizar").addEventListener("click", function() {
    document.getElementById("meuModal-Finalizar").style.display = "block";
});

document.getElementById("fecharModal-Finalizar").addEventListener("click", function() {
    document.getElementById("meuModal-Finalizar").style.display = "none";
});