<template>
  <div>
    <h1>Beheerpagina</h1>
    <div class="form-group col-md-6">
      <label for="questionInput">Vraag</label>
      <input
        id="questionInput"
        v-model="form.selectedText"
        type="text"
        class="form-control"
        aria-describedby="question"
        placeholder="Vul vraag in"
      >
    </div>
    <div class="form-group col-md-6">
      <label for="typeSelect">Type</label>
      <select id="typeSelect" v-model="form.selectedType" class="form-control">
        <option v-for="option in typeOptions" :key="option.value" :value="option.value">
          {{ option.text }}
        </option>
      </select>
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
        selectedType: 'open',
        selectedText: ''
      },
      // TODO get options from database table
      typeOptions: [
        { text: 'Open vraag', value: 'open' },
        { text: 'Cijfer', value: 'digit' }
      ]
    }
  },
  methods: {
    submit () {
      console.log(this.form)
      console.log(this.$api)
      this.$api.questionnaire.postQuestion(this.form).then((res) => {
        console.log(res)
      })
    }
  }

}

</script>
