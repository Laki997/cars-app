<template>
  <div>
    <ul v-for="car in cars" :key="car.id">
      {{
        car.brand
      }}
      {{
        car.year
      }}
      {{
        car.engine
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

  async created() {
    this.cars = await CarService.getAll();
    console.log(this.cars);
  },
};
</script>

<style scoped></style>
