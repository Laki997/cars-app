<template>
  <div>
    <!-- <div v-if="singleCar !== ''">
      <form name="form" @submit.prevent="add">
        <br />
        <br />
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-2 col-form-label">Brand</label>
          <div class="col-sm-8">
            <input
              type="text"
              class="form-control"
              v-model="singleCar.brand"
              placeholder="Brand"
              id="brand"
              name="brand"
              required
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword3" class="col-sm-2 col-form-label"
            >Model</label
          >
          <div class="col-sm-8">
            <input
              type="texts"
              class="form-control"
              placeholder="Model"
              v-model="singleCar.model"
              id="model"
              name="brand"
              required
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
              placeholder="Max speed"
              v-model="singleCar.maxSpeed"
              id="maxSpeed"
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
              id="numberOfDoors"
              placeholder="Number of doors"
              v-model="singleCar.numberOfDoors"
              name="numberOfDoors"
              required
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputState" class="col-sm-2 col-form-label">Year</label>
          <div class="form-group col-sm-8">
            <select
              required
              name="year"
              v-model="singleCar.year"
              class="form-control"
            >
              <option id="year" v-for="year in yearsOfCar" :key="year">{{
                year
              }}</option>
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
                  name="motor"
                  id="motor"
                  value="diesel"
                  v-model="singleCar.engine"
                  checked
                  required
                />
                <label class="form-check-label" for="gridRadios1">
                  Diesel
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="motor"
                  id="motor"
                  value="petrol"
                  v-model="singleCar.engine"
                  checked
                  required
                />
                <label class="form-check-label" for="gridRadios1">
                  Petrol
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="motor"
                  id="motor"
                  v-model="singleCar.engine"
                  value="electric"
                  required
                />
                <label class="form-check-label" for="gridRadios2">
                  Electric
                </label>
              </div>
              <div class="form-check ">
                <input
                  class="form-check-input"
                  type="radio"
                  name="motor"
                  id="motor"
                  v-model="singleCar.engine"
                  value="hybrid"
                  required
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
                v-model="singleCar.isAutomatic"
                type="checkbox"
                id="isAutomatic"
                name="isAutomatic"
                required
              />
              <label class="form-check-label" for="gridCheck1">
                Is Automatic
              </label>
            </div>
          </div>
        </div>
        <div class="form-group row">
          <div class="col-sm-8">
            <button type="submit" @click="edit" class="btn btn-success btn-lg">
              Edit
            </button>
          </div>
          <button class="btn btn-warning btn-lg" id="btn" @click="reset">
            Reset
          </button>
          <button class="btn btn-primary btn-lg" id="btn" @click="formAlert">
            Preview
          </button>
        </div>
      </form>
    </div> -->

    <!-- Ovo gore je forma za edit dole za add -->

    <form name="form" @submit.prevent="displayEditOrAdd">
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
            id="brand"
            name="brand"
            required
            minlength="2"
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
            id="model"
            name="brand"
            required
            minlength="2"
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
            placeholder="Max speed"
            v-model="newCar.maxSpeed"
            id="maxSpeed"
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
            id="numberOfDoors"
            placeholder="Number of doors"
            v-model="newCar.numberOfDoors"
            name="numberOfDoors"
            required
          />
        </div>
      </div>
      <div class="form-group row">
        <label for="inputState" class="col-sm-2 col-form-label">Year</label>
        <div class="form-group col-sm-8">
          <select
            required
            name="year"
            v-model="newCar.year"
            class="form-control"
          >
            <option id="year" v-for="year in yearsOfCar" :key="year">{{
              year
            }}</option>
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
                name="motor"
                id="motor"
                value="diesel"
                v-model="newCar.engine"
                checked
                required
              />
              <label class="form-check-label" for="gridRadios1">
                Diesel
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="motor"
                id="motor"
                value="petrol"
                v-model="newCar.engine"
                checked
                required
              />
              <label class="form-check-label" for="gridRadios1">
                Petrol
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input"
                type="radio"
                name="motor"
                id="motor"
                v-model="newCar.engine"
                value="electric"
                required
              />
              <label class="form-check-label" for="gridRadios2">
                Electric
              </label>
            </div>
            <div class="form-check ">
              <input
                class="form-check-input"
                type="radio"
                name="motor"
                id="motor"
                v-model="newCar.engine"
                value="hybrid"
                required
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
              id="isAutomatic"
              name="isAutomatic"
              required
              checked="false"
            />
            <label class="form-check-label" for="gridCheck1">
              Is Automatic
            </label>
          </div>
        </div>
      </div>
      <div class="form-group row">
        <div class="col-sm-8">
          <div v-if="addOrEdit">
            <button
              type="submit"
              id="btnAddOrEdit"
              class="btn btn-success btn-lg"
            >
              Edit
            </button>
          </div>
          <div v-else>
            <button
              type="submit"
              id="btnAddOrEdit"
              class="btn btn-success btn-lg"
            >
              Add
            </button>
          </div>
        </div>
        <button class="btn btn-warning btn-lg" id="btn" @click="reset">
          Reset
        </button>
        <button class="btn btn-primary btn-lg" id="btn" @click="formAlert">
          Preview
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import CarService from "../service/CarService.js";
export default {
  props: ["id"],
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

      singleCar: "",
    };
  },

  methods: {
    reset() {
      this.newCar.brand = "";
      this.newCar.model = "";
      this.newCar.year = "";
      this.newCar.maxSpeed = "";
      this.newCar.isAutomatic = "";
      (this.newCar.numberOfDoors = ""), (this.newCar.engine = "");
    },

    formAlert() {
      let alert_string = "";
      alert_string = alert_string + "Brand: " + this.newCar.brand;
      alert_string = alert_string + ", \n";
      alert_string = alert_string + "Model: " + this.newCar.model;
      alert_string = alert_string + ", \n";
      alert_string = alert_string + "Max Speed: " + this.newCar.maxSpeed;
      alert_string = alert_string + ", \n";
      alert_string =
        alert_string + "Number of Doors: " + this.newCar.numberOfDoors;
      alert_string = alert_string + ", \n";
      alert_string = alert_string + "Is automatic: " + this.newCar.isAutomatic;
      alert_string = alert_string + ", \n";
      alert_string = alert_string + "Vrsta motora: " + this.newCar.engine;

      alert_string = alert_string + ", \n";
      alert_string = alert_string + "Godina proizvodnje: " + this.newCar.year;

      alert(alert_string);
    },

    displayEditOrAdd() {
      if (this.addOrEdit) {
        let data = CarService.edit(this.id, this.newCar);

        data.then(this.$router.push({ name: "cars" }));
      } else {
        let data = CarService.add(this.newCar);
        data.then(this.$router.push({ name: "cars" }));
      }
    },
  },

  async created() {
    let singleCar = await CarService.get(this.id);
    this.newCar = singleCar;
  },
  computed: {
    addOrEdit: function() {
      console.log(this.id);
      if (this.id) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style scoped></style>
