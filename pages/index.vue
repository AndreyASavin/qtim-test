<template>
  <div class="section">
    <div class="container">
      <div class="row t-8">
        <div class="col-12">
          <h1>Articles</h1>
        </div>
      </div>
      <div class="row b-8">
        <div class="cards-container">
          <div class="card-container"
          v-for="item in articles" :key="item.id">
            <v-card
            :image="item.image"
            :description="item.description"
            >
            </v-card>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useArticles } from '~~/store/articles.js';
const store = useArticles();
const { fetchArticles } = store;
const { articles } = storeToRefs(store);
await fetchArticles();
</script>

<style lang="scss" scoped>

</style>