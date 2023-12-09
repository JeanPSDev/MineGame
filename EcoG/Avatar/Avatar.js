// MODAL
document.getElementById('abrirModal').addEventListener('click', function() {
    document.getElementById('meuModal').classList.add('aberto');
  });
  
  document.getElementById('fecharModal').addEventListener('click', function() {
    document.getElementById('meuModal').classList.remove('aberto');
  });
  
  window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('meuModal')) {
      document.getElementById('meuModal').classList.remove('aberto');
    }
  });


function MudarAvatar(){
    document.getElementById("MudarAvatares").style.display = "block";
    document.getElementById("BotaoParaMudarAvatar").style.display = "none";
    document.getElementById("mensagem1").style.display = "none";
    document.getElementById("mensagem2").style.display = "none";
}

function FizalizouaEdicao(){
    document.getElementById("MudarAvatares").style.display = "none";
    document.getElementById("BotaoParaMudarAvatar").style.display = "block";
    document.getElementById("mensagem2").style.display = "block";
}

const IdDdoAvatar = document.querySelectorAll("#MudarAvatares .color-button[Avatar]");
const imageElementAvatar = document.getElementById("imagePele");
const imageElementAvatarPerfil = document.getElementById("imagePelePerfil");


const imageMapAvatar = {
    Homen: "Avatar/Perfil1.png",
    Mulher: "Avatar/Perfil2.png",
    Geek: "Avatar/Perfil3.png",
    Gatinho: "Avatar/Perfil4.png",
    Mago: "Avatar/Perfil5.png",
    MaeNatureza: "Avatar/Perfil6.png",
    Kenny: "Avatar/Perfil7.png",
    vovo: "Avatar/Perfil8.gif",
    eric: "Avatar/Perfil9.png",
    jovem: "Avatar/Perfil10.gif",
    creeper: "Avatar/Perfil11.png",
    aldeao: "Avatar/Perfil12.gif",
    dancarina: "Avatar/Perfil13.gif",
    radioativo: "Avatar/Perfil14.gif",
    Kenny34: "Avatar/Perfil15.png",
    Kenny4: "Avatar/Perfil16.png",
};

IdDdoAvatar.forEach((button) => {
    button.addEventListener("click", () => {
        const Avatares = button.getAttribute("Avatar");
        const imageUrl = imageMapAvatar[Avatares];

        imageElementAvatar.style.opacity = 0;
        imageElementAvatarPerfil.style.opacity = 0;

        setTimeout(() => {
            imageElementAvatar.src = imageUrl;
            imageElementAvatar.style.opacity = 1;
            imageElementAvatarPerfil.src = imageUrl;
            imageElementAvatarPerfil.style.opacity = 1;
        }, 500);
    });
});


//? PEFIL DESBLOQUEADOS
function DesbloquearMago() {
    if (document.getElementById("AvatarDeMago").style.display == "block") {
        alert("O mago já foi desbloqueado!");
    }
    document.getElementById("AvatarDeMago").style.display = "block";
}

function DesbloquearMaeNatureza() {
    if (document.getElementById("AvatarDaMaeNatureza").style.display == "block") {
        alert("A mãe Natureza já foi desbloqueada!");
    }
    document.getElementById("AvatarDaMaeNatureza").style.display = "block";
}



function ResetarEdicoes() {
    // Redefina a visibilidade dos elementos
    document.getElementById("MudarAvatares").style.display = "none";
    document.getElementById("BotaoParaMudarAvatar").style.display = "block";
    
    // Redefina a imagem para a configuração inicial
    imageElementAvatar.style.opacity = 0;
    imageElementAvatarPerfil.style.opacity = 0;
    setTimeout(() => {
        imageElementAvatar.src = "Avatar/reconhecimento-facial.png";
        imageElementAvatar.style.opacity = 1;
        imageElementAvatarPerfil.src = "Avatar/reconhecimento-facial.png";
        imageElementAvatarPerfil.style.opacity = 1;
    }, 500);

    // Redefina o estado de desbloqueio do avatar de mago
    document.getElementById("AvatarDeMago").style.display = "none";
    document.getElementById("AvatarDaMaeNatureza").style.display = "none";

    alert("FOI RESETADO O AVATAR");
}