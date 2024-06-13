<script setup lang="ts">
import { IHorse } from "../../interfaces/IHorse";
import { HorseHelper } from "../../helpers/HorseHelper";
import DateSelecter from "@/dates/DateSelecter.vue";
const horseHelper = new HorseHelper();
const horseToBeEdited = defineModel({
  required: true,
  type: Object as () => IHorse,
});
const numberOfWeeksUntilNextBeschlagenChanged = () => {
  if (horseToBeEdited.value) {
    horseHelper.calculateAndSetNextTimeBeschlagen(horseToBeEdited.value);
  }
};
</script>
<template>
  <v-text-field
    label="Name"
    v-model="horseToBeEdited.name"
    variant="underlined"
  ></v-text-field>
  <DateSelecter
    label="Letzter Beschlag"
    v-model="horseToBeEdited.lastTimeTreated"
  />
  <v-text-field
    label="Hufpflegerhythmus in Wochen"
    v-model="horseToBeEdited.numberOfWeeksUntilNextTreatment"
    variant="underlined"
    type="number"
    :change="numberOfWeeksUntilNextBeschlagenChanged()"
  ></v-text-field>
  <div class="my-2">Nächste Mal beschlagen am:</div>
</template>
