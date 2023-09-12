<template>
  <e-html lang="en">
    <e-button :href="url">
      View on GitHub
    </e-button>
  </e-html>
</template>
<script lang="ts" setup>
function defineProps<T>() {

}

defineProps<{ url: string }>();
</script>