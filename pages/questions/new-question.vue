<template>
  <div>
    <h1>Maak een nieuwe vraag aan</h1>
    <div class="form-group col-md-6">
      <label for="questionInput">Vraag</label>
      <input
        id="questionInput"
        v-model="form.questionText"
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
        questionText: ''
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
      this.$api.questionnaire.postQuestion(this.form).then((res) => {
      })
    }
  }

}
</script>
