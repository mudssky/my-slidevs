<template>
  <MeshTemplate :object3d="randomMountain" :controls="true" />
</template>

<script setup lang="ts">
import MeshTemplate from './MeshTemplate.vue'
import randomMountain from './mesh/randomMountain'
</script>
