<script>
import { links } from "@/common/helpers/_config";

export default {
  name: "MainFooter",
  data() {
    return {
      links,
    };
  },
};
</script>

<template>
  <footer class="footer">
    <div class="container">
      <ul class="navbar-list">
        <li v-for="(link, idx) in links" :key="idx" class="navbar-item">
          <router-link :to="link.url" class="navbar-link">
            {{ link.title }}
          </router-link>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style scoped lang="scss"></style>
