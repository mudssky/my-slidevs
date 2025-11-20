<script setup lang="ts">
import { ref, useSlots } from 'vue'

const slots:any = useSlots()
const activeTab = ref(0)

// 因为不一定是语言，也可能是npm等，所以用单独的属性label作为tab
const p =defineProps<{
  labels:string[]
}>()

</script>
<template>
  <div class="code-group">
    <div class="tabs">
      <button
        v-for="(title, index) in p.labels"
        :key="index"
        :class="['tab', { active: activeTab === index }]"
        @click="activeTab = index"
      >
        {{ title }}
      </button>
    </div>

    <div class="panes">
      <div
        v-for="(_, index) in p.labels"
        :key="index"
        :class="['pane', { active: activeTab === index }]"
      >
        <component :is="slots.default()[index]" />
      </div>
    </div>
  </div>
</template>

<style>
.code-group {
  margin: 1em 0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.1);
}

.tabs {
  background: #f8f8f8;
  padding: 0.4rem 0.4rem 0 0.4rem;
  display: flex;
}

.tab {
  background: none;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  font-size: 0.875em;
  color: #666;
  border-radius: 4px 4px 0 0;
  transition: all 0.2s;
}

.tab:hover {
  color: #2c3e50;
}

.tab.active {
  background: #fff;
  color: #2c3e50;
  font-weight: 500;
}

.panes {
  background: #fff;
}

.pane {
  display: none;
}

.pane.active {
  display: block;
}

.pane pre {
  margin: 0 !important;
  border-radius: 0 !important;
  box-shadow: none !important;
}
</style>
