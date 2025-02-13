document.addEventListener("DOMContentLoaded", function () {

    //troca de imagem ao clicar na galeria 

    const galleryItems = document.querySelectorAll('.gallery-item img'); galleryItems.forEach(item => {

        item.addEventListener('click', function () {
            alert('legenda');

        });

    });

});