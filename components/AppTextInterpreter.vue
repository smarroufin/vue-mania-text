<template>
  <div v-html="html" class="control-default text-center p-4 text-3xl w-full min-h-18"></div>
</template>

<script setup lang="ts">
import { Ref, ref, watch } from 'vue'

const { format } = useManiaSyntax()

const html: Ref<string> = ref('')

const props = defineProps({
  value: {
    type: String,
    default: null
  }
})

watch(
  () => props.value,
  (v) => { html.value = format(v) },
  { immediate: true }
)
</script>
