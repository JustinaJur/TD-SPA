<template>
  <b-card
    class="issue"
    :title="issue.title"
    :bg-variant="cardColor"
    text-variant="white"
  >
    <b-button
      variant="info"
      class="issue__edit"
      @click="isBeingEdited ? updateIssue() : (isBeingEdited = true)"
    >
      {{ isBeingEdited ? "update" : "edit" }}
    </b-button>
    <b-card-text class="issue__description" v-if="!isBeingEdited">
      {{ issue.description }}
    </b-card-text>
    <b-card-text v-else>
      <CustomInput
        type="textarea"
        v-model="currentIssue.description"
        label="Description"
      />
    </b-card-text>
    <div class="issue__status">
      <label class="col-form-label">Issue Status</label>
      <b-form-select
        class="issue__select"
        v-model="currentIssue.status"
        :options="issueStatusOptions"
        @change="updateIssue"
      />
      <b-form-checkbox
        v-model="currentIssue.trashed"
        button
        @change="updateIssue"
      >
        {{ $route.params.type === "trashed" ? "Restore" : "Trash" }}
      </b-form-checkbox>
    </div>
  </b-card>
</template>
<script>
import { mapState } from "vuex";
import { UPDATE_ISSUE, ISSUES } from "@/store/index.js";
import CustomInput from "@/components/CustomInput.vue";
import { issueStatusOptions } from "@/constants/index.js";
export default {
  name: "Issue",
  components: {
    CustomInput,
  },
  props: {
    issue: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
      currentIssue: {
        title: this.issue.title,
        description: this.issue.description,
        status: this.issue.status,
        trashed: this.issue.trashed,
      },
      isBeingEdited: false,
      issueStatusOptions,
    };
  },
  computed: {
    ...mapState([ISSUES]),
    cardColor() {
      const { type } = this.$route.params;
      if (type === "open") {
        return "warning";
      }
      if (type === "done") {
        return "success";
      }
      return "danger";
    },
  },
  methods: {
    updateIssue() {
      this.$store.dispatch(UPDATE_ISSUE, this.currentIssue);
      this.isBeingEdited = false;
    },
  },
};
</script>
<style lang="scss" scoped>
.issue {
  display: grid;
  width: 300px;
}

.issue__description {
  display: flex;
  justify-content: center;
  min-height: 70px;
  color: black;
}

.issue__edit {
  position: absolute;
  top: 8px;
  right: 8px;
}

.issue__status {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.issue__select {
  margin-bottom: 8px;
}
</style>
