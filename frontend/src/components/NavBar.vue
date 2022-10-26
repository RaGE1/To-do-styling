<template>
  <div class="h-11 bg-bannercolor justify-between">
    <nav
      class="flex fixed w-full items-center justify-between px-6 h-11 bg-bannercolor text-gray-700 border-b border-gray-200 z-10"
    >
      <div>
        <ul class="fill-white flex justify-between pl-12 pt-2 w-40">
          <li class="px-1">
            <button @click="toggleSideMenu">
              <svg
                class="hover:bg-bannerfaded transistion ease-in duration-200 rounded"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                viewBox="0 0 48 48"
              >
                <path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z" />
              </svg>
            </button>
          </li>
          <li class="px-1">
            <router-link to="/inbox" exact>
              <button>
                <svg
                  class="hover:bg-bannerfaded transistion ease-in duration-200 rounded fill-white"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  width="24"
                  viewBox="0 0 48 48"
                >
                  <path
                    d="M8 42V18L24.1 6 40 18v24H28.3V27.75h-8.65V42Zm3-3h5.65V24.75H31.3V39H37V19.5L24.1 9.75 11 19.5Zm13-14.65Z"
                  />
                </svg>
              </button>
            </router-link>
          </li>
          <li id="search-id" class="px-1 flex static">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              viewBox="0 0 48 48"
              class="absolute"
              id="#searchsvg"
            >
              <path
                d="M39.8 41.95 26.65 28.8q-1.5 1.3-3.5 2.025-2 .725-4.25.725-5.4 0-9.15-3.75T6 18.75q0-5.3 3.75-9.05 3.75-3.75 9.1-3.75 5.3 0 9.025 3.75 3.725 3.75 3.725 9.05 0 2.15-.7 4.15-.7 2-2.1 3.75L42 39.75Zm-20.95-13.4q4.05 0 6.9-2.875Q28.6 22.8 28.6 18.75t-2.85-6.925Q22.9 8.95 18.85 8.95q-4.1 0-6.975 2.875T9 18.75q0 4.05 2.875 6.925t6.975 2.875Z"
              />
            </svg>
            <router-link to="/today">
              <input
                id="input"
                class="w-60 h-6 placeholder:text-white pl-[2rem] bg-bannerfaded hover:bg-white transistion ease-in duration-300"
                type="text"
                @input="onSearch"
                placeholder="Search"
              />
            </router-link>
          </li>
        </ul>
      </div>
      <div>
        <ul class="fill-white flex pt-2 pr-14">
          <li class="px-1">
            <router-link to="/today">
              <svg
                class="hover:bg-bannerfaded transistion ease-in duration-200 rounded fill-white"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                viewBox="0 0 48 48"
              >
                <path d="M22.5 38V25.5H10v-3h12.5V10h3v12.5H38v3H25.5V38Z" />
              </svg>
            </router-link>
          </li>
          <li class="px-1">
            <button>
              <svg
                class="hover:bg-bannerfaded transistion ease-in duration-200 rounded"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                viewBox="0 0 48 48"
              >
                <path
                  d="M24 44q-4.25 0-7.9-1.525-3.65-1.525-6.35-4.225-2.7-2.7-4.225-6.35Q4 28.25 4 24q0-4.2 1.525-7.85Q7.05 12.5 9.75 9.8q2.7-2.7 6.35-4.25Q19.75 4 24 4q3.75 0 7 1.2t5.85 3.3l-2.15 2.15q-2.2-1.75-4.9-2.7Q27.1 7 24 7q-7.25 0-12.125 4.875T7 24q0 7.25 4.875 12.125T24 41q7.25 0 12.125-4.875T41 24q0-1.5-.225-2.925-.225-1.425-.675-2.775l2.3-2.3q.8 1.85 1.2 3.85.4 2 .4 4.15 0 4.25-1.55 7.9-1.55 3.65-4.25 6.35-2.7 2.7-6.35 4.225Q28.2 44 24 44Zm-2.95-10.9-8.25-8.3 2.25-2.25 6 6 20.7-20.7 2.3 2.25Z"
                />
              </svg>
            </button>
          </li>
          <li class="px-1">
            <button>
              <svg
                class="hover:bg-bannerfaded transistion ease-in duration-200 rounded"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                viewBox="0 0 48 48"
              >
                <path
                  d="M24.2 35.65q.8 0 1.35-.55t.55-1.35q0-.8-.55-1.35t-1.35-.55q-.8 0-1.35.55t-.55 1.35q0 .8.55 1.35t1.35.55Zm-1.75-7.3h2.95q0-1.3.325-2.375T27.75 23.5q1.55-1.3 2.2-2.55.65-1.25.65-2.75 0-2.65-1.725-4.25t-4.575-1.6q-2.45 0-4.325 1.225T17.25 16.95l2.65 1q.55-1.4 1.65-2.175 1.1-.775 2.6-.775 1.7 0 2.75.925t1.05 2.375q0 1.1-.65 2.075-.65.975-1.9 2.025-1.5 1.3-2.225 2.575-.725 1.275-.725 3.375ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z"
                />
              </svg>
            </button>
          </li>
          <li class="px-1">
            <button>
              <svg
                class="hover:bg-bannerfaded transistion ease-in duration-200 rounded"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                viewBox="0 0 48 48"
              >
                <path
                  d="M8 38v-3h4.2V19.7q0-4.2 2.475-7.475Q17.15 8.95 21.2 8.1V6.65q0-1.15.825-1.9T24 4q1.15 0 1.975.75.825.75.825 1.9V8.1q4.05.85 6.55 4.125t2.5 7.475V35H40v3Zm16-14.75ZM24 44q-1.6 0-2.8-1.175Q20 41.65 20 40h8q0 1.65-1.175 2.825Q25.65 44 24 44Zm-8.8-9h17.65V19.7q0-3.7-2.55-6.3-2.55-2.6-6.25-2.6t-6.275 2.6Q15.2 16 15.2 19.7Z"
                />
              </svg>
            </button>
          </li>
          <li class="px-1">
            <button>
              <svg
                class="hover:bg-bannerfaded transistion ease-in duration-200 rounded"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                width="24"
                viewBox="0 0 48 48"
              >
                <path
                  d="M8 38v-3h4.2V19.7q0-4.2 2.475-7.475Q17.15 8.95 21.2 8.1V6.65q0-1.15.825-1.9T24 4q1.15 0 1.975.75.825.75.825 1.9V8.1q4.05.85 6.55 4.125t2.5 7.475V35H40v3Zm16-14.75ZM24 44q-1.6 0-2.8-1.175Q20 41.65 20 40h8q0 1.65-1.175 2.825Q25.65 44 24 44Zm-8.8-9h17.65V19.7q0-3.7-2.55-6.3-2.55-2.6-6.25-2.6t-6.275 2.6Q15.2 16 15.2 19.7Z"
                />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { bus } from "../main";
export default {
  name: "NavBar",
  date() {
    return {
      show: false,
      Rawrows: [],
      term: "",
      row: [],
    };
  },
  props: {
    show: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    toggleSideMenu() {
      this.$emit("toggleSideMenu", this.show);
    },
    onSearch(e) {
      this.term = e.target.value;
      bus.$emit("search", this.term);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#input {
}
#search-id:hover #searchsvg {
  background-color: white;
  fill: gray;
}
#search-id:hover #input::placeholder {
  color: gray;
}
</style>
