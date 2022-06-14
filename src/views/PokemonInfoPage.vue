<template>
  <div class="content">
    <div class="aboutPokemon">
      <div class="aboutPokemon-block">
        <div class="aboutPokemon__name">name: <span>{{infoPokemon.name}}</span></div>
        <div class="aboutPokemon__type" > types:
             <span v-for="(type,idx) in typesPokemon" :key="idx">
                 {{type + ' | '}}            
             </span>          
        </div>
        <table class="aboutPokemon__table">
          <thead>
            <tr>
              <th>Hp</th>
              <th>Attack</th>
              <th>Defense</th>
              <th>Speed</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{objAllStats.hp}}</td>
              <td>{{objAllStats.attack}}</td>
              <td>{{objAllStats.defense}}</td>
              <td>{{objAllStats.speed}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {

  computed:{
    ...mapState({
        //имя
        infoPokemon: state => state.infoPokemon.infoPokemon,
        //тип
        typesPokemon: state => state.infoPokemon.typesPokemon,
        //собранные статы
        objAllStats: state => state.infoPokemon.objAllStats
    })
  },
  methods:{
    ...mapActions(['fetchOnePokemon']),
  },
  async mounted(){
    await this.fetchOnePokemon(+this.$route.params.id)
  }
};
</script>


<style lang="scss" scoped>

.content{
    width: 100%;
    min-height: 100%;
    height: 46vh;
}
.aboutPokemon {
  max-width: 600px;
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 20px;
  padding: 20px 15px;
  margin-top: 50vh;
  transform: translateY(-50%);
  &-block{
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    row-gap: 15px;
    & span{
        font-weight: 700;
        font-size: 20px;
        color: #a80909c9;
    }
  }
  &__name span{
    color: #09a855;
  }
  &__table{
    border-collapse: collapse;
    & th,td{
        border: 1px solid gray;
        padding: 10px;
    }
  }
  
}
</style>