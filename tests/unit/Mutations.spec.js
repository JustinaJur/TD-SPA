import { expect } from "chai";
import { mutations } from "@/store/index.js";

const { addIssue, updateIssue } = mutations;

describe("mutations", () => {
  it("ADD_ISSUE", () => {
    const state = { issues: [] };
    addIssue(state);
    expect(state.issues).to.have.lengthOf(1);
  });

  it("UPDATE_ISSUE", () => {
    const issue = {
      title: "testTitle",
      description: "Description",
      type: "done",
      trashed: false,
    };

    const state = {
      issues: [
        {
          title: "testTitle",
          description: "Description",
          type: "open",
          trashed: false,
        },
      ],
    };
    updateIssue(state, issue);
    expect(state.issues).to.deep.include(issue);
  });
});
