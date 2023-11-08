import { defineStore } from "pinia";

export const useArticles = defineStore('articles', {
  state: () => ({
    articles: [],
  }),
  actions: {
    async fetchArticles() {
      try {
        const { data }: any = await useFetch('https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts');
        if (data.value) {
          this.articles = data.value
        }
      } catch (error) {
        console.log(error);
        
      }
    },
  },
})