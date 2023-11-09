<template>
  <div class="section">
    <div class="container">
      <div class="row t-8">
        <div class="col-12">
          <h1>{{article.title}}</h1>
        </div>
      </div>
      <div class="row t-article-image">
        <div class="col-12">
          <img :src="article.image" alt="" class="article-image">
        </div>
      </div>
      <div class="row t-article-pre b-article-post">
        <div class="col-6">
          <p>About</p>
          <p class="t-article-text">
            {{article.description}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { data }: any = await useFetch(
  `https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${route.params.article}`,
);
const article = data.value
</script>

<style scoped>

</style>