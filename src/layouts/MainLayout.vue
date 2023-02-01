<script setup>
import SideBar from "../components/navigations/SideBar.vue";
import NavBar from "../components/navigations/NavBar.vue";
import { useAuthStore } from "../stores/auth";
import { useMenuStore } from "../stores/menu";
import { onMounted, ref, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";

const { loggedIn } = storeToRefs(useAuthStore());
const router = useRouter();
const { me } = useAuthStore();
const menu = useMenuStore();
const { setSidebar, hideSide } = useMenuStore();
const ww = ref(0);

ww.value = window.innerWidth;

onMounted(() => {
  window.addEventListener("resize", windowResize);

  if (loggedIn.value) getUser();
  else router.push({ name: "Login" });
});

onBeforeUnmount(() => {
  window.addEventListener("resize", windowResize);
});

async function getUser() {
  me();

  if (!loggedIn.value) router.push({ name: "Login" });
}

function windowResize() {
  let w = document.documentElement.clientWidth;

  if (w < 1024) {
    this.ww = w;
    if (menu.sidebar) setSidebar();
  }

  ww.value = w;
}
</script>

<template>
  <div class="min-h-screen w-full">
    <NavBar />

    <div class="flex overflow-hidden pt-14">
      <SideBar :iw="ww" />
      <div
        class="bg-gray-900 opacity-60 fixed inset-0 z-10 cursor-pointer"
        :class="menu.backdrop ? 'block lg:hidden' : 'hidden'"
        @click="hideSide"
      ></div>
      <div class="min-h-screen w-full relative overflow-auto lg:ml-60">
        <div class="py-5 px-6">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
