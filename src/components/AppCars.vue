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
      <button @click="prikaziDialog(index)" class="btn btn-danger">
        Delete
      </button>
      <div>
        <Dialog
          :show="showDialog"
          :cancel="cancel"
          :confirm="confirm"
          :title="title"
          :description="description"
        />
      </div>
    </ul>
  </div>
</template>

<script>
import Dialog from "../components/Dialog.vue";
import CarService from "../service/CarService.js";
export default {
  components: { Dialog },
  data() {
    return {
      cars: "",
      title: "Delete a car?",
      description: "Are you sure you want to delete this car?",
      showDialog: false,
      selectedCar: "",
    };
  },

  methods: {
    deleteCar(index) {
      CarService.delete(index);
      console.log(index);
      this.cars.splice(index, 1);
      console.log(this.cars);
    },

    prikaziDialog(index) {
      this.showDialog = true;
      this.selectedCar = this.cars[index];
    },

    cancel() {
      console.log("Cancel");
      this.showDialog = false;
    },
    confirm() {
      this.showDialog = false;
      this.deleteCar(this.cars.indexOf(this.selectedCar));
    },
  },
  async created() {
    this.cars = await CarService.getAll();
  },
};
</script>

<style scoped></style>
