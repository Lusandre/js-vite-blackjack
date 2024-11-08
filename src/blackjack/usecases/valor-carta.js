/**
 * Obtener el valor de una carta
 * @param {String} carta Ejemplo: 'D3'
 * @returns {Number} Devuelve el valor que corresponde a la carta
 */

export const valorCarta = (carta) => {
  if (!carta || carta.length === 0)
    throw new Error("carta es obligatorio y no puede estar vacio");

  const valor = carta.substring(0, carta.length - 1);
  return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
};
