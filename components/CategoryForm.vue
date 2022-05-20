<template>
  <div class="container float-left">
    <div class="row align-items-start">
      <div class="form-group col-sm-4">
        <input
          id="categoryInput"
          v-model="form.categoryText"
          type="text"
          class="form-control"
          aria-describedby="category"
          placeholder="Vul categorie in"
        >
      </div>
      <div class="form-group col-sm-4">
        <input
          id="additionInput"
          v-model="form.additionText"
          type="text"
          class="form-control"
          aria-describedby="addition"
          placeholder="Vul toevoeging in"
        >
      </div>

      <button class="btn btn-primary " @click="submit()">
        Submit
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        categoryText: '',
        additionText: ''
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
