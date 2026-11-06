document.addEventListener('DOMContentLoaded', () => {
    // Seleccionamos todos los elementos del menú que tienen desplegable
    const menusDesplegables = document.querySelectorAll('.menu-item-desplegable');

    menusDesplegables.forEach(menu => {
        const enlacePrincipal = menu.querySelector('.enlace-principal');

        enlacePrincipal.addEventListener('click', (e) => {
            e.preventDefault(); // Evita que la página salte arriba al hacer clic en el '#'

            // Cierra los demás menús abiertos para que solo uno esté activo a la vez
            menusDesplegables.forEach(item => {
                if (item !== menu) {
                    item.classList.remove('activo');
                }
            });

            // Alterna la clase 'activo' en el menú actual
            menu.classList.toggle('activo');
        });
    });

    // Cierra los menús desplegables si el usuario hace clic fuera de ellos
    window.addEventListener('click', (e) => {
        if (!e.target.closest('.menu-item-desplegable')) {
            menusDesplegables.forEach(menu => {
                menu.classList.remove('activo');
            });
        }
    });
});