<template>
  <div class="home-page">
    <div class="home-content">
      <h1>Welcome to zhuanshiluobo</h1>
        <br>
      <h2>古法编程-匠心打造</h2>
    </div>
  </div>
  <nav class="nav-links">
        <router-link to="/demo">游城拓荒Demo</router-link>
  </nav>
</template>

<style scoped>

.home-page{
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.home-content{
  padding: 3rem 0;
  text-align: center;
}

.nav-links a {
  color: var(--color-text);
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-links a:hover,
.nav-links a.router-link-exact-active {
  color: rgb(203, 127, 3);
}

</style>
