<template>
  <div>
    <ul v-for="car in cars" :key="car.id">
      {{
        car.brand
      }}
    </ul>
  </div>
</template>

<script>
import CarService from "../service/CarService.js";
export default {
  data() {
    return {
      cars: "",
    };
  },

  created() {
    this.cars = CarService.getAll();
  },
};
</script>

<style scoped></style>
