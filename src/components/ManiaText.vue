<script setup lang="ts">
import { computed } from 'vue'
import useManiaText from '../composables/useManiaText'

const { format } = useManiaText()

const props = defineProps({
  value: {
    type: String,
    default: '',
  },
  as: {
    type: String,
    default: 'span',
  },
})

const html = computed(() => {
  const { html } = format(props.value ?? '')
  return html
})
</script>

<!-- eslint-disable vue/no-v-html -->
<!-- eslint-disable vue/no-v-text-v-html-on-component -->
<template>
  <component
    :is="as"
    v-html="html"
  />
</template>
