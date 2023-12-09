window.onload = function() {
            document.getElementById('myModal-Termo').style.display = 'block';
        }
        // Adicione um evento para exibir um alert quando a caixa for marcada
    const checkbox = document.getElementById("myCheckbox");
    checkbox.addEventListener("change", function() {
      if (this.checked) {
       // JavaScript para abrir e fechar o modal
        document.getElementById('myModal-Termo').style.display = 'none';

        /* Alert */
        Swal.fire({
          title: 'Otimo.',
          timer: 2000,
          position: 'top',
          text: "Vamos testar o app!",
          icon: 'success',
        })
      }
    });

