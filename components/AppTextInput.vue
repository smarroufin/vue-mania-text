<template>
  <input v-model="value" type="text" class="control-default text-center p-4 text-3xl w-full" />
</template>

<script setup lang="ts">
defineProps({
  value: {
    type: String,
    default: null
  }
})
</script>
