<template>
  <div class="todo">
    <div class="todo__navigation">
      <router-link to="/">Home</router-link> |
      <router-link to="/issues/open">Open issues</router-link> |
      <router-link to="/issues/done">Done issues</router-link> |
      <router-link to="/issues/trashed">Trashed issues</router-link>
    </div>
    <router-view />
  </div>
</template>
<style lang="scss">
html {
  background: #ccc;
}

.todo {
  text-align: center;
  color: #2c3e50;
  background: #ccc;
}

.todo__navigation {
  padding: 30px;
  background: #cb750d;

  a {
    font-weight: bold;
    color: #2c3e50;
  }

  .router-link-exact-active {
    color: #42b983;
  }
}
</style>
