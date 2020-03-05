<template>
  <div class="home">
    <div v-if="error" class="alert" v-text="error"></div>
    <div class="container">
      <h1>Get Latest News From <br> All Over The World</h1>
      <h2>Choose a provider (or more) to start:</h2>
      <form @submit.prevent>
        <div class="providers">
          <Provider
            v-for="(provider, index) in getProviders"
            :key="index"
            :index="index"
            :provider="provider"
          />
        </div>
        <button @click="toNews()">Continue</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Provider from "@/components/Provider";

export default {
  name: "Home",
  components: {
    Provider
  },
  data() {
    return {
      error: ""
    };
  },
  methods: {
    toNews() {
      if (this.getSelectedProviders.length) {
        this.$router.push("news");
      } else {
        this.error = "Please select at least one provider to continue";
      }
    }
  },
  computed: mapGetters(["getProviders", "getSelectedProviders"])
};
</script>

<style scoped>
.home {
  margin-top: 120px;
  text-align: center;
}

.home .alert {
  position: absolute;
  top: 0;
  width: 100%;
  background: #d9534f;
  color: white;
  font-size: 1.5rem;
  padding: 0.5rem;
}

.home .container {
  width: 1140px;
  margin: auto;
}

.home h1 {
  font-size: 3rem;
}

.home h2 {
  margin-top: 3rem;
  text-align: left;
  font-size: 2rem;
}

form .providers {
  display: flex;
  margin: 2rem 0;
}

form button {
  padding: 1rem 2rem;
  background: #428bca;
  color: white;
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
}
</style>
