<script setup>
import AppForm from "@/components/Notes/AppForm.vue";
import AppList from "@/components/Notes/AppList.vue";
import { computed, onMounted, watch } from "vue";
import { useStore } from "vuex";
const store = useStore();
const notes = computed(() => store.getters.getNotes);

onMounted(() => getNotes());

const getNotes = () => {
  const localNotes = localStorage.getItem("notes");
  if (localNotes) {
    store.dispatch("setLocalNotes", JSON.parse(localNotes))
  }
}

watch(notes, (val) => {
  localStorage.setItem("notes", JSON.stringify(val));
},
  { deep: true }
)

</script>

<template>
  <div class="mb-body">
    <app-form />
    <app-list :notes="notes" />
  </div>
</template>
