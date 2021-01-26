import { expect } from "chai";
import { mount } from "@vue/test-utils";
import { BButton } from "bootstrap-vue";
import Vuex from "vuex";
import sinon from "sinon";
import Issue from "@/components/Issue.vue";
import CustomInput from "@/components/CustomInput.vue";

describe("Issue.vue", () => {
  let actions;
  let store;

  beforeEach(() => {
    actions = {
      updateIssue: sinon.stub(),
    };
    store = new Vuex.Store({
      state: {},
      actions,
    });
  });

  it("calls updateIssue method on select value change", () => {
    const wrapper = mount(Issue, {
      store,
      mocks: {
        $route: {
          params: "open",
        },
      },
      stubs: [
        "b-button",
        "b-card-text",
        "b-form-checkbox",
        "b-card",
        "b-form-group",
      ],
    });
    const select = wrapper.find(".issue__select");
    console.log("selec", select);
    select.trigger("change");
    expect(actions.updateIssue.calledOnce).to.equal(true);
  });

  it("renders input after edit button is clicked", () => {
    const wrapper = mount(Issue, {
      mocks: {
        $route: {
          params: "open",
        },
      },
      components: {
        BButton,
      },
      stubs: [
        "b-card-text",
        "b-form-checkbox",
        "b-card",
        "b-form-group",
        "b-form-select",
      ],
    });
    const button = wrapper.find(".issue__edit");
    button.trigger("click");
    expect(wrapper.vm.isBeingEdited).to.be.true;
    expect(wrapper.findComponent(CustomInput));
  });
});
