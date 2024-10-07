<script setup lang="ts">
import { computed } from 'vue'
import useManiaText from '../composables/useManiaText'

const { format } = useManiaText()

const props = defineProps({
  value: {
    type: String,
    default: ''
  }
})

const html = computed(() => {
  const { html } = format(props.value ?? '')
  return html
})
</script>

<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <span v-html="html" />
</template>
