<template>
  <div class="provider-view">
    <div class="top-rec">
      <a href="" v-text="provider.title"></a>
    </div>
    <div class="main">
      <NewsBox
        v-for="(item, index) in news"
        :key="index"
        :title="item.title"
      />
    </div>
  </div>
</template>

<script>
import NewsBox from "@/components/NewsBox";

export default {
  name: "ProviderView",
  props: { provider: { type: Object } },
  components: {
    NewsBox
  },
  data() {
    return {
      news: []
    };
  },
  created() {
    fetch(this.provider.api.all)
      .then(response => response.json())
      .then(data => {
        if (this.provider.title === "The New York Times") {
          data.results.forEach(result => {
            this.news.push({ title: result.title });
          });
          console.log(this.news);
        } else if (this.provider.title === "The Guardian") {
          data.response.results.forEach(result => {
            this.news.push({ title: result.webTitle });
          });
          console.log(this.news);
        }
      });
  }
};
</script>

<style>
.provider-view {
  width: 33.333%;
  min-height: 100vh;
  border-right: 1px solid #aaa;
}

.provider-view .top-rec {
  background: #ddd;
  text-align: center;
  padding: 0.5rem;
}

.provider-view .top-rec a {
  color: black;
  font-weight: bold;
  text-decoration: none;
}
</style>
