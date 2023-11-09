<template>
  <div class="card">
    <div class="card__content">
      <div class="card__image">
        <img :src="props.image" alt="">
      </div>
      <div class="card__description">
        <p class="text-1">
          {{props.description}}
        </p>
      </div>
    </div>
    <div class="card__link">
      <p class="text-1">Read more</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  image: string,
  description: string,
}>();
</script>

<style scoped>

</style>