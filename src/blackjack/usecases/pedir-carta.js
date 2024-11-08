/**
 * Extrae una carta del deck y la retorna
 * @param {Array<String>} deck Ejemplo: ['8H', '3C', '3D',..., 'AD']
 * @returns {String} Retorna una carta del deck
 */

export const pedirCarta = (deck) => {
  if (!deck || deck.length === 0) {
    throw "deck es obligatorio y debe tener cartass";
  }
  const carta = deck.pop();
  return carta;
};
