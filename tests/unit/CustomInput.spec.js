import { expect } from "chai";
import { shallowMount } from "@vue/test-utils";
import CustomInput from "@/components/CustomInput.vue";

describe("CustomInput.vue", () => {
  it("renders entered value", async () => {
    const wrapper = shallowMount(CustomInput);

    const textInput = wrapper.find("input");
    await textInput.setValue("test value");

    expect(wrapper.find("input").element.value).to.equal("test value");
  });
});
