<template>
  <div v-html="html" class="control-default text-center p-4 text-3xl w-full min-h-18"></div>
</template>

<script setup lang="ts">
const { format } = useManiaSyntax()

const html = ref<string>('')

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
