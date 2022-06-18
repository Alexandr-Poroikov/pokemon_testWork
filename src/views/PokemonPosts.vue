<template>
  <div class="pokemonPosts">
    <h1 class="pokemonPosts__title">List of all pokemon</h1>
    <div class="pokemonPosts__selectAndSearch">
      <my-search
        :modelValue="searchQuery"
        @update:modelValue="setSearchQuery"

      />
      <my-button @click="searchPokemon">ok</my-button>
    </div>
    <div class="pokemonPosts__list">
      <pokemon-list :postsOnPage="pokemonOnPage" />
    </div>
    <my-paginations :totalPage="totalPage" />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
import PokemonList from "@/components/PokemonList";
export default {
  components: {
    PokemonList,
  },
  data: ()=>({
  }),
  computed: {
    ...mapGetters(["searchByInput"]),
    ...mapState({
      //покемонов на одной стр
      pokemonOnPage: (state) => state.getAllPokemon.pokemonOnPage,
      //всего стр. для пагинации
      totalPage: (state) => state.getAllPokemon.totalPage,
      //для поиска
      searchQuery: (state) => state.getAllPokemon.searchQuery,
    }),
  },
  methods: {
    ...mapMutations(["setSearchQuery","searchPokemon"]),
    ...mapActions(["fetchPokemonOnPage"]),
  },
  async mounted() {
    //делаем вызов нужного количества покемонов на странице
    if (!this.pokemonOnPage.length) {
      await this.fetchPokemonOnPage(3);
    }
  },
};
</script>

<style lang="scss" scoped>
.pokemonPosts {
  position: relative;
  &__title {
    font-size: 48px;
    text-align: center;
  }
  &__selectAndSearch {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    grid-gap: 20px;
    margin-bottom: 20px;
  }
  &__list {
    width: 100%;
    margin-bottom: 20px;
  }
}

.loadingBlock {
  height: 100%;
  width: 100%;
  &__img {
    display: block;
    height: 100%;
    margin: 0 auto;
  }
}
</style>