<template>
  <div id="app" class="app">
    <pkt-header />
    <div class="pkt-main">
      <HelloWorld />
    </div>
    <pkt-footer-simple :links="links" />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
export default {
  components: {
    HelloWorld,
  },
  data() {
    return {
      links: [
        {
          text: 'Testlenke',
          href: 'https://www.example.com',
          external: 'true',
          openInNewTab: 'true',
        },
        { text: 'Testlenke 2', href: '#' },
      ],
    };
  },
};
</script>

<style lang="scss">
@import './assets/main.scss';

#app {
  font-family: 'Oslo sans', arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--color-black);
}
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.pkt-main {
  flex-grow: 1;
}
</style>
