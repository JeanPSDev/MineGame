// Carregar dados de usuários do armazenamento local (ou criar um array vazio)
// assim quando vc carregar a pagina vai ficar salvo os cadastros 
// ele vai fazer meio que um arquivo json no local
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

// Usuario cadastrado automaticamente cota do Administrador
usuarios.push({ nome: "Admin", sobrenome: "Gold", email: "admin@teste.com", senha: "123"  });
salvarUsuarios();

// Função para salvar dados de usuários no armazenamento local
function salvarUsuarios() {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

// Procurar um usuário com o email e senha fornecidos
function fazerLogin() {
  // Pegar o valor do campo de email
  const email = document.getElementById("email").value;

  // Pegar o valor do campo de senha 
  const senha = document.getElementById("senha").value;

  // Procurar um usuário com o email e senha fornecidos
  const usuario = usuarios.find(user => user.email === email && user.senha === senha);

  if (usuario) {
      // Se encontrar o usuário, exibir o perfil dele e ocultar o formulário de login
      exibirPerfilUsuario(usuario);
  } 

  else {
      // Se não encontrar o usuário, mostrar um alert super fofo
      Swal.fire({
          title: 'Credenciais inválidas',
          timer: 2000,
          position: 'top',
          text: "Tente De novo",
          icon: 'warning',
      });

      // Além do alert fofo, mostrar uma mensagem na página
      mostrarMensagem("Credenciais inválidas. Por favor, tente novamente.");
  }
}

// Função para mostrar o formulário de cadastro
function mostrarCadastro() {
    mostrarMensagem("Vamos Fazer o Cadastro");
    document.getElementById("login").style.display = "none";
    document.getElementById("Cadastro").style.display = "block";
    document.getElementById("login-form").style.display = "none";
    document.getElementById("cadastro-form").style.display = "block";
    document.getElementById("preencher-button").style.display = "none";
}

// Função para criar um novo cadastro de usuário
function criarCadastro() {
    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const emailCadastro = document.getElementById("cadastro-email").value;
    const senhaCadastro = document.getElementById("cadastro-senha").value;

    // Verifica se todos os campos de cadastro estão preenchidos assim vai aparecer um alert
    if (!nome || !sobrenome || !emailCadastro || !senhaCadastro) {
        let timerInterval
        Swal.fire({
        icon: 'error',
        title: 'Atenção!',
        html: 'Por favor, preencha todos os campos.',
        timer: 1500,
        timerProgressBar: true,
        didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft()
            }, 100)
          },
          willClose: () => {
            clearInterval(timerInterval)
          }
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log('Fechar')
          }
        })
        return;  
    }
    
    // Adiciona o novo usuário à lista de usuários e salva no armazenamento local Json
    usuarios.push({ nome, sobrenome, email: emailCadastro, senha: senhaCadastro });
    salvarUsuarios();

    mostrarMensagem("Cadastro criado com sucesso. Agora você pode fazer login.");
    document.getElementById("login").style.display = "block";
    document.getElementById("Cadastro").style.display = "none";
    document.getElementById("cadastro-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";

    /*^ Isso é so um Alert*/
    let timerInterval
    Swal.fire({
    icon: 'success',
    title: 'EBAAAA!',
    html: 'Seja Bem Vindo.',
    timer: 1500,
    timerProgressBar: true,
    didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft()
        }, 100)
    },
    willClose: () => {
        clearInterval(timerInterval)
    }
    }).then((result) => {
    /* para fechar */
    if (result.dismiss === Swal.DismissReason.timer) {
        console.log('Fechar')
    }
    })

    
}

// eu jeje removi este codigo não precisa ne 
// // function preencherTodasInformacoes() {
// //    document.getElementById("nome").value = "Exemplo";
// //   document.getElementById("sobrenome").value = "Sobrenome Exemplo";
// //   document.getElementById("cadastro-email").value = "exemplo@example.com";
// //    document.getElementById("cadastro-senha").value = "senhaexemplo";
// //}

