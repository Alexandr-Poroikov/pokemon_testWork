<template>
    <button class="btn"><slot></slot></button>
</template>

<script>
export default {
    name:'my-button'
}
</script>
<style lang="scss" scoped>
.btn{
    padding: 20px 30px;
    border-radius: 10px;
    font-size: 20px;
    border-color: #fff;
    background-color: #d8f5e6;
    box-shadow: 1px 1px 4px #0e0e0e;
    transition: all 0.2s;
    &:hover{
        box-shadow: 1px 1px 8px #da6767;
    }
    
}
</style>