<template>
  <ul class="pokemonList">
    <li
      class="pokemonList__item"
      v-for="(onePost, idx) in postsOnPage"
      :key="idx"
    >
      <pokemon-item :onePost="onePost" />
    </li>
  </ul>
</template>

<script>
import PokemonItem from "@/components/PokemonItem";

export default {
  components: {
    PokemonItem,
  },
  data: () => ({}),
  props: {
    postsOnPage: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
.pokemonList {
  width: 100%;
  height: 100%;
  &__item {
    width: 100%;
    min-height: 100px;
    border-radius: 10px;
    background: #fff;
    margin-bottom: 10px;
  }
}
</style>