<template>
  <div class="content flex flex-col">
    <AppTextInterpreter :value="value" />
    <AppTextInput :value="value" @input="value = $event.target.value" class="my-6" />
    <div v-if="preconfigs.length" class="flex flex-wrap justify-center gap-2">
      <button v-for="preconfig of preconfigs" :key="preconfig.name" @click="value = preconfig.value" class="button-default">
        {{ preconfig.name }}
      </button>
    </div>
  </div>
</template>

<script setup>
const layout = 'default'

const value = ref('$F00Te$ixt$gMa$00fn$oia$$.$zapp')

const preconfigs = [
  {
    name: 'Colored text',
    value: '$00FJean$FFFPie$F00rre'
  }, {
    name: 'Bold',
    value: 'Default$oBold'
  }, {
    name: 'Italic',
    value: 'Default$iItalic'
  }, {
    name: 'Capitals',
    value: 'lowercase$tuppercase'
  }, {
    name: '$ Character',
    value: '$$Jean-Pierre$$'
  }, {
    name: 'Wide spacing',
    value: 'TODO'
  }, {
    name: 'Narrow spacing',
    value: 'TODO'
  }, {
    name: 'Reset all',
    value: '$oBold$iItalic$zDefault'
  }, {
    name: 'Reset color',
    value: '$F00Red$gDefault'
  }
]
</script>
