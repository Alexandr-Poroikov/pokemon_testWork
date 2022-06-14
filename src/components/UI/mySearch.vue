<template>
  <input
    type="text"
    class="search"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    placeholder="search by name..."
  />
</template>

<script>
export default {
  name: "my-search",
  props: {
    modelValue: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  border: 1px solid black;
  padding: 5px;
  border-radius: 6px;
  &:focus {
    outline: none;
    box-shadow: 1px 1px 4px #0e0e0e;
  }
}
</style>