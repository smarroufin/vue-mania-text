<template>
  <input v-model="value" type="text" />
</template>

<script setup>
const props = defineProps({
  value: {
      type: String,
      default: null
    }
})
</script>

<style scoped>
input {
  @apply control-default text-center p-4 text-3xl w-full;
}
</style>
