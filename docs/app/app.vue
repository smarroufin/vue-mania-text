<script setup lang="ts">
import { ManiaText } from '../../dist'

const value = ref('$00fVue$g$oMania$z$c00$iText')

const preconfigs = [
  { name: 'Colors', value: '$00fJean$000Pie$f00rre' },
  { name: 'Bold', value: 'Default$oBold' },
  { name: 'Italic', value: 'Default$iItalic' },
  { name: 'Capitals', value: 'lowercase$tuppercase' },
  { name: 'Shadow', value: '$sShadowed text' },
  { name: '$ Character', value: '$$Jean-Pierre$$' },
  { name: 'Spacing', value: 'Normal$wWide$nNarrow' },
  { name: 'Reset all', value: '$oBold$iItalic$zDefault' },
  { name: 'Reset color', value: '$f00Red$gDefault' },
]
</script>

<template>
  <div class="bg-primary text-black min-h-screen relative">
    <header class="bg-black text-white p-4 text-3xl sticky top-0">
      VueManiaText
    </header>

    <div class="w-full max-w-screen-sm px-4 py-16 mx-auto flex flex-col">
      <ManiaText
        :value="value"
        class="control-default text-center p-4 text-3xl w-full min-h-18"
      />
      <input
        v-model="value"
        type="text"
        class="control-default text-center p-4 text-3xl w-full my-6"
        aria-label="mania text input"
      >
      <div
        v-if="preconfigs.length"
        class="flex flex-wrap justify-center gap-2"
      >
        <button
          v-for="preconfig of preconfigs"
          :key="preconfig.name"
          class="control-default px-2 py-1 text-xl"
          @click="value = preconfig.value"
        >
          {{ preconfig.name }}
        </button>
      </div>

      <span class="mt-16 text-lg text-center">
        For development purpose, please visit
        <NuxtLink
          href="https://www.npmjs.com/package/vue-mania-text"
          target="_blank"
          class="underline"
        >VueManiaText</NuxtLink>
        on npmjs.org.
      </span>
    </div>
  </div>
</template>

<style>
.control-default {
  @apply border-2 border-black rounded-tl-xl rounded-br-xl bg-primary text-black;
  transform: skew(-8deg);
}
</style>
