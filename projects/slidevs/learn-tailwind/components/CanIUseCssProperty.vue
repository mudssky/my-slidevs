<template>
  <CanIUse :src="url" :button-text="'can I use ' + p.cssProperty" />
</template>

<script lang="ts" setup>
import { computed } from 'vue'

interface Props {
  cssProperty: string
}
const p = defineProps<Props>()
const url = computed(() => {
  return 'https://caniuse.com/mdn-css_properties_' + p.cssProperty
})
</script>

<style lang="scss"></style>
