1. En primera instancia se creo el proyecto mediante los pasos:
   "ionic start quiz1-corte3 blank"

2.Se instalo mediante el framework Vue, una vez esto procedimos a crear la carpeta "componentes" donde creamos los siguientes componentes llamados:

InputComponent.vue donde inicializamos los componentes genericos teniendo el siguiente codigo, donde nos proporciona el "<template>" y definimos las propiedades que utilizaremos.
ButtonComponent.vue donde inicializamos los componentes genericos teniendo el siguiente codigo, donde nos proporciona el "<template>" y definimos las propiedades que utilizaremos.
CheckboxComponent.vue donde inicializamos los componentes genericos teniendo el siguiente codigo, donde nos proporciona el "<template>" y definimos las propiedades que utilizaremos.

3. Una vez hecho lo siguiente mediante la siguiente estructura 
<template>
    <ion-"Llamar el componente que queremos insertar" v-bind="$attrs" "Inserte propiedades" </ion-button>
  </template>
  
  <script lang="ts">
  import { "Propieda que se quiere importar" } from '@ionic/vue';
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    components: { IonButton },
    props: {
      id: {
        type: String,
        required: true
      },
      value: {
        type: String,
        required: true
      },
      "Definir los valores"
    }
  });
  </script>
  
  <style scoped>
    /* Estilo global */
  </style>

4. Definido lo anterior podemos importar los componentes en views principal HomePage.vue de la siguiente manera:
import ButtonComponent from '@/components/ButtonComponent.vue';
import InputComponent from '@/components/InputComponent.vue';
import CheckboxComponent from '@/components/CheckboxComponent.vue';

5. Ya podemos llamar los componentes dentro del HomePage.vue principal y estos son los ejemplos:
   <InputComponent id="Nombre" name="Nombre" label="Nombre: " />
   <ButtonComponent id="save" value="Agregar" fill="outline" color="success"/>
   <CheckboxComponent id="ejemplo" type="ejemplo" color="dark">Check</CheckboxComponent>

6. Ya podemos importar los componentes genericos

