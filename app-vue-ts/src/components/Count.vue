
<template>
    <div>
        <h1>Count</h1>
        <h2>{{ valor }}</h2>
        <button @click="setValor(-1)">Dec</button>
        <button @click="setValor(1)">Inc</button>
    </div>
</template> 

<script lang="ts">
import Vue from 'vue'


type Vl = {

    valor: number
}

export default Vue.extend({

props: {
       b        
    initValue: {
        type: Number

    }
},
data() {

    return {

        valor: this.initValue || 0
    }
},

methods: {   
    
    setValue(dt: number) {

        this.valor += dt  
    },
},

})

</script>


<style></style>