<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Modulo</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Modulo</ion-title>
        </ion-toolbar>
      </ion-header>
      <div id="login-container">
        
      
        <div id="description">
          <p>Quiz</p>
        </div>
      
        
        <CrudInputComponent></CrudInputComponent>
        <InputComponent type="ruta" id="ruta" name="ruta" label="Ruta: " />

      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import CrudInputComponent from '@/components/CrudInputComponent.vue';
import InputComponent from '@/components/InputComponent.vue';
</script>

<style scoped>
#login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#cart-image {
  margin-bottom: 20px;
  width: 100px;
}

#description {
  margin-bottom: 20px;
  text-align: center;
}

#description p {
  margin: 0;
  padding: 10px; 
}

#login-form {
  max-width: 300px;
  width: 100%;
}
</style>