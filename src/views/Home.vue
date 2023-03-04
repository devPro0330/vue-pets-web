<template>
  <div class="home-view-container">
    <h1>Adopt a new best friend</h1>
    <div class="action-bar">
      <div class="couter-bar-item">
        <span class="title">Cat :</span>
        <span class="number">{{ getAllCats.length }}</span>
      </div>
      <div class="couter-bar-item">
        <span class="title">Dog :</span>
        <span class="number">{{ getAllDogs.length }}</span>
      </div>
      <div class="couter-bar-item">
        <span class="title">Total :</span>
        <span class="number">{{ animalsCount }}</span>
      </div>

      <button @click="togglePetForm" class="btn btn-primary">
        Add New Pet
      </button>
    </div>

    <FormGroup
      :handleSubmit="handleSubmit"
      :showPetForm="showPetForm"
      :formData="formData"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import FormGroup from "../components/FormGroup.vue";

export default {
  name: "Home",
  components: {
    FormGroup,
  },
  data() {
    return {
      showPetForm: false,
      formData: {
        name: "",
        age: 0,
        species: null,
      },
    };
  },
  computed: {
    ...mapGetters(["animalsCount", "getAllCats", "getAllDogs"]),
  },
  methods: {
    ...mapActions(["addPet"]),
    togglePetForm() {
      this.showPetForm = !this.showPetForm;
    },
    handleSubmit() {
      const { species, age, name } = this.formData;
      const payload = {
        species,
        pet: {
          name,
          age,
          species,
          gender: null,
          color: null,
          weight: null,
          location: null,
          notes: null,
        },
      };
      this.addPet(payload);

      this.formData = {
        name: "",
        age: 0,
        species: null,
      };
    },
  },
};
</script>
