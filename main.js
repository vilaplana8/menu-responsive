// Cogemos del documento el elemento con id menu-icon
var menu_icon = document.getElementById('menu-icon');

// Vinculamos el evento click de la variable menu_icon con la
// función toogleMenu que creamos a continuación
menu_icon.addEventListener("click", toogleMenu);

// Inicio de la función para mostrar y ocultar los lis
function toogleMenu() {
  var menu_ul = document.getElementById('menu-ul');
  // Si el li de home tiene la class show, borramos esa clase
  if (document.getElementById('home-li').classList.contains('show')) {
    menu_ul.querySelectorAll( 'li' )
    .forEach( el => el.classList.remove( 'show' ));
  } else {
    // Si el li no tiene la class show, añadimos la clase show
    // para que se muestre
    menu_ul.querySelectorAll( 'li' )
    .forEach( el => el.classList.add( 'show' ));
  }
}
// Fin de la función para mostrar y ocultar lis
