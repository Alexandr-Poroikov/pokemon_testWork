<template>
  <div class="pokemon">
    <div class="pokemon__image">
      <img
        :src="'https://img.pokemondb.net/artwork/' + onePost.name + '.jpg'"
        alt=""
      />
    </div>
    <div class="pokemon__info">
      <h2 class="pokemon__name">
        Name: <span>{{ onePost.name }}</span>
      </h2>
    </div>
    <div class="pokemon__button">
      <my-button :onePost="onePost" @click="this.$router.push(`/${onePost.id}`)"
        >Open</my-button
      >
    </div>
  </div>
</template>
<script>
export default {
  props: {
    onePost: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.pokemon {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
    @media(max-width: 576px){
        display: block;
        text-align: center;
        padding: 5px;
    }
  &__image {
    min-width: 150px;
    height: 100px;
    overflow: hidden;
    & img {
      display: block;
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
  &__info {
    flex: 1 1 auto;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 6px;
  }
  &__name span {
    font-size: 32px;
    font-weight: 700;
    color: #a80909c9;
  }

  &__button {
    flex: 0 0 200px;
    text-align: center;
    @media(max-width: 576px){
        flex: 0 0 auto;
        padding: 5px;
    }
  }
}
</style>