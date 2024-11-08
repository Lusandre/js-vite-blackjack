import { crearCartaHTML, pedirCarta, valorCarta } from "./";

/**
 *
 * @param {Number} puntosMinimos Puntos minimos que necesita la computadora para ganar
 * @param {HTMLElement} puntosHTML Elemento html para mostrar los puntos
 * @param {HTMLElement} divCartasComputadora Elemento html para mostrar las cartas
 * @param {Array<String>} deck
 */

export const turnoComputadora = (
  puntosMinimos,
  puntosHTML,
  divCartasComputadora,
  deck
) => {
  if (!puntosMinimos) throw new Error("puntosMinimos es necesario");
  if (!puntosHTML) throw new Error("puntosHTML es necesario");
  if (!deck) throw new Error("deck es necesario");
  let puntosComputadora = 0;
  do {
    const carta = pedirCarta(deck);

    puntosComputadora = puntosComputadora + valorCarta(carta);
    puntosHTML.innerText = puntosComputadora;

    // <img class="carta" src="assets/cartas/2C.png">

    divCartasComputadora.append(crearCartaHTML(carta));

    if (puntosMinimos > 21) {
      break;
    }
  } while (puntosComputadora < puntosMinimos && puntosMinimos <= 21);

  setTimeout(() => {
    if (puntosComputadora === puntosMinimos) {
      alert("Nadie gana :(");
    } else if (puntosMinimos > 21) {
      alert("Computadora gana");
    } else if (puntosComputadora > 21) {
      alert("Jugador Gana");
    } else {
      alert("Computadora Gana");
    }
  }, 100);
};
