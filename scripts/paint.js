const cardM = document.getElementById('cardsMarkets');
const markets = [];
const total = 400000;

const paintCard = (resultados) =>{
resultados = resultados;
const fragment = document.createDocumentFragment();
const templateMarkets = document.querySelector('#templateMarkets').content;

if(resultados === 'MARKETS'){
   for(let i of markets){
       const cloneTemp = templateMarkets.cloneNode(true);
       cloneTemp.querySelector('.total').innerHTML = `<br>TOTAL: ${(i.cantidad*total)}`;
       cloneTemp.querySelector('.cantidad').innerHTML = `CANTIDAD: ${i.cantidad}`;
       cloneTemp.querySelector('.opcion').innerHTML = `COLOR: `;
       fragment.appendChild(cloneTemp);
   }
  
 }
 cardM.appendChild(fragment);
}

function addMarkets(ca, co) {
  // Objeto literal de JS
  let market = {
    cantidad: ca,
    color: co
  };
  markets.push(market);
}
  
export {paintCard,addMarkets}