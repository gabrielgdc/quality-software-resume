<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Title from '@/components/Title.vue'
</script>

<template>
  <header>
    <img alt="Quality Logo" class="logo" src="@/assets/logo.webp" width="125" height="125" />

    <div class="wrapper">
      <Title msg="Este é um resumo da matéria de qualidade de software!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/introduction">Introdução</RouterLink>
        <RouterLink to="/tests">Verificação, validação e testes</RouterLink>
        <RouterLink to="/git">Gestão da configuração</RouterLink>
        <RouterLink to="/cmmi">CMMI</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView v-slot="{ Component }">
    <transition name="route" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </RouterView>
</template>

<style>
@import '@/assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  overflow: hidden;
  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 16px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: flex;
    padding: 0 2rem;
    max-height: 30vw;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}


/* route transitions */
.router-enter-from {
  opacity: 0;
  transform: translateX(100px);
}
.route-enter-active {
  transition: ass 0.3s ease-out;
}
.route-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.route-leave-active {
  transition: all 0.3s ease-in;
}
</style>
