<template>
  <div>
    {{ issue.title }}
    {{ issue.description }}
    {{ issue.type }}
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Issue",
  props: {
    issue: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: { ...mapState(["issues"]) },
};
</script>
<style scoped></style>
