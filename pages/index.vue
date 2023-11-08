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
          v-for="item in articlesAtPage" :key="item.id">
            <v-card
            :image="item.image"
            :description="item.description"
            >
            </v-card>
            {{item.id}}
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-6">
          <div class="pages">
            <div
              class="page"
              v-for="page in pages" :key="page"
              @click="setActivePage(Number(page))"
              :class="{'page-active': page===data.activePage}"
              >{{page}}</div>
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
const { articles, pages } = storeToRefs(store);
await fetchArticles();
const data = reactive({
  activePage: 1,
  onePageCount: 8,
});
function setActivePage(value: number) {
  data.activePage = value;
}
const articlesAtPage = computed(() => {
  return articles.value.slice(
    data.onePageCount * (data.activePage - 1), 
    data.onePageCount * (data.activePage - 1) + 8)
})
</script>

<style lang="scss" scoped>

</style>