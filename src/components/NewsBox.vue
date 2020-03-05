<template>
    <div class="news-box">
        <a href="" v-text="title"></a>
    </div>
</template>

<script>
export default {
  name: "NewsBox",
  props: { title: { type: String } }
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
  font-size: 1.5rem;
}
</style>
