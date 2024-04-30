<template>
    <InputComponent id="id" name="Id" label="Id: " />
    <InputComponent type="codigo" id="Codigo" name="Codigo" label="Codigo: " />
    <InputComponent type="nombre" id="Nombre" name="Nombre" label="Nombre: " />
    <InputComponent type="email" id="Descripcion" name="correo" label="Correo: " />
    <InputComponent type="descripcion" id="Descripcion" name="Descripcion" label="Descripción: " />
    <InputComponent type="estado" id="estado" name="estado" label="Estado: " color />
  </template>
  
  <script setup lang="ts">
  import InputComponent from './InputComponent.vue';
  </script>
  
  <style scoped src="../theme/container.css"></style>
  