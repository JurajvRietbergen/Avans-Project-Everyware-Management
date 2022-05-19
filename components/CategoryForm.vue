<template>
  <div>
    <h1>Maak een nieuwe Categorie aan</h1>
    <div class="form-group col-md-6">
      <label for="categoryInput">Categorie</label>
      <input
        id="categoryInput"
        v-model="form.categoryText"
        type="text"
        class="form-control"
        aria-describedby="category"
        placeholder="Vul categorie in"
      >
    </div>

    <button class="btn btn-primary " @click="submit()">
      Submit
    </button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        categoryText: ''
      }
    }
  },
  methods: {
    submit () {
      this.$api.questionnaire.postCategory(this.form).then((res) => {
      })
    }
  }

}
</script>
