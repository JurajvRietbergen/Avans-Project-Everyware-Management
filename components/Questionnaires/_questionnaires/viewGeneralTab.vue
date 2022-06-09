<template>
  <b-card title="Vragenlijst Info">
    <hr>
    <b-form @submit="onSubmit">
      <b-form-group
        id="input-group-1"
        label="Vragenlijst Titel:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.title"
          placeholder="Schrijf een titel"
          required
          :readonly="isReadonly"
        />
      </b-form-group>

      <b-form-group id="input-group-2" label="Beschrijving:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.introduction"
          placeholder="Schrijf een introductie"
          required
          :readonly="isReadonly"
        />
      </b-form-group>

      <b-form-group id="input-group-3" label="Start Datum:" label-for="input-3">
        <b-form-datepicker
          id="input-3"
          v-model="form.startdate"
          locale="nl"
          required
          :readonly="isReadonly"
        />
      </b-form-group>

      <b-form-group id="input-group-4" label="Eind Datum:" label-for="input-3">
        <b-form-datepicker
          id="input-4"
          v-model="form.enddate"
          locale="nl"
          required
          :readonly="isReadonly"
        />
      </b-form-group>
      <b-button v-if="!isReadonly" type="submit" size="sm" variant="primary">
        Doorgaan
      </b-button>
    </b-form>
  </b-card>
</template>

<script>

export default {
  props: ['data'],
  data () {
    return {
      form: {
        title: '',
        introduction: '',
        startdate: '',
        enddate: ''
      },
      isReadonly: true
    }
  },
  mounted () {
    this.form = this.data
    const currentDate = new Date().setHours(0, 0, 0, 0)
    const startDate = new Date(this.data.startdate).setHours(0, 0, 0, 0)
    this.isReadonly = currentDate > startDate
  },
  methods: {
    onSubmit (event) {
      console.log('test')
      event.preventDefault()
      this.$emit('nextTab', this.form)
    }
  }

}
</script>

<style scoped>

</style>
