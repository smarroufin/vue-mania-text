<script setup lang="ts">
import { ManiaText } from '../dist'

const value = ref('$F00Te$ixt$gMa$00fn$oia')

const preconfigs = [
  {
    name: 'Colors',
    value: '$00FJean$FFFPie$F00rre',
  },
  {
    name: 'Bold',
    value: 'Default$oBold',
  },
  {
    name: 'Italic',
    value: 'Default$iItalic',
  },
  {
    name: 'Capitals',
    value: 'lowercase$tuppercase',
  },
  {
    name: 'Shadow',
    value: '$sShadowed text',
  },
  {
    name: '$ Character',
    value: '$$Jean-Pierre$$',
  },
  {
    name: 'Spacing',
    value: 'Normal$wWide$nNarrow',
  },
  {
    name: 'Reset all',
    value: '$oBold$iItalic$zDefault',
  },
  {
    name: 'Reset color',
    value: '$F00Red$gDefault',
  },
]
</script>

<template>
  <div class="bg-primary min-h-screen relative">
    <header class="bg-primary border-b border-white p-4 text-3xl text-white sticky top-0">ManiaText</header>

    <div class="w-full max-w-screen-sm px-2 py-6 mx-auto flex flex-col">
      <ManiaText :value="value" class="text-white control-default text-center p-4 text-3xl w-full min-h-18" />
      <AppTextInput v-model="value" class="my-6" />
      <div v-if="preconfigs.length" class="flex flex-wrap justify-center gap-2">
        <button
          v-for="preconfig of preconfigs"
          :key="preconfig.name"
          @click="value = preconfig.value"
          class="button-default"
        >
          {{ preconfig.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.control-default {
  @apply border-2 border-white rounded-tl-xl rounded-br-xl bg-primary-dark text-white;
}
.button-default {
  @apply control-default px-2 py-1 text-xl;
}
</style>
