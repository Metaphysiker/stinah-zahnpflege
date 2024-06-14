<script setup lang="ts">
import HorseForm from "./HorseForm.vue";
import { Ref, inject, ref } from "vue";
import { AxiosStatic } from "axios";
import { ITreatment } from "@/interfaces/ITreatment";
import { Treatment } from "@/classes/Treatment";
import { TreatmentService } from "@/services/TreatmentService";
const emit = defineEmits(["created"]);
const axios: AxiosStatic | undefined = inject("axios");
const treatmentService = new TreatmentService(axios);
const newTreatment: Ref<ITreatment> = ref(new Treatment());
const create = () => {
  treatmentService.create(newTreatment.value).then(() => {
    emit("created");
  });
};
</script>
<template>
  <v-card-title>Neue Behandlung </v-card-title>
  <v-card-text>
    <HorseForm v-model="newTreatment"></HorseForm>
    <v-btn @click="create()">Speichern</v-btn>
  </v-card-text>
</template>
