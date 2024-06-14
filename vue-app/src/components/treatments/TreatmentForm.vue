<script setup lang="ts">
import { ITreatment } from "@/interfaces/ITreatment";
const treatmentToBeEdited = defineModel({
  required: true,
  type: Object as () => ITreatment,
});
</script>
<template>
  {{ treatmentToBeEdited.horseId }}
  <v-textarea
    label="Notiz"
    v-model="treatmentToBeEdited.note"
    variant="outlined"
  ></v-textarea>
</template>
