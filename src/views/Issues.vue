<template>
  <div class="issues">
    <b-button
      v-if="$route.params.type === 'open'"
      v-b-modal.modal-1
      class="issues__modal-button"
      >Add new issue</b-button
    >
    <b-modal id="modal-1" @ok="addNewIssue" title="Add new issue">
      <CustomInput v-model="newIssue.title" label="Title" min="1" />
      <CustomInput
        type="textarea"
        v-model="newIssue.description"
        label="Description"
      />
      <label class="col-form-label">Status</label>
      <b-form-select v-model="newIssue.status" :options="issueStatusOptions" />
    </b-modal>
    <div class="issues__content">
      <template v-for="issue in currentIssues">
        <Issue :issue="issue" :key="issue.title" />
      </template>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { ADD_ISSUE, ISSUES } from "@/store/index.js";
import Issue from "@/components/Issue.vue";
import CustomInput from "@/components/CustomInput.vue";
import { issueStatusOptions } from "@/constants/index.js";

export default {
  name: "Issues",
  components: {
    Issue,
    CustomInput,
  },
  data() {
    return {
      issueStatusOptions,
      newIssue: {
        title: "",
        description: "",
        status: "open",
        trashed: false,
      },
    };
  },
  computed: {
    ...mapState([ISSUES]),
    currentIssues() {
      const { type } = this.$route.params;
      let issues;

      if (type === "open" || type === "done") {
        issues = this.issues.filter(
          (issue) => issue.status === type && !issue.trashed
        );
      }
      if (type === "trashed") {
        issues = this.issues.filter((issue) => issue.trashed);
      }
      return issues;
    },
  },
  methods: {
    addNewIssue() {
      const uniqueIssue = this.issues.every(
        (issue) => issue.title !== this.newIssue.title
      );
      const { title, description } = this.newIssue;

      if (uniqueIssue && title && description) {
        this.$store.dispatch(ADD_ISSUE, this.newIssue);
      } else {
        alert("Fields cannot be blank and issue should be unique by title");
      }

      this.newIssue = {
        title: "",
        description: "",
        status: "open",
        trashed: false,
      };
    },
  },
};
</script>
<style lang="scss">
.issues {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  background: #ccc;
  height: 100%;

  .card {
    margin: 8px;
    border: 3px dashed black;
  }
}

.issues__modal-button {
  margin: 16px auto;
}

.issues__content {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>
