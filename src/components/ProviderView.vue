<template>
  <div class="provider-view">
    <div class="top-rec">
      <a :href="provider.webUrl" target="_blank" v-text="provider.title"></a>
    </div>
    <div class="main">
      <template v-for="(item, index) in news">
        <NewsBox
          :key="index"
          :item="item"
        />
        <hr :key="`hr_${index}`">
      </template>
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
            const pub = this.getPubDate(result.created_date);
            const webUrl = result.url;
            this.news.push({
              title: result.title,
              pub,
              webUrl
            });
          });
        } else if (this.provider.title === "The Guardian") {
          data.response.results.forEach(result => {
            const pub = this.getPubDate(result.webPublicationDate);
            const webUrl = result.webUrl;
            this.news.push({
              title: result.webTitle,
              pub,
              webUrl
            });
          });
        }
      });
  },
  methods: {
    getPubDate(date) {
      const [, monthNumber, day] = date.split("T")[0].split("-");
      let monthName;
      switch (monthNumber) {
        case "01":
          monthName = "Jan";
          break;
        case "02":
          monthName = "Feb";
          break;
        case "03":
          monthName = "Mar";
          break;
        case "04":
          monthName = "Apr";
          break;
        case "05":
          monthName = "May";
          break;
        case "06":
          monthName = "Jun";
          break;
        case "07":
          monthName = "Jul";
          break;
        case "08":
          monthName = "Aug";
          break;
        case "09":
          monthName = "Sep";
          break;
        case "10":
          monthName = "Oct";
          break;
        case "11":
          monthName = "Nov";
          break;
        case "12":
          monthName = "Dec";
          break;
      }

      return `${monthName} ${day - "0"}`;
    }
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
