<script setup>
import SideBar from "../components/navigations/SideBar.vue";
import NavBar from "../components/navigations/NavBar.vue";
import { authStore } from "../stores/auth";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";

const { loggedIn } = storeToRefs(authStore());
const router = useRouter();
const { me } = authStore();

onMounted(() => {
  if (loggedIn.value) getUser();
  else router.push({ name: "Login" });
});

async function getUser() {
  await me();

  if (!loggedIn.value) router.push({ name: "Login" });
}
</script>

<template>
  <div class="min-h-screen w-full">
    <SideBar />

    <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <NavBar />

      <div class="px-5 pt-6 2xl:container">
        <router-view />
      </div>
    </div>
  </div>
</template>
