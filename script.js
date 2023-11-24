
    window.addEventListener('scroll', function () {
        var navbar = document.getElementById('navbar');

        // Verifica a posição da rolagem
        if (window.scrollY > 100) { // Ajuste o valor conforme necessário
            navbar.classList.add('fixed');
        } else {
            navbar.classList.remove('fixed');
        }
    });

    document.addEventListener('DOMContentLoaded', function () {
        const urlParams = new URLSearchParams(window.location.search);
        const categoria = urlParams.get('categoria');

        // Agora você pode usar a variável "categoria" para exibir os produtos da categoria correspondente
        console.log('Categoria selecionada:', categoria);
    });

