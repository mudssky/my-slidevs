<template>
  <MeshTemplate :object3d="line" :axes-helper="false" />
</template>

<script setup lang="ts">
import MeshTemplate from './MeshTemplate.vue'
import line from './mesh/line'
</script>
