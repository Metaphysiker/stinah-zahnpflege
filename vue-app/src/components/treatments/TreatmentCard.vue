<script setup lang="ts">
import { ITreatment } from "@/interfaces/ITreatment";

defineProps({
  treatmentInput: {
    required: true,
    type: Object as () => ITreatment,
  },
});
</script>

<template>
  <v-card>
    <v-card-text>
      <div>{{ treatmentInput.note }}</div>
      <div>{{ treatmentInput.noteForNextTreatment }}</div>
    </v-card-text>
  </v-card>
</template>
