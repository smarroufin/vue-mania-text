<template>
  <div class="bg-primary min-h-screen relative">
    <header class="bg-primary border-b border-white p-4 text-3xl text-white sticky top-0">TextMania</header>

    <div class="content flex flex-col">
      <AppTextInterpreter :value="value" />
      <AppTextInput :value="value" @input="value = $event.target.value" class="my-6" />
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

<script setup>
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
