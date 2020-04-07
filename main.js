/********************
 * HELPER FUNCTIONS *
 ********************/




/***********************
 * ITERATION FUNCTIONS *
 **********************/
const makeDino = (species,period,diet, extinct = false) => {
  let newDino = {};
  newDino.species = species;
  newDino.period = period;
  newDino.carnivore = diet;
  newDino.extinct = extinct;
  return newDino;
  }

  const makeSingular = (dinoObj) => {
    let empty = ''
    if (dinoObj.species.endsWith('us')){
   empty = dinoObj.species.substring(0, dinoObj.species.length -2);
      }else {
    empty = dinoObj.species;
      }
      const copy = {
        species: empty,
        period: dinoObj.period,
        carnivore: dinoObj.carnivore,
        extinct: dinoObj.extinct,
      }
    return copy
  }

  const truncateSpecies = (dinoObj) => {
    
    let newDino = {
      species: dinoObj.species,
      period: dinoObj.period,
      carnivore: dinoObj.carnivore,
      extinct: dinoObj.extinct,
    }
  }
  
  const makeExtinct = (dinoObj) => {
    const copy = {
      species: dinoObj.species,
      period: dinoObj.period,
      carnivore: dinoObj.carnivore,
      extinct: dinoObj.extinct = true,
    }
    return copy
  }

  const isCarnivore = (dinoObj) => {
    const copy = {
      species: dinoObj.species,
      period: dinoObj.period,
      carnivore: dinoObj.carnivore,
      extinct: dinoObj.extinct,
    }
    return copy.carnivore === true;
  }

  const isExtinct = (dinoObj) => {
    const copy = {
      species: dinoObj.species,
      period: dinoObj.period,
      carnivore: dinoObj.carnivore,
      extinct: dinoObj.extinct,
    }
    return copy.extinct === true;
  }

  const isTriassic = (dinoObj) => {
    const copy = {
      species: dinoObj.species,
      period: dinoObj.period,
      carnivore: dinoObj.carnivore,
      extinct: dinoObj.extinct,
    }
    return copy.period === 'Triassic';
  }

  const isJurassic = (dinoObj) => {
    const copy = {
      species: dinoObj.species,
      period: dinoObj.period,
      carnivore: dinoObj.carnivore,
      extinct: dinoObj.extinct,
    }
    return copy.period === 'Jurassic';
  }

  const isCretaceous = (dinoObj) =>{
    const copy = {
      species: dinoObj.species,
      period: dinoObj.period,
      carnivore: dinoObj.carnivore,
      extinct: dinoObj.extinct,
    }
    return copy.period === 'Cretaceous';
  }





/*********************************
 * TEST SETUP CODE - DON'T TOUCH!*
 ********************************/

  if (typeof makeDino === 'undefined') {
    makeDino = undefined
  }

  if (typeof makeSingular === 'undefined') {
    makeSingular = undefined
  }

  if (typeof truncateSpecies === 'undefined') {
    truncateSpecies = undefined
  }

  if (typeof makeExtinct === 'undefined') {
    makeExtinct = undefined
  }

  if (typeof isCarnivore === 'undefined') {
    isCarnivore = undefined
  }

  if (typeof isExtinct === 'undefined') {
    isExtinct = undefined
  }

  if (typeof isTriassic === 'undefined') {
    isTriassic = undefined
  }

  if (typeof isJurassic === 'undefined') {
    isJurassic = undefined
  }

  if (typeof isCretaceous === 'undefined') {
    isCretaceous = undefined
  }

  if (typeof isFirstAlphabeticallyBySpecies === 'undefined') {
    isFirstAlphabeticallyBySpecies = undefined
  }

  if (typeof extinctIsLast === 'undefined') {
    extinctIsLast = undefined
  }

  if (typeof carnivoreIsFirst === 'undefined') {
    carnivoreIsFirst = undefined
  }

  if (typeof isInPeriodOrder === 'undefined') {
    isInPeriodOrder = undefined
  }

  if (typeof singularizeDinos === 'undefined') {
    singularizeDinos = undefined
  }

  if (typeof truncateDinos === 'undefined') {
    truncateDinos = undefined
  }

  if (typeof makeAllExtinct === 'undefined') {
    makeAllExtinct = undefined
  }

  if (typeof carnivoresOnly === 'undefined') {
    carnivoresOnly = undefined
  }

  if (typeof herbivoresOnly === 'undefined') {
    herbivoresOnly = undefined
  }

  if (typeof extinctOnly === 'undefined') {
    extinctOnly = undefined
  }

  if (typeof notExtinct === 'undefined') {
    notExtinct = undefined
  }

  if (typeof triassicOnly === 'undefined') {
    triassicOnly = undefined
  }

  if (typeof notTriassic === 'undefined') {
    notTriassic = undefined
  }

  if (typeof bySpecies === 'undefined') {
    bySpecies = undefined
  }

  if (typeof byExtinctLast === 'undefined') {
    byExtinctLast = undefined
  }

  if (typeof byCarnivoresFirst === 'undefined') {
    byCarnivoresFirst = undefined
  }

  if (typeof byPeriod === 'undefined') {
    byPeriod = undefined
  }



module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct,
  isCarnivore,
  isExtinct,
  isTriassic,
  isJurassic,
  isCretaceous,
  isFirstAlphabeticallyBySpecies,
  extinctIsLast,
  carnivoreIsFirst,
  isInPeriodOrder,
  singularizeDinos,
  truncateDinos,
  makeAllExtinct,
  carnivoresOnly,
  herbivoresOnly,
  extinctOnly,
  notExtinct,
  triassicOnly,
  notTriassic,
  bySpecies,
  byExtinctLast,
  byCarnivoresFirst,
  byPeriod,
}
