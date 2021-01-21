<template>
  <div class="issues">
    <div class="issues__nav">
      <div
        v-for="item in navigation"
        :key="item"
        :class="[
          'issues__nav-item',
          {
            _active: item === $route.params.type,
          },
        ]"
        @click="setActivePage(item)"
      >
        <RouterLink :to="`/${$route.name}/${item}`">
          {{ item }}
        </RouterLink>
      </div>
    </div>
    <div v-for="issue in currentIssues" :key="issue.id">
      <Issue :issue="issue" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Issue from "@/components/Issue.vue";

export default {
  name: "Issues",
  components: {
    Issue,
  },
  data() {
    return {
      navigation: ["open", "trashed", "closed"],
      activePage: this.$route.params.type,
    };
  },
  mounted() {
    console.log(this.$route);
  },
  computed: {
    ...mapState(["issues"]),
    currentIssues() {
      const issues = this.issues.filter(
        (issue) => issue.status === this.$route.params.type
      );
      return issues;
    },
  },
  methods: {
    setActivePage(name) {
      this.activePage = name;
    },
  },
};
</script>
<style lang="scss">
.issues {
  font-size: 13px;
  line-height: 20px;
  display: flex;
  margin: 42px 20% 88px 20%;
}

.issues__nav {
  display: flex;
  flex-direction: column;
  margin-right: 22px;
  padding-left: 18px;
  width: 30%;
}

.issues__nav-item {
  font-size: 15px;
  line-height: 18px;
  padding-bottom: 18px;

  &._active {
    a {
      font-weight: bold;
      text-decoration: underline;
      color: red;
    }
  }
}
</style>
