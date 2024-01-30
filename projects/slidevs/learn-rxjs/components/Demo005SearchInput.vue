<template>
  <div>
    <input
      type="text"
      ref="searchRef"
      class="border-black border-1 rounded-sm"
    />
  </div>
</template>

<script lang="ts" setup>
import {
  Observable,
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
  of,
  pluck,
  switchMap,
} from 'rxjs'
import { onMounted, ref } from 'vue'

const searchRef = ref()

function handleSearch(searchTerm: string) {
  //   console.log({ searchTerm })
  // 这里可以请求返回搜索结果
  return of(searchTerm)
}
onMounted(() => {
  const source$ = fromEvent<KeyboardEvent>(searchRef.value, 'keyup')
  source$
    .pipe(
      map((e: any) => e.target.value), // 获取输入值
      debounceTime(500), // 等待 500ms，如果没有新的输入则继续
      distinctUntilChanged(), // 只有当输入值变化时才继续
      switchMap((searchTerm: string) => handleSearch(searchTerm)), // 执行搜索操作
    )
    .subscribe((data) => {
      console.log({ data })
    })

  //   source$.pipe(map((item: any) => item?.code)).subscribe(console.log)
})
</script>

<style lang="scss"></style>
