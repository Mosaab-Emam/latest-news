<template>
    <div class="news-box">
        <a :href="item.webUrl" target="_blank" v-text="item.title"></a>
        <p><strong>Published on:</strong> {{ item.pub }}</p>
    </div>
</template>

<script>
export default {
  name: "NewsBox",
  props: { item: { type: Object } }
};
</script>

<style>
.news-box {
  margin: 1rem;
}

.news-box a {
  color: black;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.25rem;
  display: block;
  margin-bottom: 0.5rem;
}

.news-box p {
  color: #444;
  font-style: italic;
}
</style>
