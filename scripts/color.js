const imagen = document.getElementById("opcion");
let img_contenido = document.getElementById("imgchange");

imagen.onchange = function () {
  imagen.onclick = function () {
    img_contenido.src = "../img/amarillo.png";
  };

  imagen.onchange = function () {
    imagen.onclick = function () {
      img_contenido.src = "../img/azul.png";
    };

    imagen.onchange = function () {
      imagen.onclick = function () {
        img_contenido.src = "../img/rojo.png";
      };

      imagen.onchange = function () {
        imagen.onclick = function () {
          img_contenido.src = "../img/morado.png";
        };
      };
    };
  };
};
