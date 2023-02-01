<script setup>
import { useMenuStore } from "../../stores/menu";
import { useAuthStore } from "../../stores/auth";
import { useRouter } from "vue-router";
import { storeToRefs } from "pinia";

const auth = useAuthStore();
const { user } = storeToRefs(auth);
const { signout } = useAuthStore();
const { setSidebar } = useMenuStore();
const router = useRouter();

async function toLogout() {
  await signout();
  router.push({ name: "Login" });
}
</script>

<template>
  <div class="fixed z-30 w-full backdrop-blur-sm h-12 bg-white lg:py-2">
    <div class="px-3 flex items-center justify-between space-x-4 2xl:container">
      <h5 hidden class="text-2xl text-gray-600 font-medium lg:block">
        Dashboard
      </h5>
      <button class="w-8 h-12 lg:hidden" @click="setSidebar">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 my-auto"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div class="flex space-x-4">
        <!-- <button
          aria-label="chat"
          class="w-8 h-8 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 m-auto text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
            />
          </svg>
        </button> -->
        <!-- <button
          aria-label="notification"
          class="w-8 h-8 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 m-auto text-gray-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
            />
          </svg>
        </button> -->
        <button
          aria-label="notification"
          class="px-3 py-1 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200"
          @click="toLogout"
        >
          {{ user && user.userable ? user.userable.name : "Error!" }}
        </button>
      </div>
    </div>
  </div>
</template>
