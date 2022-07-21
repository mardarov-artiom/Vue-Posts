<template>
  <div class="home">
    <h1>Vue 3 Application</h1>
    <h2>Using composition api and composable functions</h2>
    <h3>this application commonly is made for fetching posts from fake API.</h3>
    <h3>posts can be fetched once page is loaded, and also fetching on scroll ( infinite )</h3>
    <h3>This application contains reusable components like buttons</h3>
    <h2>it also has a
      <router-link to="/modal" class="default green">modal component</router-link>
    </h2>
    <h5>Enjoy (:</h5>
  </div>
</template>
<style scoped lang="scss">
  .home {
    text-align: center;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;

    & > * {
      margin-bottom: 1rem;
    }
  }

  h1 {
    font-size: 3rem;
  }
</style>
