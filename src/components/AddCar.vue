<template>
  <div>
    <form>
      <br />
      <br />
      <div class="form-group row">
        <label for="inputEmail3" class="col-sm-2 col-form-label">Brand</label>
        <div class="col-sm-8">
          <input
            type="text"
            class="form-control"
            v-model="newCar.brand"
            placeholder="Brand"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword3" class="col-sm-2 col-form-label"
          >Model</label
        >
        <div class="col-sm-8">
          <input
            type="text"
            class="form-control"
            placeholder="Model"
            v-model="newCar.model"
          />
        </div>
      </div>

      <div class="form-group row">
        <label for="inputEmail3" class="col-sm-2 col-form-label"
          >Max speed</label
        >
        <div class="col-sm-8">
          <input
            type="number"
            class="form-control"
            id="inputEmail3"
            placeholder="Max speed"
            v-model="newCar.maxSpeed"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword3" class="col-sm-2 col-form-label"
          >Number of doors</label
        >
        <div class="col-sm-8">
          <input
            type="number"
            class="form-control"
            id="inputPassword3"
            placeholder="Number of doors"
            v-model="newCar.numberOfDoors"
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputState" class="col-sm-2 col-form-label">Year</label>
        <div class="form-group col-sm-8">
          <select v-model="newCar.year" class="form-control">
            <option v-for="year in yearsOfCar" :key="year">{{ year }}</option>
          </select>
        </div>
      </div>
      <fieldset class="form-group">
        <div class="row">
          <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
          <div class="col-sm-8">
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gridRadios"
                id="diesel"
                value="diesel"
                v-model="newCar.engine"
                checked
              />
              <label class="form-check-label" for="gridRadios1">
                Diesel
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gridRadios"
                id="petrol"
                value="petrol"
                v-model="newCar.engine"
                checked
              />
              <label class="form-check-label" for="gridRadios1">
                Petrol
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="gridRadios"
                id="electric"
                v-model="newCar.engine"
                value="electric"
              />
              <label class="form-check-label" for="gridRadios2">
                Electric
              </label>
            </div>
            <div class="form-check ">
              <input
                class="form-check-input"
                type="radio"
                name="gridRadios"
                id="hybrid"
                v-model="newCar.engine"
                value="hybrid"
              />
              <label class="form-check-label" for="gridRadios3">
                Hybrid
              </label>
            </div>
          </div>
        </div>
      </fieldset>

      <div class="form-group row">
        <div class="col-sm-2">Checkbox</div>
        <div class="col-sm-8">
          <div class="form-check">
            <input
              class="form-check-input"
              v-model="newCar.isAutomatic"
              type="checkbox"
              id="gridCheck1"
            />
            <label class="form-check-label" for="gridCheck1">
              Is Automatic
            </label>
          </div>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-8">
          <button @click="add" class="btn btn-success btn-lg">
            Add
          </button>
        </div>
        <button class="btn btn-warning btn-lg" id="btn" @click="reset">
          Reset
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import CarService from "../service/CarService.js";
export default {
  data() {
    return {
      yearsOfCar: [
        1990,
        1991,
        1992,
        1993,
        1994,
        1995,
        1996,
        1997,
        1998,
        1999,
        2000,
        2001,
        2002,
        2003,
        2004,
        2005,
        2006,
        2007,
        2008,
        2009,
        2010,
        2011,
        2012,
        2013,
        2014,
        2015,
        2016,
        2017,
        2018,
      ],

      newCar: {
        brand: "",
        model: "",
        year: "",
        maxSpeed: null,
        numberOfDoors: null,
        isAutomatic: "",
        engine: "",
      },
    };
  },

  methods: {
    reset() {
      let button = document.querySelector("btn");
      let inputs = document.querySelectorAll("inputs");
      button.addEventListener("click", function() {
        inputs.forEach((input) => (input.value = ""));
      });
    },

    add: function() {
      CarService.add(this.newCar);

      this.$router.push({ name: "cars" });
    },
  },
};
</script>

<style scoped></style>
