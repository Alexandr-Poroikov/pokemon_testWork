<template>
    <div class="wrapper">
        <router-view/>
    </div>
  
</template>

<style>
@import "@/assets/css/normalize.css";

#app{
    /* height: 100%; */
    width: 100%;
}
html,
body {
  width: 100%;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
}
*,
*::after,
*::before {
  box-sizing: border-box;
}
.wrapper{
    margin: 0 auto;
    max-width: 1400px;
    height: 100%;
    border-radius: 20px;
    padding: 15px;
    background-color: #d8f5e6;

}


</style>
