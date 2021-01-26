<template>
  <div>
    <label class="col-form-label">{{ label }}</label>
    <input
      class="form-control"
      v-if="type === 'text'"
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <textarea
      v-else
      class="form-control"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>
<script>
export default {
  name: "CustomInput",
  props: {
    value: {
      type: String,
    },
    type: {
      type: String,
      default: "text",
    },
    label: {
      type: String,
      default: "",
    },
  },
};
</script>
