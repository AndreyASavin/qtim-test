<template>
  <div class="section">
    <div class="container">
      <div class="row t-8">
        <div class="col-12">
          <h1>Articles</h1>
        </div>
      </div>
      <div class="row">
        <div class="cards-container">
          <router-link :to="`/${item.id}`" class="card-container"
          v-for="item in articlesAtPage" :key="item.id">
            <v-card
            :image="item.image"
            :description="item.preview"
            >
            </v-card>
          </router-link>
        </div>
      </div>
      <div class="row b-8">
        <div class="col-12">
          <div class="pages">
            <div class="page arrow__left"
            v-show="data.activePage > 3"
            @click="previous">
              <img src="/images/arrow.svg" alt="">
            </div>
            <div
              class="page"
              v-for="page in visiblePages" :key="page"
              @click="setActivePage(Number(page))"
              :class="{'page-active': page===data.activePage}"
              >{{page}}</div>
            <div class="page arrow__right"
            v-show="data.activePage < (pages - 2)"
            @click="next">
              <img src="/images/arrow.svg" alt="">
            </div>
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
};
function previous() {
  if(data.activePage > 1) {
    data.activePage -= 1;
  }
};
function next() {
  if(data.activePage < pages.value) {
    data.activePage += 1;
  }
};
const articlesAtPage = computed(() => {
  return articles.value.slice(
    data.onePageCount * (data.activePage - 1), 
    data.onePageCount * (data.activePage - 1) + data.onePageCount)
});
const pagesArr = computed(() => {
  const arr = [];
  for (let i = 1; i <= pages.value; i++) {
    arr.push(i)
  }
  return arr;
});
const visiblePages = computed(() => {
  if (data.activePage < pages.value - 2 && data.activePage > 2) {
    return pagesArr.value.slice(data.activePage-3, data.activePage+2)
  } else if (data.activePage <= 2) {
    return pagesArr.value.slice(0, 5)
  } else {
    return pagesArr.value.slice(pages.value-5, pages.value)
  }
});
</script>

<style lang="scss" scoped>

</style>