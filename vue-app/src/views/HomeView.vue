<script setup lang="ts">
import HorsesTable from "../components/horses/HorsesTable.vue";
import NewHorse from "../components/horses/NewHorse.vue";
</script>
<template>
  <HorsesTable :horses="[]" />
  <v-container>
    <NewHorse></NewHorse>
  </v-container>
</template>
