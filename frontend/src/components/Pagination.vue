<template>
  <div class="flex">
    <div v-if="totalPages() > 0" class="pagination-wrapper justify-end">
      <span
        v-if="showPreviousLink()"
        class="pagination-btn"
        v-on:click="updatePage(currentPage - 1)"
      >
        &lt;
      </span>
      {{ currentPage + 1 }} of {{ totalPages() }}
      <span
        v-if="showNextLink()"
        class="pagination-btn"
        v-on:click="updatePage(currentPage + 1)"
      >
        >
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
