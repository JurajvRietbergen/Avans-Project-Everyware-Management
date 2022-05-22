<template>
  <b-card title="Genereer Codes">
    <hr>
    <div class="d-flex mb-1">
      <b-form-input v-model="amount" placeholder="Aantal codes te genereren" />
      <b-button class="ml-1" size="sm" variant="primary" @click="generateCodes()">
        Genereer
      </b-button>
    </div>
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
            this.generatedCodes = this.$store.state.codes
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    async submitData (data) {
      this.$nuxt.$loading.start()
      await this.$api.inventarisatie.assignUser(data).then((res) => {
        this.$nuxt.$loading.finish()
        return res
      })
        .catch((e) => {
          // Error handling if API is broken
          this.$bvModal.msgBoxOk('' + e)
          this.$nuxt.$loading.finish()
          return null
        })
    }
  }
}
</script>

<style scoped>

</style>
