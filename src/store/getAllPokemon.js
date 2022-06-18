import axios from 'axios';
export default{
    state: ()=>({
        //массив со всеми покемонами запроса (для вывода имени)
        allPokemon: JSON.parse(localStorage.getItem('allPokemon'))? JSON.parse(localStorage.getItem('allPokemon')): [],
        //массив с покемонами на одной странице 
        pokemonOnPage: JSON.parse(localStorage.getItem('pokemonOnPage'))? JSON.parse(localStorage.getItem('pokemonOnPage')): [],
        //данные пагинациии
        page: JSON.parse(localStorage.getItem('page'))? JSON.parse(localStorage.getItem('page')): 1,
        limitOnPage: JSON.parse(localStorage.getItem('limitOnPage'))? JSON.parse(localStorage.getItem('limitOnPage')): 4,
        totalPage: JSON.parse(localStorage.getItem('totalPage'))? JSON.parse(localStorage.getItem('totalPage')): 1,
        //для поиска
        searchQuery: '',
    }),
    mutations: {
        // логика поиска по клику
        searchPokemon(state){
            if(state.searchQuery){
                state.pokemonOnPage = state.pokemonOnPage.filter(post=>{
                    return post.name.toLowerCase().includes(state.searchQuery.toLowerCase())
                })
            }else{
                state.pokemonOnPage = JSON.parse(localStorage.getItem('pokemonOnPage'))
            }
        },
        //массив со всеми покемонами
        setAllPokemon(state,allPokemon){
            state.allPokemon = allPokemon
            state.allPokemon.forEach((pokemon,index)=>{
                pokemon.id = index+1
            })
            //localStorage
            localStorage.setItem('allPokemon', JSON.stringify(state.allPokemon))
        },
        //массив с покемонами на одной странице 
        setPokemonOnPage(state, postsOnPage){
                let start = (state.page - 1) * postsOnPage
                let end = start + postsOnPage
                state.pokemonOnPage = state.allPokemon.slice(start,end)
                //localStorage
                localStorage.setItem('pokemonOnPage', JSON.stringify(state.pokemonOnPage))             
        },
        //данные пагинациии
        setTotalPage(state, postsOnPage,){
            state.totalPage = Math.ceil(state.allPokemon.length / postsOnPage) 
            //localStorage
            localStorage.setItem('totalPage', JSON.stringify(state.totalPage)) 
        },
        setPage(state,page){
            state.page = page
            //localStorage
            localStorage.setItem('page', JSON.stringify(state.page)) 
        },
        setLimitOnPage(state,limitOnPage){
            state.limitOnPage = limitOnPage
            //localStorage
            localStorage.setItem('limitOnPage', JSON.stringify(state.limitOnPage)) 
        },
        //данные поиска
        setSearchQuery(state, searchQuery){
                state.searchQuery = searchQuery
        },
    },
    actions: {
        async fetchPokemonOnPage({commit}, postsOnPage){
            //нужное кол-во отображаемых покемонов на стр.
            commit('setLimitOnPage',postsOnPage)
            return axios.get('https://pokeapi.co/api/v2/pokemon',) 
                .then(response=>{
                    commit('setAllPokemon',response.data.results)
                    commit('setPokemonOnPage', postsOnPage)
                    commit('setTotalPage',postsOnPage)
                })
                .catch(e => console.log(e))
        },    
    },
}
