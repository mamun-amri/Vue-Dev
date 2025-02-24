<script setup></script>

<template>
  <div>
    <ul>
      <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/login">Login</RouterLink></li>
    </ul>
    <RouterView />
  </div>
</template>

<style scoped></style>
