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
      <button class="btn btn-danger" @click="deleteCar(car.id)">
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
    deleteCar(id) {
      CarService.delete(id);

      this.$router.push({ name: "cars" });
    },
  },

  async created() {
    this.cars = await CarService.getAll();
  },
};
</script>

<style scoped></style>
