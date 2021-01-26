<template>
  <div class="home">
    <router-link to="/issues/open">Check out open issues</router-link>
  </div>
</template>
<script>
export default {
  name: "Home",
};
</script>
<style lang="scss" scoped>
.home {
  margin-top: 50px;

  a {
    margin-top: 100px;
    color: #2c3e50;
    font-weight: bold;
    padding: 16px 20px;
    border: 3px dashed #2c3e50;
  }
}
</style>
