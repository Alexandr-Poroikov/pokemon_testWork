<template>
  <ul class="paginations">
    <li class="paginations__item" @click="changePrev">{{ prev }}</li>

    <li
      class="paginations__item"
      v-for="(numberPage, idx) in totalPage"
      :key="idx"
      :class="{ 'paginations__item--active': page === numberPage }"
      @click="changePage(numberPage)"
    >
      {{ numberPage }}
    </li>

    <li class="paginations__item" @click="changeNext">{{ next }}</li>
  </ul>
</template>
<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "my-paginations",
  props: {
    totalPage: {
      type: Number,
      default: 5,
    },
  },
  data: () => ({
    prev: "prev",
    next: "next",
  }),
  computed: {
    ...mapState({
      page: (state) => state.getAllPokemon.page,
      limitOnPage: (state) => state.getAllPokemon.limitOnPage,
      
    }),
  },
  methods: {
    ...mapMutations(["setPage", "setPokemonOnPage","setTotalPage"]),

    changePrev() {
      if (this.page > 1) {
        this.setPage(this.page - 1);
        this.setPokemonOnPage(this.limitOnPage);
      }
    },
    // по клику на страницу
    changePage(numberPage) {
      //изменяем номер страницы
      this.setPage(numberPage);
      //отрисовываем на странице нужные посты(покемонов)
      this.setPokemonOnPage(this.limitOnPage);
    //   this.setTotalPage()
    },
    changeNext() {
      if (this.page < this.totalPage) {
        this.setPage(this.page + 1);
        this.setPokemonOnPage(this.limitOnPage);
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.paginations {
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 10px;
  &__item {
    border: 3px solid #fffefe;
    box-shadow: 1px 1px 2px #000;
    border-radius: 15px;
    cursor: pointer;
    padding: 6px 10px;
    font-size: 24px;
    grid-gap: 10px;
    transition: all 0.2s;
    &:hover {
      box-shadow: 1px 1px 8px #d8f5e6;
    }
    &--active {
      box-shadow: inset 1px 1px 4px rgb(123, 122, 122);
      background-color: #fff;
    }
  }
}
</style>