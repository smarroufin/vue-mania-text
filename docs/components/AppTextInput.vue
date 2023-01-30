<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: String,
    default: null
  }
})

const emit = defineEmits(['update:modelValue'])

const modelValue = computed({
  get () {
    return props.modelValue
  },
  set (value) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <input v-model="modelValue" type="text" class="control-default text-center p-4 text-3xl w-full" />
</template>
