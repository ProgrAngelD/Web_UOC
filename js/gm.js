//Acciones a la hora de iniciar la pagina web
$(document).ready(main);
$(function () {
  mostrarCatalogo(listaObj);
});
//variable para activar animacion de menu movil
var activo = true;
//variables para poder pasar pagina y el listado de los objetos del catalogo
var count = 0;
var pg = 1;
var maxObj = 9;
const listaObj = [
  {
    src: 'images/aspiradora.jpg',
    alt: '',
    nombre: 'Aspiradora',
  },
  {
    src: 'images/bicicleta.jpg',
    alt: '',
    nombre: 'Bicicleta',
  },
  {
    src: 'images/barbacoa.jpg',
    alt: '',
    nombre: 'Barbacoa',
  },
  {
    src: 'images/camara.jpg',
    alt: '',
    nombre: 'Camara',
  },
  {
    src: 'images/cinceles.jpg',
    alt: '',
    nombre: 'Cinceles',
  },
  {
    src: 'images/cortacesped.jpg',
    alt: '',
    nombre: 'Cortacesped',
  },
  {
    src: 'images/kit_de_herramientas.jpg',
    alt: '',
    nombre: 'Kit de herramientas',
  },
  {
    src: 'images/maquina_de_coser.jpg',
    alt: '',
    nombre: 'Maquina de coser',
  },
  {
    src: 'images/martillo.jpg',
    alt: '',
    nombre: 'Martillo',
  },
  {
    src: 'images/pulidora.jpg',
    alt: '',
    nombre: 'Pulidora',
  },
  {
    src: 'images/tableta_de_dibujo_wacom.jpg',
    alt: '',
    nombre: 'Tableta de dibujo wacom',
  },
  {
    src: 'images/taladro.jpg',
    alt: '',
    nombre: 'Taladro',
  }
];
//Cambio de tamaño del catalogo segun el screen de la pantalla para dejar mas o menos espacio en los lados
if(screen.width>820&&screen.width<1280)
{
  maxObj=6;
}
else if(screen.width>740&&screen.width<820)
{
  maxObj=15;
}
else if(screen.width>500&&screen.width<720)
{
  maxObj=12;
}
else if(screen.width>1280)
{
  maxObj=9;
}
else
{
  maxObj=6;
}
//Instancia de toda la lista del catalogo ademas de añadir el pasar pagina 
function mostrarCatalogo(listaObj) {
  let html = '';
  count = (pg * maxObj) - maxObj;
  listaObj.forEach(function (Obj, index) {
    if (index >= count && count < pg * maxObj) {
      html += `
      <div class="objeto ">
      <a href="#"><img src="${Obj.src}" alt="${Obj.alt}" class="img_objeto">
          <h3 class="nombre_objeto">${Obj.nombre}</h3>
      </a>
     </div>
    `;
      count++
    }
  });
  html += `
  <div class="passar_pagina">
                  <p><a href="#" onclick="paginasiguiente(-1)">&#10094;</a><span id="num_pag">1</span><a href="#" onclick="paginasiguiente(+1)">&#10095;</a></p>
              </div>
`;
  $('.lista_objetos').html(html);
}
//Comprobacion de si se puede pasar pagina en el catalogo y en caso de ser posible cambio de pagina y elementos
function paginasiguiente(num) {
  pg = pg + num;
  console.log(pg * maxObj+" "+(listaObj.length+maxObj));
  if (pg < 1) 
  {
    pg = 1;
  }
  if(pg * maxObj>=listaObj.length+maxObj)
  {
    pg=pg-1;
  }
  mostrarCatalogo(listaObj);
  document.getElementById("num_pag").innerHTML = pg.toString();
}

//Activacion y desactivacion de la animacion de guardado del menu de movil
function main() {
  $('.btn_menu').click(function () {
    if (activo) {
      $('nav').animate({
        left: '0'
      });
    }
    else {
      $('nav').animate({
        left: '-100%'
      });
    }
    activo = !activo;
  });
}