<template>
  <div id="app">
    <nav-bar v-bind:show="show" @toggleSideMenu="showHideSideMenu($event)" />
    <div class="flex">
      <!-- <side-menu
        :class="{
          ['w-1/3 ,m-0 , transition ease-linear delay-700']: show,
          ['invisible w-1/4']: !show,
        }"
        v-bind:show="show"
      /> -->
      <component
        :class="{
          ['w-1/3 ,m-0 , transition ease-linear delay-700']: show,
          ['invisible w-1/4']: !show,
        }"
        v-bind:path="path"
        v-bind:show="show"
        :is="'side-menu'"
      ></component>
      <router-view class="w-2/3"></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import SideBar from "./components/sideMenu.vue";

export default {
  name: "App",
  data() {
    return {
      show: true,
    };
  },
  components: {
    "nav-bar": NavBar,
    "side-menu": SideBar,
  },
  methods: {
    showHideSideMenu(updatedShow) {
      this.show = !updatedShow;
    },
  },
  computed: {
    path: {
      get() {
        return this.$route.path;
      },
    },
  },
};
</script>

<style src="./assets/tailwind.css"></style>
