<template>
    <ion-checkbox v-bind="$attrs" :type="type" :id="id" :labelPlacement="labelPlacement" :alignment="alignment" :justify="justify" :color="color"></ion-checkbox>
</template>

<script lang="ts">
import { IonCheckbox } from '@ionic/vue';
import { defineComponent } from 'vue';
 

export default defineComponent({
    components: {IonCheckbox},
    props:{
        type: String,
        id: {
        type: String,
        required: true
      },
      labelPlacement:String,
      color:String,
      name: String
    }
});
</script>

<style scoped>
/* Estilos del componente */
/* Estilos globales */
</style>