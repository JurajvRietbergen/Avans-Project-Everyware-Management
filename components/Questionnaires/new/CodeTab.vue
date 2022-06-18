<template>
  <b-card title="Genereer Codes">
    <hr>
    <div class="d-flex mb-1">
      <b-form-input v-model="amount" placeholder="Aantal codes te genereren" />
      <b-button :disabled="amountValid" class="ml-1" size="sm" variant="primary" @click="generateCodes()">
        Genereer
      </b-button>
    </div>
    <!-- <h1 v-if="generatedCodes">
      Generated Codes
    </h1>
    <hr v-if="generatedCodes">
    <b-list-group>
      <b-list-group-item v-for="(codes) in generatedCodes" :key="codes">
        {{ codes }}
      </b-list-group-item>
    </b-list-group> -->
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
  computed: {
    amountValid () {
      if (this.amount) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    generateCodes () {
      if (this.amount) {
        if (this.validation()) {
          this.$bvModal.msgBoxConfirm('Wanneer de codes zijn gegenereerd kunt u niet meer de vragenlijst aanpassen!')
            .then((value) => {
              if (value) {
                this.$emit('submitQuestionnaire', this.amount)
              }
            })
            .catch((err) => {
              console.log(err)
            })
        } else {
          const erros = this.errorMessage()
          let errorString
          erros.forEach((error) => {
            if (errorString) {
              errorString = errorString + ', ' + error
            } else {
              errorString = error
            }
          })
          this.$bvModal.msgBoxOk('U heeft fouten bij de volgende invulvelden: ' + errorString)
        }
      } else {
        this.$bvModal.msgBoxOk('Voer een hoeveelheid in')
      }
    },
    updateCodes (receivedCodes) {
      this.generatedCodes = receivedCodes
    },

    validation () {
      const check = this.$store.state.questionnaire
      if (!check.title) {
        if (check.startdate) {
          if (check.enddate) {
            if (check.categories) {
              if (check.startdate < check.enddate) {
                return true
              }
            }
          }
        }
      }
      return false
    },

    errorMessage () {
      const check = this.$store.state.questionnaire
      const errors = []
      if (!check.title) {
        errors.push('Titel')
      }
      if (!check.startdate) {
        errors.push('Start datum')
      }
      if (!check.enddate) {
        errors.push('Eind datum')
      }
      if (!check.categories) {
        errors.push('Categorieën')
      }
      if (check.startdate && check.enddate) {
        if (check.startdate > check.enddate) {
          errors.push('Datums incorrect')
        }
      }
      return errors
    }
  }
}
</script>

<style scoped>

</style>
