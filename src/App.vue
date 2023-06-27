<script setup>
import DefaultHeader from "@/layouts/DefaultHeader.vue";
import DefaultFooter from "./layouts/DefaultFooter.vue";
import { onMounted } from "vue"
import { RouterView } from "vue-router";

onMounted(() => (document.title = "Приложение Заметки"));
</script>

<template>
  <div class="wrapper">
    <default-header />
    <div class="wrapper-content">
      <router-view />
    </div>
    <default-footer />
  </div>
</template>
