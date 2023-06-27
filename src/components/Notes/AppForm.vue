<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import TagsList from '../Tags/TagsList.vue';

const store = useStore();
const storeTags = computed(() => store.getters.getTags);
const noteText = ref("");
const tags = ref([]);

const getTags = computed(() => {
  return storeTags.value.map(item => {
    return {
      name: item,
      isActive: false
    }
  })
});

tags.value = getTags.value;

const activeTagFilter = computed(() => {
  return tags.value.filter((item) => item.isActive).map((item) => item.name);
});

const onSubmit = () => {
  store.dispatch("setNotes", {
    noteText: noteText.value,
    tags: activeTagFilter.value
  });
  noteText.value = "";
  tags.value.map((item) => item.isActive = false);
};

const onFilterTag = (tag) => {
  tags.value.find((item) => {
    if (item === tag) {
      item.isActive = !item.isActive;
    }
  });
};
</script>

<template>
  <form class="notes-form" @submit.prevent="onSubmit">
    <textarea v-model="noteText" placeholder="Type ur text" required></textarea>
    <tags-list :items="tags" @on-tag-click="onFilterTag" />
    <button class="btn btnPrimary" type="submit">Add you note</button>
  </form>
</template>

<style scoped lang="scss">
.notes-form {
  display: flex;
  max-width: 600px;
  flex-direction: column;
  margin: 0 auto;
}
</style>