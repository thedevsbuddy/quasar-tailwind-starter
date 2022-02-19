
<template>
  <q-layout view="lHh Lpr lFf">
    <q-page>
      <div class="container px-3 py-2 mx-auto">sadsa</div>
    </q-page>
  </q-layout>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();

onMounted(() => {
  // $q.loading.show({
  //   message: "Loading...",
  // });
});
</script>
