<template>
  <q-layout view="lHh Lpr lFf" class="antialias">
    <q-header
      class="bg-white text-slate-600"
      :reveal="$q.screen.lt.md"
      :reveal-offset="0"
    >
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          v-if="$route.name == 'home'"
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
        <q-btn
          flat
          dense
          round
          v-else
          icon="arrow_back"
          aria-label="Back"
          @click="$router.back()"
        />
        <q-toolbar-title v-if="$route.meta.title" class="text-xl font-semibold">
          {{ $route.meta.title }}
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above>
      <section
        class="
          h-36
          flex
          items-center
          z-10
          bg-cover bg-center
          sticky
          top-0
          relative
        "
        style="
          background-image: url(https://media.istockphoto.com/photos/abstract-digital-futuristic-eye-picture-id1322220448?b=1&k=20&m=1322220448&s=170667a&w=0&h=eg3g8R3v8RMZdw8zy9ivjNSZUMvtHJoTYNIOffGrBC0=);
        "
      >
        <div class="h-36 w-full bg-black/60 inset-0 absolute z-0"></div>
        <div class="flex w-full px-4 py-8 items-center space-x-4 z-10">
          <div>
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt="Avatar"
              class="w-14 h-14 object-cover rounded-full"
            />
          </div>
          <div class="flex-1">
            <span
              class="text-slate-100 text-2xl block font-bold leading-normal"
            >
              Sarah Jonas
            </span>
            <span class="text-slate-100 block leading-none">
              Senior Developer
            </span>
          </div>
        </div>
      </section>
      <q-list>
        <q-item v-for="i in 20" :key="i">
          <li>Item{{ i }}</li>
        </q-item>
        <!-- <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        /> -->
      </q-list>
    </q-drawer>

    <q-page-container class="bg-slate-100">
      <router-view />
    </q-page-container>
    <q-footer
      class="bg-white shadow text-slate-600"
      :reveal="$q.screen.lt.md"
      reveal-offset="0"
    >
      <div class="flex justify-between px-4 py-3">
        <q-btn
          flat
          class="p-2 rounded-full"
          v-for="(link, index) in footerLinks"
          @click="handleFooterLinkClick(index)"
          :key="index"
          no-caps
        >
          <div
            class="flex items-center justify-center"
            :class="{
              'bg-primary px-3 py-2 rounded-full text-white space-x-1':
                link.active,
            }"
          >
            <q-icon
              :name="link.icon"
              class="text-lg"
              :class="link.size ?? ''"
            />
            <span class="text-[10px] leading-none" v-show="link.active">{{
              link.title
            }}</span>
          </div>
        </q-btn>
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const footerLinks = ref([
  {
    title: "Dashboard",
    icon: "dashboard",
    url: "/dashboard",
    active: route.name === "dashboard",
  },
  {
    title: "Scheduled",
    icon: "timer",
    url: "https://quasar.dev",
    active: route.name === "scheduled",
  },
  {
    title: "Add",
    icon: "add",
    size: "text-4xl",
    url: "https://quasar.dev",
    active: route.name === "add-new",
  },
  {
    title: "History",
    icon: "history",
    url: "https://quasar.dev",
    active: route.name === "history",
  },
  {
    title: "Account",
    icon: "person",
    url: "https://quasar.dev",
    active: route.name === "account",
  },
]);

const leftDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};

const handleFooterLinkClick = (i) => {
  footerLinks.value.forEach((e) => (e.active = false));
  var link = footerLinks.value.find((a, index) => index == i);
  router.push(link.url);
};
</script>

