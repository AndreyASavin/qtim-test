import { defineStore } from "pinia";

export const useArticles = defineStore('articles', {
  state: () => ({
    articles: [],
    pages: 0
  }),
  actions: {
    async fetchArticles() {
      try {
        const { data }: any = await useFetch('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts');
        if (data.value) {
          this.articles = data.value;
          this.pages = Math.ceil(data.value.length / 8);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
})