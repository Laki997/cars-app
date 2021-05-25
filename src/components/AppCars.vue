<template>
  <div>
    <br />
    <br />
    <ul v-for="(car, index) in cars" :key="index">
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
      <button class="btn btn-danger" @click="deleteCar(index)">
        Delete
      </button>
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

  methods: {
    deleteCar(index) {
      CarService.delete(index);
      console.log(index);
      this.cars.splice(index, 1);
      console.log(this.cars);
    },
  },

  async created() {
    this.cars = await CarService.getAll();
  },
};
</script>

<style scoped></style>
