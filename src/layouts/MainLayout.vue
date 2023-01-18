<script setup>
import SideBar from "../components/navigations/SideBar.vue";
import NavBar from "../components/navigations/NavBar.vue";
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
