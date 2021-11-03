<template>
  <div v-html="html" class="text"></div>
</template>

<script setup>
const { format } = useManiaSyntax()

const html = ref('')

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

<style scoped>
.text {
  @apply control-default text-center p-4 text-3xl w-full min-h-18;
}
</style>