// Função para lidar com o caso em que o usuário esquece a senha
function esquecerSenha() {
let timerInterval
Swal.fire({
icon: 'question',
title: 'Atenção!',
html: 'O aplicativo ainda está em desenvolvimento e não é possível recuperar a senha no momento.',
timer: 3000,
timerProgressBar: true,
didOpen: () => {
Swal.showLoading()
const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log('Fechar')
  }
})
}

// Função para exibir o perfil do usuário após o login
function exibirPerfilUsuario(usuario) {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("cadastro-form").style.display = "none";
    document.getElementById("mensagem").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("iconDoTGI").style.display = "none";

    ////document.getElementById("caixa1").style.display = "block";
    ////document.getElementById("caixa2").style.display = "block";
    ////document.getElementById("caixa3").style.display = "block";
    ////document.getElementById("caixa4").style.display = "block";
    ////document.getElementById("SairDoPerfil").style.display = "block";
    document.getElementById("TodasINFORMACAO").style.display = "block";

    document.getElementById("Nome1").innerHTML = `${usuario.nome}`;
    document.getElementById("sobrenome1").innerHTML = `${usuario.sobrenome}`;
    document.getElementById("email1").innerHTML = `${usuario.email}`;
    document.getElementById("Nome2").innerHTML = `${usuario.nome}`;

   //// document.getElementById("PerfilUsuario").innerHTML = `Perfil Do(a) ${usuario.nome} ${usuario.sobrenome}`;
   //// document.getElementById("perfil-usuario").style.display = "block";
   //// document.getElementById("PerfilUsuario").style.display = "block";
   //// document.getElementById("perfil-usuario").innerHTML = `Olá, seja bem-vindo ${usuario.nome} ${usuario.sobrenome}. E-mail: ${usuario.email}`;
   //// document.getElementById("SairDoPerfil").style.display = "block";
}

// Função para mostrar uma mensagem na interface ???????
function mostrarMensagem(mensagem) {
    document.getElementById("mensagem").innerText = mensagem;
    document.getElementById("mensagem").style.display = "block";
}

// Função para fazer sair do perfil para ele voltar para o login
function logout() {
  document.getElementById("login-form").style.display = "block";
  document.getElementById("mensagem").style.display = "block";
  document.getElementById("login").style.display = "block";
 


  ////document.getElementById("SairDoPerfil").style.display = "none";
  document.getElementById("TodasINFORMACAO").style.display = "none";
}

// Função para resetar todos os cadastros de usuários
function resetarCadastro() {
    usuarios = [];
    salvarUsuarios();
    mostrarMensagem("Todos os cadastros foram resetados.");
}

//^ GIF DE TELA DE CARREGAMENTO
// Simule um atraso de carregamento (apenas para fins de demonstração)
setTimeout(function() {
  // Gradualmente aumente a opacidade para mostrar a imagem (entrada)
  var loaderContainer = document.querySelector('.loader-container');
  loaderContainer.style.opacity = '1';
  
  // Você pode adicionar seu código JavaScript para o conteúdo principal aqui
}, 900); // Tempo de entrada (0,9 segundos)

// Após um tempo definido, oculte a imagem com uma transição suave na saída
setTimeout(function() {
  var loaderContainer = document.querySelector('.loader-container');
  loaderContainer.style.opacity = '0'; // Gradualmente diminui a opacidade (saída)
  
  // Aguarde um pouco antes de remover o elemento de carregamento
  setTimeout(function() {
      loaderContainer.style.display = 'none';
  }, 900); // Tempo de saída (0,5 segundos) após a imagem ficar invisível
}, 3000); // Tempo de exibição da imagem (2 segundos)



function comprarRoupinha() {
  const resultado1 = document.getElementById("resultado1");
  const pontosSpan = document.getElementById("pontos");
  
  // Verificar se o jogador tem pontos suficientes para comprar a roupinha
  if (pontos >= 10) {
      resultado1.textContent = "Você comprou um avatar";
      pontos -= 10; // Deduzir 10 pontos
      pontosSpan.textContent = pontos; // Atualizar a exibição da pontuação
      document.getElementById("AvatarDeMago").style.display = "block";
  } 
  else {
      resultado1.textContent = "Você não tem pontos suficientes para comprar esse avatar";
  }
}