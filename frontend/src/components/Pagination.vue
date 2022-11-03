<template>
  <div class="flex">
    <div
      v-if="totalPages() > 0"
      class="pagination-wrapper justify-end text-2xl pt-10 flex flex-grow"
    >
      <span
        v-if="showPreviousLink()"
        class="fapagination-btn"
        v-on:click="updatePage(currentPage - 1)"
      >
        <i
          class="fa-solid fa-arrow-left text-bannerfaded cursor-pointer hover:-translate-x-1 duration-150 pr-1 hover:text-bannercolor"
        ></i>
      </span>
      {{ currentPage + 1 }} of {{ totalPages() }}
      <span
        v-if="showNextLink()"
        class="pagination-btn"
        v-on:click="updatePage(currentPage + 1)"
      >
        <i
          class="fa-solid fa-arrow-right text-bannerfaded cursor-pointer hover:translate-x-1 duration-150 pl-1 hover:text-bannercolor"
        ></i>
      </span>
    </div>
  </div>
</template>

<script>
import { bus } from "../main";
export default {
  name: "pagination",
  props: ["tasks", "currentPage", "pageSize"],
  data() {
    return {
      pagecount: 0,
      len: this.tasks.length,
    };
  },
  methods: {
    bool_tasks_len() {
      if (this.tasks) {
        this.len = this.tasks.length;
        return this.tasks.length;
      } else {
        return false;
      }
    },
    updatePage(pageNumber) {
      this.$emit("page:update", pageNumber);
    },
    showPreviousLink() {
      return this.currentPage == 0 ? false : true;
    },
    showNextLink() {
      return this.currentPage == this.totalPages() - 1 ? false : true;
    },
    totalPages() {
      let len = this.tasks.length == this.len ? this.len : this.len;
      return Math.ceil(len / this.pageSize);
    },
  },
  computed: {},
  created() {
    bus.$on("searchingPagination", (data) => {
      this.len = data;
      this.totalPages();
    });
  },
};
</script>

<style></style>
