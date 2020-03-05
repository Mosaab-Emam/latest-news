<template>
    <div class="news">
        <div class="container">
            <ProviderView
                v-for="(provider, index) in getSelectedProviders"
                :key="index"
                :provider="provider"
            />
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProviderView from "@/components/ProviderView";

export default {
  name: "News",
  components: {
    ProviderView
  },
  computed: mapGetters(["getSelectedProviders"])
};
</script>

<style scoped>
.news .container {
  display: flex;
}
</style>
