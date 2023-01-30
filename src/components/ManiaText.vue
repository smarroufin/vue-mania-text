<script setup lang="ts">
import useManiaSyntax from '../composables/useManiaSyntax'

const { format } = useManiaSyntax()

const props = defineProps({
  value: {
    type: String,
    default: ''
  }
})

const html = computed(() => format(props.value ?? ''))
</script>

<template>
  <span v-html="html" />
</template>
