export let state;


export function managePets(state = {pets: []}, action){
  switch(action.type){
    case 'ADD_PET':
      if (action.pet){
        let pet = action.pet
        if (pet.name && pet.species && pet.id){
          return {...state, pets: [...state.pets, pet]}
        }
      }
      break
    case 'REMOVE_PET':
      if (action.id){
        return {...state, pets: [...state.pets.filter(x => x.id !== action.id)]}
      }
      break
  }
  return state
}

export function dispatch(action = '@@INIT'){
  state = managePets(state, action)
  render()
}

export function render(){
  document.getElementById('container').innerHTML = `<ul>${state.pets.map(pet => `<li>${pet.name}</li>`).join('')}</ul>`
}
