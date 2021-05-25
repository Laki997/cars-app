<template>
  <div>
    <br />
    <br />
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
      <router-link :to="`/edit/${car.id}`" tag="button" class="btn btn-primary"
        >Edit</router-link
      >
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
  },
};
</script>

<style scoped></style>
