<template>
  <div id="app" class="font-sans font-extralight">
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
      <router-view
        class="w-2/3"
        :class="{
          [' w-1/2 pl-12']: !show,
        }"
        v-bind:someId="someId"
      ></router-view>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import SideBar from "./components/SideMenu.vue";

export default {
  name: "App",
  data() {
    return {
      show: true,
      someId: 0,
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
