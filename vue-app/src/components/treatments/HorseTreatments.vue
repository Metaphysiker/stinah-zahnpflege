<script setup lang="ts">
import { ITreatment } from "@/interfaces/ITreatment";
import { Ref, ref } from "vue";
import TreatmentCard from "./TreatmentCard.vue";
const treatments: Ref<ITreatment[]> = ref([]);
</script>

<template>
  <div v-for="treatment of treatments" :key="treatment.id">
    <TreatmentCard :treatmentInput="treatment"></TreatmentCard>
  </div>
</template>
