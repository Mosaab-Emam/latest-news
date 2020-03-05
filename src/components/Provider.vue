<template>
    <div class="provider">
        <input :id="`provider_${index}`" type="checkbox" v-model="selected">
        <label :for="`provider_${index}`" :class="selected && 'selected'" @click="handleSelection">
            <div class="logo">
                <img :src="provider.logoUrl" :alt="`${provider.title}'s Logo`">
            </div>
            <h3 v-text="provider.title"></h3>
        </label>
    </div>
</template>

<script>
import store from "@/store/index.js";

export default {
  name: "Provider",
  props: {
    provider: { type: Object },
    index: { type: Number }
  },
  data() {
    return {
      selected: false
    };
  },
  methods: {
    handleSelection() {
      store.commit("handleSelection", this.provider.title);
    }
  }
};
</script>

<style scoped>
.provider {
  margin-right: 1rem;
}

.provider input {
  display: none;
}

.provider label {
  display: inline-flex;
  align-items: center;
  background: white;
  padding: 1rem;
  cursor: pointer;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
}

.provider label.selected {
  border: 1px solid #aaa;
}

.provider label .logo {
  display: flex;
  align-items: center;
  width: 48px;
  height: 48px;
  padding-right: 1rem;
  margin-right: 1rem;
  border-right: 1px solid #aaa;
}

.provider label .logo img {
  width: 100%;
}
</style>
