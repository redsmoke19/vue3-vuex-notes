<script>
import { links } from "@/common/helpers/_config";

export default {
  name: "MainHeader",
  data() {
    return {
      links,
    };
  },
};
</script>

<template>
  <header class="navbar">
    <div class="container">
      <div class="navbar-content">
        <router-link to="/">Notes</router-link>
        <ul class="navbar-list">
          <li v-for="link in links" :key="link.alias" class="navbar-item">
            <router-link class="navbar-link" :to="link.url">{{
              link.title
            }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss"></style>
