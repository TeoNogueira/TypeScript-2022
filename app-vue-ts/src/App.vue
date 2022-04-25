<template>
 <div class="app">

    <Count initValue="500"/>
    <CountClass initValue="2"/>
  </div>

</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import Count from '@/components/Count.vue'
import CountClass from '@/components/CountClass.vue'

@Options({
  components: {
    Count, CountClass
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
