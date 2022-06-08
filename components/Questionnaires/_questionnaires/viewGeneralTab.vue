<template>
  <b-card title="Vragenlijst Info">
    <hr>
    <div class="d-flex flex-column">
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
    </div>
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
      }
    }
  },
  computed: {
    isReadonly () {
      const currentDate = new Date().setHours(0, 0, 0, 0)
      const startDate = new Date(this.data.startdate).setHours(0, 0, 0, 0)
      return currentDate > startDate
    }
  },
  mounted () {
    this.form = this.data
  }

}
</script>

<style scoped>

</style>
