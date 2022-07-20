<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/posts">Posts</router-link>
    <router-link to="/modal">Modal</router-link>
  </nav>
</template>

<style scoped lang="scss">
nav {
  padding: 1rem;
  box-shadow: 0 2px 4px var(--black-shadow);

  a {
    font-weight: bold;
    color: var(--black);
    text-decoration: none;
    letter-spacing: 0.1rem;
    transition: color 0.2s ease-in-out;

    &.router-link-exact-active, &:hover {
      color: var(--vue-green);
    }

    &:not(:last-child) {
      margin-right: 1rem;
    }
  }
}
</style>
