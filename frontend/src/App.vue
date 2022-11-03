<template>
  <div id="app" class="font-sans font-extralight">
    <div>
      <div v-show="!auth">
        <sign-up v-on:changeAuth="changeAuth($event)"></sign-up>
      </div>
      <div v-show="auth">
        <nav-bar
          v-bind:show="show"
          v-on:changeAuth="changeAuth($event)"
          @toggleSideMenu="showHideSideMenu($event)"
        />
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
          <!-- <backend-test></backend-test> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import SideBar from "./components/SideMenu.vue";
import Signup from "./components/Signup.vue";

// import backendtestVue from "./components/backendtest.vue";
export default {
  name: "App",
  data() {
    return {
      show: true,
      someId: 0,
      auth: false,
      oldAuth: false,
      cookie: "",
    };
  },
  components: {
    "nav-bar": NavBar,
    "side-menu": SideBar,
    "sign-up": Signup,
    // "backend-test": backendtestVue,
  },
  methods: {
    showHideSideMenu(updatedShow) {
      this.show = !updatedShow;
    },
    changeAuth(val) {
      if (val == true) {
        this.cookie = document.cookie.substring(4, document.cookie.length);
      } else {
        this.cookie = "";
      }
      this.auth = val;
    },
    redire_ct() {
      if (this.$route.path != "/Signup") {
        // this.$router.push("/Signup");
        console.log("here");
        // window.location.href = "http://www.w3schools.com";
      }
    },
  },
  computed: {
    path: {
      get() {
        if (
          this.auth == false &&
          this.$route.path != "/" &&
          this.$route.path != "/Signup"
        ) {
          alert("Log In or Sign Up First from app.vue");

          this.redire_ct();
        }
        return this.$route.path;
      },
    },
  },
  created() {
    this.cookie = document.cookie.substring(4, document.cookie.length);
    if (this.cookie == "") {
      this.auth = false;
    } else {
      this.auth = true;
    }
    console.log(this.path);
  },
};
</script>

<style src="./assets/tailwind.css"></style>
