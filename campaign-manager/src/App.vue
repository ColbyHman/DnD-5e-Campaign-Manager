<script setup lang="ts">
import Sidebar from './components/Sidebar.vue';
</script>

<template>
  <div class="app-container">
    <Sidebar />
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<style>
.app-container {
  display: flex;
  height: 100vh;
  margin:0px;
}

.main-content {
  background-color: #666666;
  padding: 16px;
  width:80%;
}
</style>
