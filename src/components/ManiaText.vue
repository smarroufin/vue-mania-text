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

const html = computed(() => format(props.value ?? ''))
</script>

<template>
  <span v-html="html" />
</template>
