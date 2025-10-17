<script setup>

import { RouterView } from 'vue-router';
import Navbar from './components/Navbar.vue';
import Toolbar from './components/Toolbar.vue';

</script>

<template>
  <v-app>
    <Navbar />
    <Toolbar />
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>
