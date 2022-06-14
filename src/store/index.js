import { createStore } from 'vuex'
import getAllPokemon from '@/store/getAllPokemon'
import infoPokemon from '@/store/infoPokemon'


export default createStore({
  modules: {
    getAllPokemon,
    infoPokemon
  }
})
