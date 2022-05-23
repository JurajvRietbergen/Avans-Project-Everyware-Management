<template>
  <b-card title="Genereer Codes">
    <hr>
    <div class="d-flex mb-1">
      <b-form-input v-model="amount" placeholder="Aantal codes te genereren" />
      <b-button class="ml-1" size="sm" variant="primary" @click="generateCodes()">
        Genereer
      </b-button>
    </div>
    <h1 v-if="generatedCodes">
      Generated Codes
    </h1>
    <hr v-if="generatedCodes">
    <b-list-group>
      <b-list-group-item v-for="(codes) in generatedCodes" :key="codes">
        {{ codes }}
      </b-list-group-item>
    </b-list-group>
  </b-card>
</template>

<script>
export default {
  data () {
    return {
      amount: null,
      generatedCodes: null
    }
  },
  methods: {
    generateCodes () {
      this.$bvModal.msgBoxConfirm('Wanneer de codes zijn gegenereerd kunt u niet meer de vragenlijst aanpassen!')
        .then((value) => {
          if (value) {
            this.$emit('submitQuestionnaire', this.amount)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    updateCodes (receivedCodes) {
      this.generatedCodes = receivedCodes
    }
  }
}
</script>

<style scoped>

</style>
