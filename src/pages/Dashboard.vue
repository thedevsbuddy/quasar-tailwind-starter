<template>
  <q-page class="p-4">
    <div class="container mx-auto"></div>
  </q-page>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useQuasar } from "quasar";
import Todo from "models/Todo";

const $q = useQuasar();

const todos = computed({
  get: () => Todo.all(),
});

onMounted(() => {
  window.pageTitle = "Dashboard";
  $axios.get("/todos").then((res) => {
    Todo.insert({
      data: res.data,
    });
  });
});
</script>
