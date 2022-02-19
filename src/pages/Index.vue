
<template>
  <q-page class="bg-slate-100">
    <div class="container px-3 py-2 mx-auto space-y-3">
      <figure
        class="md:flex shadow bg-white rounded px-3 py-2"
        v-for="(todo, index) in todos"
        :key="index"
        @click="$emit('test', { message: 'This message is from event' })"
      >
        <div class="space-y-4">
          <blockquote>
            <p class="text-sm font-medium text-slate-700">“{{ todo.title }}”</p>
          </blockquote>
        </div>
      </figure>
    </div>
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

const getTodos = async () => {
  $q.loading.show();
  await $axios.get("/todos").then((res) => {
    Todo.insert({
      data: res.data,
    });
    $q.loading.hide();
  });
};

onMounted(() => {
  getTodos();
});
</script>
