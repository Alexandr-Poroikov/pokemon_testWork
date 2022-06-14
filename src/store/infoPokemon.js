import axios from 'axios';
export default{
    state: ()=>({
        //для имени
        infoPokemon: [],
        //для "тип покемона"
        typesPokemon: [],
        //для тстатов
        objAllStats: []
    }),
    getters: {
    },
    mutations: {
        setInfoPokemon(state, infoPokemon){
            state.infoPokemon = infoPokemon
        },
        //массив для "тип покемона"
        setTypesPokemon(state, typesPokemon){
            state.typesPokemon = typesPokemon.map(pokemonType =>{
                return pokemonType.type.name
            })
        },
        //объект со статами
        setStatsPokemon(state, statsPokemon){
            state.objAllStats = statsPokemon.reduce( (accum, item) =>{
                accum[item.stat.name] = item.base_stat
                return accum
            },{})
        }
    },
    actions: {
        fetchOnePokemon({commit},id){
            return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`,) 
                .then(response=>{
                    commit('setInfoPokemon',response.data)
                    commit('setTypesPokemon',response.data.types)
                    commit('setStatsPokemon',response.data.stats)
                })
                .catch(e => console.log(e))
        },
    },
}