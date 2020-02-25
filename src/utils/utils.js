export function formatDate(date) {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + ' ' + monthNames[monthIndex] + ' ' + year;
}

export function formatPokemonId(pokemonId) {
  var id = "#"
  if(pokemonId < 10) {
    id += '00'
  } else if (pokemonId < 100) {
    id += '0'
  }

  id += pokemonId

  return id
}

import { colors } from '../assets/values'

export function getColorFromPokemonTypes(types, defaultColor = null) {
  return(
    types ?
      types.includes('Grass') ?
          colors.green
      : types.includes('Fire') ?
          colors.red
      : types.includes('Water') ?
          colors.blue
      : types.includes('Electric') ?
          colors.yellow
      : defaultColor
  :
    defaultColor
  )
}