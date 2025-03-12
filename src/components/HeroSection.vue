<template>
  <section class="hero" id="hero">
    <div class="hero-content">
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  subtitle: string;
}>();
</script>

<style scoped lang="scss">
@import "@/styles/main.scss";
</style>
