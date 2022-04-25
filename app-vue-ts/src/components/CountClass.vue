<template>
    <div>
        <h1>Count Class</h1>
        <h3>{{ value }}</h3>
        <h3>{{ oneOrTwo() }}</h3>
        <h3>{{ oneOrTwoT }}</h3>
        <button @click="setValue(1)">Inc</button>
        <button @click="setValue(-1)">Inc</button>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({})

export default class CountClass extends Vue {
@Prop(Number) private readonly initValue?: Number
    private value: number = this.initValue || 0

    public setValue(dt: number) {

        this.value += dt
    }

    public oneOrTwo():string {

        return this.value % 2 === 0 ? 'NoDoubleStyle' : 'DoubleStyle'
    }

    public get oneOrTwoT():string {

        return this.value % 2 === 0 ? 'NoDoubleStyle' : 'DoubleStyle'
    }
}


</script>
