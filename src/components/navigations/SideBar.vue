<template>
  <aside
    ref="sidebar"
    class="fixed z-20 h-full top-0 left-0 pt-12 lg:flex flex-shrink-0 flex-col w-64 transition-width duration-100"
    :class="
      menu.sidebar
        ? 'flex bg-white xs:backdrop-blur-sm lg:backdrop-blur-none'
        : 'hidden'
    "
  >
    <div class="mt-6 text-center">
      <img
        src="https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp"
        alt=""
        class="w-20 h-20 m-auto rounded-full object-cover lg:w-28 lg:h-28"
      />
    </div>

    <div class="px-2 space-y-1 mt-8">
      <div class="border-t mx-4"></div>

      <button
        class="px-4 py-2 w-full flex items-center space-x-4 rounded-md text-gray-600 group hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-300"
        @click="toPage('Dashboard')"
      >
        <svg class="-ml-1 h-6 w-6" viewBox="0 0 24 24" fill="none">
          <path
            d="M6 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8ZM6 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-1Z"
            class="fill-current text-cyan-400 dark:fill-slate-600"
          ></path>
          <path
            d="M13 8a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2V8Z"
            class="fill-current text-cyan-200 group-hover:text-cyan-300"
          ></path>
          <path
            d="M13 15a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-1Z"
            class="fill-current group-hover:text-sky-300"
          ></path>
        </svg>
        <span class="-mr-1 font-medium">Dashboard</span>
      </button>

      <button
        class="px-4 py-2 w-full flex items-center space-x-4 rounded-md text-gray-600 group hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-300"
        @click="toPage('Customers')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            class="fill-current text-gray-300 group-hover:text-cyan-300"
            fill-rule="evenodd"
            d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
            clip-rule="evenodd"
          />
          <path
            class="fill-current text-gray-600 group-hover:text-cyan-600"
            d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z"
          />
        </svg>
        <span class="group-hover:text-gray-700">Customers</span>
      </button>

      <button
        class="px-4 py-2 w-full flex items-center space-x-4 rounded-md text-gray-600 group hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-300"
        @click="toPage('Tickets')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            class="fill-current text-gray-600 group-hover:text-cyan-600"
            fill-rule="evenodd"
            d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
            clip-rule="evenodd"
          />
          <path
            class="fill-current text-gray-300 group-hover:text-cyan-300"
            d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"
          />
        </svg>
        <span class="group-hover:text-gray-700">Tickets</span>
      </button>

      <button
        class="px-4 py-2 w-full flex items-center space-x-4 rounded-md text-gray-600 group hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-300"
        @click="toPage('Instruments')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            class="fill-current text-gray-600 group-hover:text-cyan-600"
            d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
          />
          <path
            class="fill-current text-gray-300 group-hover:text-cyan-300"
            d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
          />
        </svg>
        <span class="group-hover:text-gray-700">Instruments</span>
      </button>

      <button
        class="px-4 py-2 w-full flex items-center space-x-4 rounded-md text-gray-600 group hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-300"
        @click="toPage('Users')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            class="fill-current text-gray-300 group-hover:text-cyan-300"
            d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"
          />
          <path
            class="fill-current text-gray-600 group-hover:text-cyan-600"
            fill-rule="evenodd"
            d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z"
            clip-rule="evenodd"
          />
        </svg>
        <span class="group-hover:text-gray-700">Users</span>
      </button>

      <button
        class="px-4 py-2 w-full flex items-center space-x-4 rounded-md text-gray-600 group hover:bg-gradient-to-r hover:from-gray-400 hover:to-gray-300"
        @click="toLogout"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-gray-600 group-hover:text-cyan-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>
        <span class="group-hover:text-gray-900">Logout</span>
      </button>
    </div>
  </aside>
</template>

<script setup>
import { useAuthStore } from "../../stores/auth";
import { useRouter } from "vue-router";
import { defineProps } from "vue";
import { useMenuStore } from "../../stores/menu";

const props = defineProps({
  iw: {
    type: Number,
    default: 0,
  },
});

const menu = useMenuStore();
const { hideSide } = useMenuStore();

const router = useRouter();
const { signout } = useAuthStore();

async function toLogout() {
  await signout();
  hideSide();
  router.push({ name: "Login" });
}

function toPage(val) {
  if (props.iw <= 1024) hideSide();
  router.push({ name: val });
}
</script>
