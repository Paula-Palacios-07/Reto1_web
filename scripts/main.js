import{paintCard, addMarkets} from './paint.js';
const btnTotal = document.getElementById('btnTotal');
btnTotal.onclick = function (){
    const ca = document.getElementById('cantidad').value;
    const op = document.getElementById('opcion').value; 
    if (op === 'amarillo','azul','rojo','morado'){
              addMarkets(ca,op)
              document.getElementById('cantidad').value="";
              document.getElementById('opcion').value="";
          }   
  if (op === 'amarillo','azul','rojo','morado'){
      paintCard("MARKETS");
  } 
}

