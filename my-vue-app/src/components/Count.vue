
<template>
    <div>
        <h1>Count</h1>
        <h2>{{ vl }}</h2>
        <button @click="setValue(-1)">Dec</button>
        <button @click="setValue(1)">Increase</button>
    </div>
</template>

<script lang="ts">
import App from 'app.vue'


export default App.extend({
props: {

    initValue: {
        type: Number

    }
},
data() {

    return {

        vl: 0
    }
},

methods: {

    setValue(dt: number) {

        this.vl += dt
    }
}

})

</script>


<style></style>